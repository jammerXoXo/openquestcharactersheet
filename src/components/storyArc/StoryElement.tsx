import {Button, Container, Label, Segment } from "semantic-ui-react"
import StoryArc from "./StoryArc"
import { useContext, useEffect, useState } from "react"
import { v4 as uuid} from 'uuid'
import { ModalContext } from "../../state/ModalContext"
import { SheetContext } from "../../state/SheetContext"
import { useDispatch, useSelector } from "react-redux"
import { selectMotive, updateStory } from "../../state/CharacterContext"
import { characterStats, motivesKeys } from "../../types/types"

type StoryElementProps = {
    type: motivesKeys
}

const StoryElement = ({type}: StoryElementProps) => {

    const {setStoryModalState} = useContext(ModalContext)
    const {editingMode} = useContext(SheetContext)
    const dispatch = useDispatch()
    const motives = useSelector((state: { state: appState }) => selectMotive(state, type))

    const [showCompleted, setShowCompleted] = useState(false)

    let content = null

    const addNewStory = () => {
        const id = uuid()
        dispatch(updateStory({type: type, target: id, newValue: {story: '', name: '', completed: false}}))
        setStoryModalState({open: true, type: type, id: id})
    }

    useEffect(() => {
        if (editingMode === false) {
            setShowCompleted(false)
        }
    }, [editingMode, setShowCompleted])

    content = editingMode? (            
        <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
            <Label attached="top">{type}</Label>
            <Container style={{height: '100px', display: 'flex', flexDirection: 'column', overflow: 'auto', marginBottom: '8px'}} className='storyElementPicker'>
                {(Object.keys(motives)).filter(key => showCompleted || !motives[key].completed).map(key => <StoryArc id={key} type={type}/>)}
            </Container>
            <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <div className='ui checkbox' style={{marginTop: '5px'}}>
                    <input type='checkbox' name='completed' onChange={() => {setShowCompleted(!showCompleted)}}/>
                    <label>show completed</label>
                </div>
                <Button size='mini' style={{height: '30px'}} label='Add' onClick={() => addNewStory()}/>
            </div>
        </Segment>
    ):
    (            
        <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
            <Label attached="top">{type}</Label>
            <Container style={{height: '130px', display: 'flex', flexDirection: 'column', overflow: 'auto', marginBottom: '8px'}} className='storyElementPicker'>
                {Object.keys(motives).filter(key => showCompleted || !motives[key].completed).map(key => <StoryArc id={key} type={type}/>)}
            </Container>
        </Segment>
    )

    return (                 
        <div>
            {content}
        </div>
    )
} 

export default StoryElement