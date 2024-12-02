import { useContext } from "react"
import { Label, Segment } from "semantic-ui-react"
import { appState, basicDescription, characteristicsKeys, characterStatsKeys } from "../../types/types"
import { useSelector } from "react-redux"
import { selectCharacteristic } from "../../state/CharacterContext"
import { SheetContext } from "../../state/SheetContext"
import Editor from "../statElement/Editor"


type CharacteristicProps = {
    target: characteristicsKeys
    display: basicDescription
    type: characterStatsKeys
}

const Characteristic = ({target, display, type}: CharacteristicProps) => {

    const characteristic = useSelector((state: { state: appState }) => selectCharacteristic(state, target))
    const {editingMode} = useContext(SheetContext)

    return (
        <div className="characteristic">
            <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center'}}>
                <Label attached="top">{display.display}</Label>
                {editingMode?
                    <Editor type={type} targetCharacteristic={target}/>:
                    <span>{characteristic.current}</span>
                }
            </Segment>
        </div>

    )
}

export default Characteristic