import { useContext } from "react"
import { Button } from "semantic-ui-react"
import { basicDescription, characteristicsKeys, characterStats, characterStatsKeys } from "../../types/types"
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

    const characteristic = useSelector((state: { stats: characterStats }) => selectCharacteristic(state, target))
    const {editingMode} = useContext(SheetContext)



    return (
        <div className="characteristic">
            <div>{display.abbr}</div>
            {editingMode?
            <Editor type={type} targetCharacteristic={target}/>:
            <Button size='mini' active={false} style={{width:'45px'}}>{characteristic.current}</Button>
            }
        </div>
    )
}

export default Characteristic