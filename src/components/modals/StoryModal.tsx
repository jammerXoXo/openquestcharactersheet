import { useContext, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Form, Input, Modal, ModalContent, TextArea } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import { deleteStory, selectMotive, updateStory } from "../../state/CharacterContext"
import { characterStats, story, storyModalState } from "../../types/types"

const StoryModal = () => {
    const {storyModalState, setStoryModalState} = useContext(ModalContext)
    const dispatch = useDispatch()
    const [deleting, setDeleting] = useState(false)
    const motives = useSelector((state: { state: appState }) => selectMotive(state, storyModalState.type))

    const dispatchUpdateStory = (newValue: Partial<story>) => {
        if (storyModalState?.open) {
            dispatch(updateStory({target: storyModalState.id, newValue: newValue, type: storyModalState.type}))
        }
    }

    const dispatchDeleteStory = () => {
        if (deleting) {
            setDeleting(false)
            setStoryModalState({...storyModalState, open: false})
            dispatch(deleteStory({target: storyModalState.id, type: storyModalState.type}))
        } else {
            setDeleting(true)
        }
    }

    if (storyModalState.id && storyModalState.type && storyModalState.id in motives) {
        return (
            <Modal
                onClose={() => setStoryModalState({...storyModalState, open: false})}
                onOpen={() => setStoryModalState({...storyModalState, open: true})}
                open={storyModalState.open}
                size="small"
                style={{minWidth: '500px', minHeight: '600px'}}
            >
                <ModalContent>
                    <div className="storymodal">
                        <Form >
                            <Input 
                                fluid 
                                label='Name'
                                placeholder='Enter name here...'
                                value={motives[storyModalState.id].name} 
                                onChange={(_, {value}) => dispatchUpdateStory({name: value})}/>
                            <TextArea 
                                rows='25' 
                                placeholder='Notes...' 
                                style={{marginTop: '10px', marginBottom: '10px'}}
                                onChange={(_, {value}) => dispatchUpdateStory({story: String(value)})}
                                value={motives[storyModalState.id].story}/>
                            <div style={{display: 'flex', justifyContent: 'space-between', height: '35px'}}>
                                <Button icon='x icon' label={{as: 'a', basic: true, content: 'Close'}} onClick={() => {setStoryModalState({open: false} as storyModalState)}}/>
                                <Button 
                                    icon={motives[storyModalState.id].completed?'check square outline': 'square outline'}
                                    label={{as: 'a', basic: true, content: motives[storyModalState.id].completed?'Mark Incomplete':'Mark Complete'}} 
                                    onClick={() => dispatchUpdateStory({completed: !motives[storyModalState.id].completed})}
                                />
                                <Button icon='trash' label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete story'}} onClick={() => dispatchDeleteStory()}/>
                            </div>
                        </Form>
                    </div>
                </ModalContent>
            </Modal>
        )
    } else {
        return null
    }
}

export default StoryModal