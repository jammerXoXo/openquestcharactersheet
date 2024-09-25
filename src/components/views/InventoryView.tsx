import { useContext, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Form, GridColumn, GridRow, Input, Label, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { appState, item } from "../../types/types"
import { addItems,  deleteItems, selectCustomElements, selectInventory} from "../../state/CharacterContext"
import _ from "lodash"
import { SheetContext } from "../../state/SheetContext"
import { itemDescriptions } from "../../constants/items"


const InventoryView = () => {

    const [sortColumn, setSortColumn] = useState<keyof item>('name')
    const [sortDirection, setSortDirection] = useState<"ascending" | "descending" | undefined>(undefined)
    const [selected, setSelected] = useState<{[key: string]: number}>({} as {[key: string]: number})
    const [deleting, setDeleting] = useState<boolean>(false)
    const [addingItem, setAddingItem] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('')

    const {editingMode} = useContext(SheetContext)

    const inventory = useSelector((state: { state: appState }) => selectInventory(state))
    const customElements = useSelector((state: { state: appState }) => selectCustomElements(state))

    const allItems = useMemo( () => {
        return { ...itemDescriptions, ...customElements.items }
    }, [customElements])

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

    const searchItems = (item: item) => {
        if ((searchTerm?.length ?? 0) === 0) {
            return true
        }
        return (item.name.toLowerCase().includes(searchTerm) || item.tags.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm))
    }

    const getTableData = (itemList: item[]) => {
        let data = _.sortBy(itemList.filter(x => searchItems(x)), sortColumn)
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
        return Object.keys(selected).length > 0? allItems[Object.keys(selected)[Object.keys(selected).length - 1]]: null
    }

    return (
        <>
            <GridRow>
                <GridColumn width={9}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>{addingItem? 'All Items': 'Inventory'}</Label>
                        <Container style={{height: '467px', overflow: 'auto'}} >
                            <Input fluid icon='search' size='mini'  onChange={(_, {value}) => setSearchTerm(value?.toLowerCase())}/>
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