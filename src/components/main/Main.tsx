import { Menu, MenuItem } from "semantic-ui-react"
import CharacterSheet from "../characterSheet/CharacterSheet"
import { useContext, useState } from "react"
import { SheetContext } from "../../state/SheetContext"
import { ModalContext } from "../../state/ModalContext"
import { newCharacter } from "../../state/CharacterContext"
import { useDispatch, useStore } from "react-redux"
import { saveFile } from "../../utils/utils"
import RollModal from "../modals/RollModal"
import CustomModal from "../modals/CustomModal"
import OptionsModal from "../modals/OptionsModal"
import LoadModal from "../modals/LoadModal"


const Main = () => {
    const {editingMode, setEditingMode } = useContext(SheetContext)
    const {setLoadModalState, setCustomModalState, setOptionsModalState} = useContext(ModalContext)
    const [newChar, setNewChar] = useState(false)
    const dispatch = useDispatch()
    const store = useStore()
    const state = store.getState()

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

    return (
        <div style={{height: '100%'}}>
            <Menu className='mainmenu'>
                <MenuItem position="right" className='menubutton' name='dice tray' disabled={true}/>
                <MenuItem className='menubutton' name={editingMode?'view':'edit'} onClick={() => setEditingMode(!editingMode)} active={editingMode} />
                <MenuItem className='menubutton' name='Add skill/spell/item' onClick={() => setCustomModalState({open: true})}/>
                <MenuItem className='menubutton' name='Options' onClick={() => setOptionsModalState({open: true})}/>
                <MenuItem className='menubutton' name={newChar? 'are you sure':'clear sheet'} onClick={() => dispatchNewCharacter()} />
                <MenuItem className='menubutton' name='load' onClick={() => setLoadModalState({open: true})} />
                {/* @ts-expect-error  TODO fix this later :P */}
                <MenuItem className='menubutton' name='download' onClick={() => saveFile(state)} />
            </Menu>
            <RollModal/>
            <LoadModal />
            <CustomModal/>
            <OptionsModal/>
            <CharacterSheet/>
        </div>
    )
}

export default Main