import { useContext, useState } from "react"
import {Container, Grid, Menu, MenuItem, Segment} from "semantic-ui-react"

import "./CharacterSheet.css"
import RollModal from "../modals/RollModal"
import { SheetContext } from "../../state/SheetContext"
import { ModalContext } from "../../state/ModalContext"
import StoryModal from "../modals/StoryModal"
import LoadModal from "../modals/LoadModal"
import StatsView from "../views/StatsView"
import MagicView from "../views/MagicView"
import { useDispatch, useStore } from "react-redux"
import { newCharacter } from "../../state/CharacterContext"
import { saveFile } from "../../utils/utils"
import Overview from "../views/Overview"
import InventoryView from "../views/InventoryView"
import NotesView from "../views/NotesView"
import CustomModal from "../modals/CustomModal"

const CharacterSheet = () => {
    const {editingMode, setEditingMode, activeSheet, setActiveSheet} = useContext(SheetContext)
    const {setLoadModalState, setCustomModalState} = useContext(ModalContext)
    const dispatch = useDispatch()
    const store = useStore()
    const state = store.getState()

    const [newChar, setNewChar] = useState(false)

    const dispatchNewCharacter = () => {
        if (newChar) {
            dispatch(newCharacter())
            setNewChar(false)
        } else {
            setNewChar(true)
            setTimeout(() => {
                setNewChar(false)
            }, 10*1000)
        }
    }

    const getView = () => {
        if (activeSheet === 'stats') {
            return <StatsView/>
        } else if (activeSheet === 'magic') {
            return <MagicView/>
        } else if (activeSheet === 'inventory') {
            return <InventoryView/>
        } else if (activeSheet === 'notes') {
            return <NotesView/>
        }
        return null
    }

    return (
        <>
            <RollModal/>
            <StoryModal/>
            <LoadModal />
            <CustomModal/>
            <Container className="sheetcontainer" >
                <Menu attached='top' >
                    <MenuItem position="right" className='menubutton' name='dice tray' disabled={true}/>
                    <MenuItem className='menubutton' name='edit' onClick={() => setEditingMode(!editingMode)} active={editingMode} />
                    <MenuItem className='menubutton' name={newChar? 'are you sure':'clear sheet'} onClick={() => dispatchNewCharacter()} />
                    <MenuItem className='menubutton' name='Add skill/spell/item' onClick={() => setCustomModalState({open: true})}/>
                    <MenuItem className='menubutton' name='load' onClick={() => setLoadModalState({open: true})} />
                    {/* @ts-expect-error  TODO fix this later :P */}
                    <MenuItem className='menubutton' name='download' onClick={() => saveFile(state)} />
                </Menu>
                <Segment className="charactersheet">
                    <Grid>
                        <Overview/>
                        {getView()}
                    </Grid>
                </Segment>
                <Menu attached='bottom' tabular>
                    <MenuItem name='Stats'  active={activeSheet === 'stats'} onClick={() => setActiveSheet('stats')}/>
                    <MenuItem name='Magic'  active={activeSheet === 'magic'} onClick={() => setActiveSheet('magic')}/>
                    <MenuItem name='Inventory'  active={activeSheet === 'inventory'} onClick={() => setActiveSheet('inventory')}/>
                    <MenuItem name='Notes'  active={activeSheet === 'notes'} onClick={() => setActiveSheet('notes')}/>
                </Menu>
            </Container>
        </>
    )

}

export default CharacterSheet