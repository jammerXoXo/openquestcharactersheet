import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Checkbox, Container, Form, GridColumn, GridRow, Input, Label, Popup, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { appState, item } from "../../types/types"
import { addItems,  deleteItems, selectCustomElements, selectInventory, updateItem} from "../../state/CharacterContext"
import _ from "lodash"
import { itemDescriptions } from "../../constants/items"


const re = /\s*\d+\s*/

const InventoryView = () => {

    const [sortColumn, setSortColumn] = useState<keyof item>('name')
    const [sortDirection, setSortDirection] = useState<"ascending" | "descending" | undefined>(undefined)
    const [selected, setSelected] = useState<{[key: string]: number}>({} as {[key: string]: number})
    const [viewing, setViewing] = useState<string | undefined>(undefined)
    const [deleting, setDeleting] = useState<boolean>(false)
    const [addingItem, setAddingItem] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [newCount, setNewCount] = useState<number>(0)
    const [valid, setValid] = useState<boolean>(true)
    const [popupOpen, setPopopOpen] = useState('')


    const inventory = useSelector((state: { state: appState }) => selectInventory(state))
    const customElements = useSelector((state: { state: appState }) => selectCustomElements(state))

    const allItems = useMemo( () => {
        return { ...itemDescriptions, ...customElements.items }
    }, [customElements])

    const dispatch = useDispatch()

    useEffect(() => {
        setSelected({} as {[key: string]: number})
    }, [addingItem])

    const updateSelected = (spell: string) => {
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

    const validateCount = (value: string) => {
        const match = re.exec(value)
        if (match) {
            const newCount = parseInt(value)
            setNewCount(newCount)
            setValid(true)
        } else {
            setValid(false)
        }
    }

    const getTableData = (itemList: item[]) => {
        let data = _.sortBy(itemList.filter(x => searchItems(x)), sortColumn)
        if (sortDirection === 'descending') {
            data = data.reverse()
        }
        return (data.map((item: item) => <TableRow key={item.name} active={item.name === viewing} onClick={() => setViewing(item.name)}>
                    <TableCell><Checkbox onChange={() => updateSelected(item.name)} checked={item.name in selected}></Checkbox></TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.enc}</TableCell>
                    {addingItem? '' : <Popup
                        onOpen={() => setPopopOpen(item.name)}
                        onClose={() => setPopopOpen('')}
                        open={popupOpen === item.name}
                        on='click' 
                        trigger={<TableCell>{item.count ?? 0 }</TableCell>}
                        content={<Input onKeyPress={(e: {key: string}) => e.key === 'Enter' && dispatch(updateItem({itemName: item.name, newValue: {count: newCount}}))} size='mini' action={{ content: 'set', onClick: () => dispatch(updateItem({itemName: item.name, newValue: {count: newCount}}))}} onChange={(_, {value}) => validateCount(value)} placeholder='Set Count...' error={!valid}/>}/>}
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
            <Button icon='plus' label={{as: 'a', basic: true, content: 'Add more items'}} onClick={() => setAddingItem(true)}/>
            <Button icon='trash' disabled={Object.keys(selected).length < 1} label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete selected'}} onClick={() => dispatchDeleteItems()}/>
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


    const getViewing = () => {
        return viewing? allItems[viewing]: null
    }

    return (
        <>
            <GridRow>
                <GridColumn width={10}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>{addingItem? 'All Items': 'Inventory'}</Label>
                        <Input fluid icon='search' size='mini'  onChange={(_, {value}) => setSearchTerm(value?.toLowerCase())}/>
                        <Container style={{height: '437px', overflow: 'auto', marginTop: '10px'}} >
                            <Table>
                                <TableHeader>
                                    <TableHeaderCell>
                                    </TableHeaderCell>
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
                                    {addingItem? '' :
                                    <TableHeaderCell
                                        sorted={sortColumn === 'count' ? sortDirection: undefined}
                                        onClick={() => updateSort('count')}>
                                        Count
                                    </TableHeaderCell>
                                    }
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
                <GridColumn width={6}>
                    <Segment>
                        <Label style={{height: '30px'}} attached="top">{getViewing()?.name}</Label>
                        <Container style={{height: '476px', overflow: 'auto'}}>
                            <span>{getViewing()?.description}</span>
                        </Container>
                    </Segment>
                </GridColumn>
            </GridRow>
        </>
    )
}

export default InventoryView