import { useContext } from "react"
import { ModalContext } from "../../state/ModalContext"
import { appState, notesKeys } from "../../types/types"
import { useSelector } from "react-redux"
import { selectNotes } from "../../state/CharacterContext"

type StoryArcProps = {
    id: string
    type: notesKeys
}

const StoryArc = ({id, type}: StoryArcProps) => {

    const {setStoryModalState} = useContext(ModalContext)
    const motives = useSelector((state: { state: appState }) => selectNotes(state, type))

    return (
        <span className='storyarc' style={{marginLeft: '3px', opacity: motives[id].completed? '50%': '100%' }} onClick={() => {setStoryModalState({open: true, type: type, id: id})}} >{motives[id].name}</span>
    )
}

export default StoryArc