import { useDispatch, useSelector } from "react-redux"
import { GridColumn, GridRow, Segment, TextArea } from "semantic-ui-react"
import { selectNotes, updateNotes } from "../../state/CharacterContext"
import { characterStats } from "../../types/types"


const NotesView = () => {
    const notes = useSelector((state: { stats: characterStats }) => selectNotes(state))
    const dispatch = useDispatch()

    return (
        <GridRow>
            <GridColumn width={16}>
                <Segment>
                    <TextArea
                        placeHolder='Tell your story here...'
                        style={{marginTop: '10px', width: '100%', height: '529px', resize: 'none'}}
                        onChange={(_, {value}) => dispatch(updateNotes({newValue: String(value)}))}
                        value={notes}/>
                </Segment>
            </GridColumn>
        </GridRow>
    )
}

export default NotesView