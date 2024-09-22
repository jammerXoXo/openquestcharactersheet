import Attribute from "./Attribute"
import { ATTRIBUTES } from "../../constants/stats"
import Counter from "../counter/Counter"


const AttributeGrid = () => {

    return (
        <div className="attributecontainer">
            <div className="attributegrid">
            {Object.entries(ATTRIBUTES).map(([key, value]) => <Attribute target={key} display={value}></Attribute>)}
            <Counter target="fortune" display="Fortune"/>
            </div>
        </div>
    )

}

export default AttributeGrid