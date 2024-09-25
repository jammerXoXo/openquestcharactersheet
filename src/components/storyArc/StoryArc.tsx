import { useContext } from "react"
import { ModalContext } from "../../state/ModalContext"
import { characterStats, motivesKeys } from "../../types/types"
import { useSelector } from "react-redux"
import { selectMotive } from "../../state/CharacterContext"

type StoryArcProps = {
    id: string
    type: motivesKeys
}

const StoryArc = ({id, type}: StoryArcProps) => {

    const {setStoryModalState} = useContext(ModalContext)
    const motives = useSelector((state: { state: appState }) => selectMotive(state, type))

    return (
        <span className='storyarc' style={{marginLeft: '3px', opacity: motives[id].completed? '50%': '100%' }} onClick={() => {setStoryModalState({open: true, type: type, id: id})}} >{motives[id].name}</span>
    )
}

export default StoryArc