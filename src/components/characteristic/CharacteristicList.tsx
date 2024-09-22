import { CHARACTERISTICS } from "../../constants/stats"
import { basicDescription, characteristicsKeys } from "../../types/types"
import Characteristic from "./Characteristic"

const CharacteristicList = () => {

    return (
        <div className="characteristiclist">
            {(Object.entries(CHARACTERISTICS) as [characteristicsKeys, basicDescription][]).map(([key, value]) => <Characteristic target={key} display={value} type='characteristics'></Characteristic>)}
        </div>
    )
}

export default CharacteristicList