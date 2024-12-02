import { useDispatch, useSelector } from "react-redux"
import { Accordion,AccordionAccordion,AccordionContent,AccordionTitle,Button,Container,Form,GridColumn, GridRow, Icon, Input, List, ListItem, Segment, TextArea } from "semantic-ui-react"
import { deleteNote, selectNotes, updateNote } from "../../state/CharacterContext"
import { appState, notesKeys, story } from "../../types/types"
import { useState } from "react"
import { v4 as uuid} from 'uuid'


const NotesView = () => {
    const notes = useSelector((state: { state: appState }) => selectNotes(state))
    const [questsOpen, setQuestsOpen] = useState(false)
    const [questsCompletedOpen, setQuestsCompletedOpen] = useState(false)
    const [sagasOpen, setSagasOpen] = useState(false)
    const [sagasCompletedOpen, setSagasCompletedOpen] = useState(false)
    const [miscOpen, setMiscOpen] = useState(false)
    const [miscCompletedOpen, setMiscCompletedOpen] = useState(false)
    const dispatch = useDispatch()

    const [deleting, setDeleting] = useState(false)
    const [selectedKey, setSelectedKey] = useState<string|undefined>(undefined)
    const [selectedType, setSelectedType] = useState<notesKeys|undefined>(undefined)

    const itemSelected = (type: notesKeys, key: string) => {
        setSelectedType(type)
        setSelectedKey(key)
    }

    // const mainOpen = {
    //     'quest': {
    //         setter: setQuestsOpen,
    //         getter: () => questsOpen
    //     },
    //     'saga': {
    //         setter: setSagasOpen,
    //         getter: () => sagasOpen
    //     },        
    //     'misc': {
    //         setter: setMiscOpen,
    //         getter: () => miscOpen
    //     }
    // }

    const completedOpen = {
        'quest': {
            setter: setQuestsCompletedOpen,
            getter: questsCompletedOpen
        },
        'saga': {
            setter: setSagasCompletedOpen,
            getter: sagasCompletedOpen
        },        
        'misc': {
            setter: setMiscCompletedOpen,
            getter: miscCompletedOpen
        }
    }

    const getPanelContent = (content: {[key: string]: story}, type: notesKeys) => {
        return (<>
            <List selection>
                {(Object.entries(content) as [string, story][]).filter(([, value]) => !value.completed).map(([key, value]) => <ListItem active={selectedType === type && selectedKey === key} onClick={() => itemSelected(type, key)}>{value.name}</ListItem>)}
            </List>
            <AccordionAccordion style={{borderWidth: '0px'}} exclusive={false}> 
                <AccordionTitle active={completedOpen[type].getter} onClick={() => completedOpen[type].setter(!completedOpen[type].getter)}>
                    <Icon name='dropdown'/>
                    {type==='misc'? 'Archived':'Completed'}
                </AccordionTitle>
                <AccordionContent active={completedOpen[type].getter}>                        <List selection>
                            {(Object.entries(content) as [string, story][]).filter(([, value]) => value.completed).map(([key, value]) => <ListItem active={selectedType === type && selectedKey === key} onClick={() => itemSelected(type, key)}>{value.name}</ListItem>)}
                        </List>
                        </AccordionContent>

                    </AccordionAccordion>
            </>)
    }

    const dispatchUpdateStory = (newValue: Partial<story>) => {
        if (selectedKey && selectedType) {
            dispatch(updateNote({target: selectedKey, newValue: newValue, type: selectedType}))
        }
    }

    const dispatchDeleteStory = () => {
        if (deleting && selectedKey && selectedType) {
            setDeleting(false)
            dispatch(deleteNote({target: selectedKey, type: selectedType}))
            setSelectedType(undefined)
            setSelectedKey(undefined)
        } else {
            setDeleting(true)
        }
    }

    const dispatchAddStory = (type: notesKeys) => {
        const newKey = uuid()
        dispatch(updateNote({target: newKey, newValue: {name: 'New note'}, type: type}))
        setSelectedType(type)
        setSelectedKey(newKey)
    }

    return (
        <GridRow>
            <GridColumn width={16}>
                <Segment style={{display: 'flex'}}>
                    <div style={{width: '225px', display: 'flex', flexDirection: 'column'}}>
                        <h3>Compendium</h3>
                        <Container style={{height: '508px'}}>
                            <Accordion exclusive={false} style={{textAlign: 'left'}} styled>
                                <AccordionTitle
                                    active={questsOpen}
                                >
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div onClick={() => setQuestsOpen(!questsOpen)}>
                                            <Icon name='dropdown'/>
                                            Quests
                                        </div>
                                        <Button size='mini' icon='plus' floated='right' onClick={() => dispatchAddStory('quest')} style={{backgroundColor: undefined}} />
                                    </div>
                                </AccordionTitle>
                                <AccordionContent active={questsOpen}>
                                    {getPanelContent(notes.quest, 'quest')}
                                </AccordionContent>
                                <AccordionTitle
                                    active={sagasOpen}
                                >
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div onClick={() => setSagasOpen(!sagasOpen)}>
                                            <Icon name='dropdown'/>
                                            Sagas
                                        </div>
                                        <Button size='mini' icon='plus' floated='right' onClick={() => dispatchAddStory('saga')} style={{backgroundColor: undefined}} />
                                    </div>
                                </AccordionTitle>
                                <AccordionContent active={sagasOpen}>
                                    {getPanelContent(notes.saga, 'saga')}
                                </AccordionContent>
                                <AccordionTitle
                                    active={miscOpen}
                                >
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div onClick={() => setMiscOpen(!miscOpen)}>
                                            <Icon name='dropdown'/>
                                            Notes
                                        </div>
                                        <Button size='mini' icon='plus' floated='right' onClick={() => dispatchAddStory('misc')} style={{backgroundColor: undefined}} />
                                    </div>
                                </AccordionTitle>
                                <AccordionContent active={miscOpen}>
                                    {getPanelContent(notes.misc, 'misc')}
                                </AccordionContent>
                            </Accordion>


                        </Container>
                    </div>
                    <Form size="small" style={{display: 'flex', flexDirection: 'column', width: '-webkit-fill-available'}}>
                            <Input 
                                fluid 
                                label={selectedType}
                                placeholder={!selectedType? 'Select or add note': 'Set Name'}
                                disabled={!selectedType}
                                value={notes[selectedType?selectedType: 'quest'][selectedKey?selectedKey: '']?.name ?? ''} 
                                onChange={(_, {value}) => dispatchUpdateStory({name: value})}/>
                            <TextArea 
                                rows='26' 
                                placeholder='Notes...' 
                                style={{marginTop: '10px', marginBottom: '10px', resize: 'none'}}
                                onChange={(_, {value}) => dispatchUpdateStory({story: String(value)})}
                                value={notes[selectedType?selectedType: 'quest'][selectedKey?selectedKey: '']?.story ?? ''}/>
                            <div style={{display: 'flex', justifyContent: 'space-between', height: '35px'}}>
                                <Button 
                                    icon={(notes[selectedType?selectedType: 'quest'][selectedKey?selectedKey: '']?.completed ?? false)?'check square outline': 'square outline'}
                                    label={{as: 'a', basic: true, content: (notes[selectedType?selectedType: 'quest'][selectedKey?selectedKey: '']?.completed ?? false)?'Mark Incomplete':'Mark Complete'}} 
                                    onClick={() => dispatchUpdateStory({completed: !(notes[selectedType?selectedType: 'quest'][selectedKey?selectedKey: '']?.completed ?? false)})}
                                />
                                <Button icon='trash' label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete story'}} onClick={() => dispatchDeleteStory()}/>
                            </div>
                        </Form>
                    {/* <TextArea
                        placeHolder='Tell your story here...'
                        style={{marginTop: '10px', width: '100%', height: '529px', resize: 'none'}}
                        onChange={(_, {value}) => setText(String(value))}
                        value={text}/> */}
                </Segment>
            </GridColumn>
        </GridRow>
    )
}

export default NotesView