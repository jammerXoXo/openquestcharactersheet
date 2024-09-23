import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Form, GridColumn, GridRow, Input, Label, Popup, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { characterStats, learnedSpell, spellDescription } from "../../types/types"
import { addSpells, deleteSpells, selectMagic, updateSpell } from "../../state/CharacterContext"
import _ from "lodash"
import { spellDescriptions } from "../../constants/magic"
import { getBaseSpellGrowthCosts } from "../../utils/utils"
import { SheetContext } from "../../state/SheetContext"



//A character has a limit of their POW in magnitude in spells. So, for example, a character with a POW of 10 could learn Babel (which has a fixed magnitude of 2), Coordination 3 Disruption 3 and Heal 2, which is a total of ten points of magnitude.
//Characters can learn Personal Magic spells from other characters who know the spell. If the spell has a variable magnitude, the teacher must know it at the magnitude that the character wants to learn it or higher. It costs one growth point per magnitude point to learn a Personal Magic spell. If a character knows a spell at a lower magnitude, they only have to pay the difference in growth points to gain the spell at a higher magnitude.

//The character must pay a cost in growth points, equal to twice the magnitude of the spell, to the deity. Incremental purchase of spells is allowed, e.g. the player buys Shield 1 for two growth points and then later increases this to Shield 3, by spending an additional four points.

//The character must first learn the spell through research. To learn a particular Sorcery spell, the caster must possess the spell in written form or be taught it by a teacher. The player then spends three Growth points and writes the spell down on their character sheet.
//If the casting test fails, the spell does not take effect, and the caster loses one magic point.

const MagicView = () => {

    const [sortColumn, setSortColumn] = useState<keyof learnedSpell>('name')
    const [sortDirection, setSortDirection] = useState<"ascending" | "descending" | undefined>(undefined)
    const [selected, setSelected] = useState<{[key: string]: number}>({} as {[key: string]: number})
    const [deleting, setDeleting] = useState<boolean>(false)
    const [addingSpell, setAddingSpell] = useState<boolean>(false)
    const [newMagnitude, setNewMagnitude] = useState<number>(0)
    const [valid, setValid] = useState<boolean>(true)
    const [popupOpen, setPopopOpen] = useState(false)

    const {editingMode} = useContext(SheetContext)

    const knownMagic = useSelector((state: { stats: characterStats }) => selectMagic(state))
    const allMagic = spellDescriptions
    const dispatch = useDispatch()

    const re = /-?\d+/

    useEffect(() => {
        setSelected({} as {[key: string]: number})
    }, [editingMode, addingSpell])

    const updateSelected = (spell: string) => {
        if (!editingMode) {
            setSelected({[spell]: 0})
            return
        }

        const temp = selected
        if (spell in temp) {
            delete temp[spell]
        } else {
            temp[spell] = 0
        }
        setSelected({...temp})
    }

    const updateSort = (col: keyof learnedSpell) => {
        setSortColumn(col)
        setSortDirection(sortDirection === "descending" || sortDirection === undefined ? "ascending" : "descending")
    }

    const validateNewMagnitude = (value: string, magnitude: number) => {
        const match = re.exec(value)
        if (match) {
            const newMag = parseInt(value)
            if (newMag >= magnitude && newMag < 7) {
                setValid(true)
                setNewMagnitude(newMag)
            } else {
                setValid(false)
            }
        } else {
            setValid(false)
        }
    }

    const getKnownSpellTableData = () => {
        let data = _.sortBy(knownMagic, sortColumn)
        if (sortDirection === 'descending') {
            data = data.reverse()
        }
        return (data.map((spell: learnedSpell) => <TableRow key={spell.name} active={spell.name in selected} onClick={() => updateSelected(spell.name)}>
                    <TableCell>{spell.name}</TableCell>
                    <TableCell>{spell.type}</TableCell>
                    <Popup
                        onOpen={() => setPopopOpen(true)}
                        onClose={() => setPopopOpen(false)}
                        open={popupOpen}
                        on='click'
                        disabled={!spell.variable || spell.type === 'sorcery'} 
                        trigger={<TableCell>{spell.magnitude}{spell.variable? '+': ''}{spell.type === 'divine' || spell.type ==='personal' ? ` (${spell.learnedMagnitude})`:''}</TableCell>}
                        content={<Input onKeyPress={(e) => e.key === 'Enter' && dispatchUpdateSpells({name: spell.name, learnedMagnitude: newMagnitude})} size='mini' action={{ content: 'set', onClick: () => dispatchUpdateSpells({name: spell.name, learnedMagnitude: newMagnitude})}} onChange={(e, {value}) => validateNewMagnitude(value, spell.magnitude)} placeholder='Set Magnitude...' error={!valid}/>}/>
                    <TableCell>{spell.tags}</TableCell>
                </TableRow>)
        )
    }

    const getAllSpellTableData = () => {
        let data = _.sortBy(Object.values(allMagic).filter((x) => knownMagic.reduce((acc, spell) => acc && x.name !== spell.name, true)), sortColumn)
        if (sortDirection === 'descending') {
            data = data.reverse()
        }
        return (data.map((spell: spellDescription) => <TableRow key={spell.name} active={spell.name in selected} onClick={() => updateSelected(spell.name)}>
                    <TableCell>{spell.name}</TableCell>
                    <TableCell>{spell.type}</TableCell>
                    <TableCell>{spell.magnitude}{spell.variable? '+': ''}</TableCell>
                    <TableCell>{spell.tags}</TableCell>
                </TableRow>)
        )
    }

    const getButtons = () => {
        return (addingSpell?
        <div style={{display: 'flex', justifyContent: 'space-between', height: '35px', marginTop: '5px'}}>
            <Button icon='plus' disabled={Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: `Add ${Object.keys(selected).length} spells for ${getBaseSpellGrowthCosts(Object.keys(selected))} growth points`}} onClick={() => dispatchAddSpells()}/>
            <Button icon='x' label={{as: 'a', basic: true, content: 'Back'}} onClick={() => setAddingSpell(false)}/>
        </div>:
        <div style={{display: 'flex', justifyContent: 'space-between', height: '35px', marginTop: '5px'}}>
            <Button icon='plus' disabled={!editingMode} label={{as: 'a', basic: true, content: 'Add spells'}} onClick={() => setAddingSpell(true)}/>
            <Button icon='trash' disabled={!editingMode || Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete selected'}} onClick={() => dispatchDeleteSpells()}/>
        </div>
        )
    }

    const dispatchDeleteSpells = () => {
        if (deleting) {
            setDeleting(false)
            dispatch(deleteSpells({spellNames: Object.keys(selected)}))
            setSelected({})
        } else {
            setDeleting(true)
        }
    }

    const dispatchAddSpells = () => {
        setAddingSpell(false)
        dispatch(addSpells({spellNames: Object.keys(selected)}))
        setSelected({})
    }

    const dispatchUpdateSpells = (spell: Partial<learnedSpell>) => {
        dispatch(updateSpell(spell))
    }

    const getLastSelected = () => {
        return Object.keys(selected).length > 0? spellDescriptions[Object.keys(selected)[Object.keys(selected).length - 1]]: null
    }

    return (
        <>
            <GridRow>
                <GridColumn width={9}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>{addingSpell? 'All Spells': 'Known Spells'}</Label>
                        <Container style={{height: '467px', overflow: 'auto'}} >
                            <Table>
                                <TableHeader>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'name' ? sortDirection: undefined}
                                        onClick={() => updateSort('name')}>
                                        Spell
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'type' ? sortDirection: undefined}
                                        onClick={() => updateSort('type')}>
                                        Type
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'magnitude' ? sortDirection: undefined}
                                        onClick={() => updateSort('magnitude')}>
                                        Magnitude
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'tags' ? sortDirection: undefined}
                                        onClick={() => updateSort('tags')}>
                                        Tags
                                    </TableHeaderCell>
                                </TableHeader>
                                <TableBody>
                                    {addingSpell? getAllSpellTableData(): getKnownSpellTableData()}
                                </TableBody>
                            </Table>
                        </Container>
                    </Segment>
                    <Form>
                        {getButtons()}
                    </Form>
                </GridColumn>
                <GridColumn width={7}>
                    <Segment>
                        <Label attached="top">{getLastSelected()?.name}</Label>
                        <Container style={{height: '467px', overflow: 'auto'}}>
                            <span>{getLastSelected()?.description}</span>
                        </Container>
                    </Segment>
                </GridColumn>
            </GridRow>
        </>
    )
}

export default MagicView