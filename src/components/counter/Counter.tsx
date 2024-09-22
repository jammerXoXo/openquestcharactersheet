import { Input, Label, Popup, Segment } from "semantic-ui-react"
import { useState } from "react"
import { characterStats, countersKeys } from "../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { selectCounter, updateCounter } from "../../state/CharacterContext"

type CounterProps = {
    target: countersKeys
    display: string
}

const Counter = ({target, display}: CounterProps) => {
    const counter = useSelector((state: { stats: characterStats }) => selectCounter(state, target))
    const dispatch = useDispatch()
    const [popupOpen, setPopopOpen] = useState(false)
    const [addition, setAddition] = useState('')
    const [valid, setValid] = useState(true)

    const re = /-?\d+/

    const applyValue = () => {
        const match = re.exec(addition)
        if (match) {
            setValid(true)
            dispatch(updateCounter({target: target, newValue: parseInt(match[0])}))
            setAddition('')
            setPopopOpen(false)
        } else {
            setValid(false)
        }
    }

    return (                 
        <Popup
            onOpen={() => setPopopOpen(true)}
            onClose={() => setPopopOpen(false)}
            open={popupOpen}
            content={<Input onKeyPress={(e) => e.key === 'Enter' && applyValue()} size='mini' action={{ icon: 'plus square', onClick: () => applyValue()}} onChange={(e, {value}) => setAddition(value)} placeholder='Add amount...' error={!valid}/>}
            on='click'
            trigger={
            <div className="attribute" style={{flex: '1 1 60px'}}>
                <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center'}}>
                    <Label attached="top">{display}</Label>
                    <span>{counter}</span>  
                </Segment>
            </div>}
        />
    )
} 

export default Counter