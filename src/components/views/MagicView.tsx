import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Form, GridColumn, GridRow, Label, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { baseSpell, characterStats, learnedSpell } from "../../types/types"
import { deleteSpells, selectMagic } from "../../state/CharacterContext"
import _ from "lodash"
import { spellDescriptions } from "../../constants/magic"



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
    const knownMagic = useSelector((state: { stats: characterStats }) => selectMagic(state))
    const allMagic = spellDescriptions
    const dispatch = useDispatch()



    const updateSort = (col: keyof learnedSpell) => {
        setSortColumn(col)
        setSortDirection(sortDirection === "descending" || sortDirection === undefined ? "ascending" : "descending")
    }

    const getTableData = (magic: baseSpell[]) => {
        let data = _.sortBy(magic, sortColumn)
        if (sortDirection === 'descending') {
            data = data.reverse()
        }
        console.log(data)
        return (data.map((spell: baseSpell) => <TableRow key={spell.name}>
                    <TableCell>{spell.name}</TableCell>
                    <TableCell>{spell.type}</TableCell>
                    <TableCell>{spell.magnitude}</TableCell>
                    <TableCell>{spell.variable}</TableCell>
                    <TableCell>{spell.tags}</TableCell>
                </TableRow>)
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

    const addSpell = () => {

    }

    return (
        <>
            <GridRow>
                <GridColumn width={8}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>Known Spells</Label>
                        <Container style={{height: '467px'}}>
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
                                        sorted={sortColumn === 'variable' ? sortDirection: undefined}
                                        onClick={() => updateSort('variable')}>
                                        Variable
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'tags' ? sortDirection: undefined}
                                        onClick={() => updateSort('tags')}>
                                        Tags
                                    </TableHeaderCell>
                                </TableHeader>
                                <TableBody>
                                    {getTableData(addingSpell? allMagic: knownMagic)}
                                </TableBody>
                            </Table>
                        </Container>
                    </Segment>
                    <Form>
                        <div style={{display: 'flex', justifyContent: 'space-between', height: '35px', marginTop: '5px'}}>
                            <Button icon='plus' label={{as: 'a', basic: true, content: 'Add spell'}} onClick={() => addSpell()}/>
                            <Button icon='trash' disabled={Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete selected'}} onClick={() => dispatchDeleteSpells()}/>
                        </div>
                    </Form>
                </GridColumn>
                <GridColumn width={8}>

                </GridColumn>
            </GridRow>
        </>
    )
}

export default MagicView