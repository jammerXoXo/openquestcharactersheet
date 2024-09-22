import Attribute from "./Attribute"
import { ATTRIBUTES } from "../../constants/stats"
import Counter from "../counter/Counter"
import { attributesKeys, basicDescription } from "../../types/types"


const AttributeGrid = () => {

    return (
        <div className="attributecontainer">
            <div className="attributegrid">
            {(Object.entries(ATTRIBUTES) as [attributesKeys, basicDescription][]).map(([key, value]) => <Attribute key={key} target={key} display={value}></Attribute>)}
            <Counter target="fortune" display="Fortune"/>
            </div>
        </div>
    )

}

export default AttributeGrid