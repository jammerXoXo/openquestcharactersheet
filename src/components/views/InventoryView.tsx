import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Form, GridColumn, GridRow, Input, Label, Popup, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { characterStats, item, learnedSpell, spellDescription } from "../../types/types"
import { addItems, addSpells, deleteItems, deleteSpells, selectInventory, selectMagic, updateSpell } from "../../state/CharacterContext"
import _ from "lodash"
import { spellDescriptions } from "../../constants/magic"
import { getBaseSpellGrowthCosts } from "../../utils/utils"
import { SheetContext } from "../../state/SheetContext"
import { itemDescriptions } from "../../constants/items"



//A character has a limit of their POW in magnitude in spells. So, for example, a character with a POW of 10 could learn Babel (which has a fixed magnitude of 2), Coordination 3 Disruption 3 and Heal 2, which is a total of ten points of magnitude.
//Characters can learn Personal Magic spells from other characters who know the spell. If the spell has a variable magnitude, the teacher must know it at the magnitude that the character wants to learn it or higher. It costs one growth point per magnitude point to learn a Personal Magic spell. If a character knows a spell at a lower magnitude, they only have to pay the difference in growth points to gain the spell at a higher magnitude.

//The character must pay a cost in growth points, equal to twice the magnitude of the spell, to the deity. Incremental purchase of spells is allowed, e.g. the player buys Shield 1 for two growth points and then later increases this to Shield 3, by spending an additional four points.

//The character must first learn the spell through research. To learn a particular Sorcery spell, the caster must possess the spell in written form or be taught it by a teacher. The player then spends three Growth points and writes the spell down on their character sheet.
//If the casting test fails, the spell does not take effect, and the caster loses one magic point.

const InventoryView = () => {

    const [sortColumn, setSortColumn] = useState<keyof item>('name')
    const [sortDirection, setSortDirection] = useState<"ascending" | "descending" | undefined>(undefined)
    const [selected, setSelected] = useState<{[key: string]: number}>({} as {[key: string]: number})
    const [deleting, setDeleting] = useState<boolean>(false)
    const [addingItem, setAddingItem] = useState<boolean>(false)

    const {editingMode} = useContext(SheetContext)

    const inventory = useSelector((state: { stats: characterStats }) => selectInventory(state))
    const allItems = itemDescriptions
    const dispatch = useDispatch()

    useEffect(() => {
        setSelected({} as {[key: string]: number})
    }, [editingMode, addingItem])

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

    const updateSort = (col: keyof item) => {
        setSortColumn(col)
        setSortDirection(sortDirection === "descending" || sortDirection === undefined ? "ascending" : "descending")
    }

    const getTableData = (itemList: item[]) => {
        let data = _.sortBy(itemList, sortColumn)
        if (sortDirection === 'descending') {
            data = data.reverse()
        }
        return (data.map((item: item) => <TableRow key={item.name} active={item.name in selected} onClick={() => updateSelected(item.name)}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.enc}</TableCell>
                    <TableCell>{item.cost}</TableCell>
                    <TableCell>{item.tags}</TableCell>        
                </TableRow>)
        )
    }

    const getButtons = () => {
        return (addingItem?
        <div style={{display: 'flex', justifyContent: 'space-between', height: '35px', marginTop: '5px'}}>
            <Button icon='plus' disabled={Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: `Add ${Object.keys(selected).length} items`}} onClick={() => dispatchAddItems()}/>
            <Button icon='x' label={{as: 'a', basic: true, content: 'Back'}} onClick={() => setAddingItem(false)}/>
        </div>:
        <div style={{display: 'flex', justifyContent: 'space-between', height: '35px', marginTop: '5px'}}>
            <Button icon='plus' disabled={!editingMode} label={{as: 'a', basic: true, content: 'Add items'}} onClick={() => setAddingItem(true)}/>
            <Button icon='trash' disabled={!editingMode || Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete selected'}} onClick={() => dispatchDeleteItems()}/>
        </div>
        )
    }

    const dispatchDeleteItems = () => {
        if (deleting) {
            setDeleting(false)
            dispatch(deleteItems({itemNames: Object.keys(selected)}))
            setSelected({})
        } else {
            setDeleting(true)
        }
    }

    const dispatchAddItems = () => {
        setAddingItem(false)
        dispatch(addItems({itemNames: Object.keys(selected)}))
        setSelected({})
    }


    const getLastSelected = () => {
        return Object.keys(selected).length > 0? itemDescriptions[Object.keys(selected)[Object.keys(selected).length - 1]]: null
    }

    return (
        <>
            <GridRow>
                <GridColumn width={9}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>{addingItem? 'All Items': 'Inventory'}</Label>
                        <Container style={{height: '467px', overflow: 'auto'}} >
                            <Table>
                                <TableHeader>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'name' ? sortDirection: undefined}
                                        onClick={() => updateSort('name')}>
                                        Item
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'type' ? sortDirection: undefined}
                                        onClick={() => updateSort('type')}>
                                        Type
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'enc' ? sortDirection: undefined}
                                        onClick={() => updateSort('enc')}>
                                        Enc
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'cost' ? sortDirection: undefined}
                                        onClick={() => updateSort('cost')}>
                                        Cost
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        sorted={sortColumn === 'tags' ? sortDirection: undefined}
                                        onClick={() => updateSort('tags')}>
                                        Tags
                                    </TableHeaderCell>
                                </TableHeader>
                                <TableBody>
                                    {getTableData(addingItem? Object.values(allItems): inventory)}
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

export default InventoryView