import { Input, Label, Popup, Segment } from "semantic-ui-react"
import {applyDamage, selectAttribute, updateAttribute } from "../../state/CharacterContext"
import {useDispatch, useSelector} from "react-redux"
import { appState, attributesKeys, basicDescription } from "../../types/types"
import { useState } from "react"


type AttributeProps = {
    target: attributesKeys
    display: basicDescription
}

const Attribute = ({target, display}: AttributeProps) => {
    const attribute = useSelector((state: { state: appState }) => selectAttribute(state, target))
    const dispatch = useDispatch()
    const [valid, setValid] = useState(true)
    const [addition, setAddition] = useState('')
    const [popupOpen, setPopopOpen] = useState(false)

    const getDamageModText = (mod: number) => {
        if (mod < 10) {
            return '-1D6'
        } else if (mod < 15) {
            return '-1D4'    
        } else if (mod < 25) {
            return '+0'
        } else if (mod <= 30) {
            return '+1D4'
        } else {
            return `+${Math.ceil(mod/15 - 2)}D6`
        }
    }

    const re = /-?\d+/

    const applyValue = () => {
        const match = re.exec(addition)
        if (match) {
            setValid(true)
            if (target === 'hitPoints' || target === 'magicPoints') {
                dispatch(applyDamage({target: target, newValue: parseInt(match[0])}))
            } else {
                dispatch(updateAttribute({target: target, newValue: parseInt(match[0])}))
            }
            setAddition('')
            setPopopOpen(false)
        } else {
            setValid(false)
        }
    }

    const getDisplay = () => {
        if (target === 'hitPoints' || target === 'magicPoints') {
            return <span> {attribute.current - (attribute?.damage ?? 0)} / {attribute.current}</span>
        } else if (target === 'damageMod') {
            return <span>{getDamageModText(attribute.current)}</span>  
        } else {
            return <span>{attribute.current}</span>  
        }
    }

    return (                 
        <Popup
            onOpen={() => setPopopOpen(true)}
            onClose={() => setPopopOpen(false)}
            open={popupOpen}
            content={<Input onKeyPress={(e:{key: string}) => e.key === 'Enter' && applyValue()} size='mini' action={{ icon: 'plus square', onClick: () => applyValue()}} onChange={(_, {value}) => setAddition(value)} placeholder='Add amount...' error={!valid}/>}
            on='click'
            disabled={target==='damageMod'}
            trigger={
            <div className="attribute">
                <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center'}}>
                    <Label attached="top">{display.display}</Label>
                    {getDisplay()} 
                </Segment>
            </div>}
        />
    ) 
} 

export default Attribute