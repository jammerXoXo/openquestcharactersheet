import { Form, Input, Label, TextArea } from "semantic-ui-react"
import { characterStats, trackedInfoKeys } from "../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { selectInfo, updateDetail } from "../../state/CharacterContext"


type PersonalDetailProps = {
    type: trackedInfoKeys
}

const PersonalDetail = ({type}: PersonalDetailProps) => {

    const info = useSelector((state: { stats: characterStats }) => selectInfo(state))
    const dispatch = useDispatch()

    return (
        <Input 
            className='detailinput'
            label={{basic: true, content: type, style: {width: '60px', paddingTop: '8px', paddingBottom: '3px', backgroundColor: '#f0f0f0', borderWidth: '0px'}}}
            // label={type}
            size="mini" 
            style={{height: '35px', marginBottom: '1px', minWidth:'50px', flexShrink: '1'}} 
            value={info[type]}
            onChange={(_, {value}) => dispatch(updateDetail({target: type, newValue: value}))}/>
    )

}


const PersonalDetails = () => {

    const info = useSelector((state: { stats: characterStats }) => selectInfo(state))
    const dispatch = useDispatch()

    return (
        <div className="attributecontainer">
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'flex-start', minWidth:'50px'}}>
                <PersonalDetail type='name' />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <PersonalDetail type='gender' />
                    <PersonalDetail type='age' />
                </div>
                <PersonalDetail type='culture' />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <PersonalDetail type='org' />
                    <PersonalDetail type='rank' />
                </div>
                {/* <PersonalDetail type='concept'/> */}
                <Form style={{display: 'flex', flexDirection: 'row'}}>
                    <Label className='conceptlabel'>Concept</Label>
                    <TextArea style={{resize: 'none', height: '70px', borderRadius: '0px 5px 5px 0px', marginLeft: '-2px', borderWidth: '1px 1px 1px 0px'}} value={info.concept} onChange={(_, {value}) => dispatch(updateDetail({ target: 'concept', newValue: String(value)}))}>
                    </TextArea>
                </Form>
            </div>
        </div>
    )

}

export default PersonalDetails