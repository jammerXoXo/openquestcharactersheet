
import { GridColumn, GridRow } from "semantic-ui-react"
import CharacteristicList from "../characteristic/CharacteristicList"
import AttributeGrid from "../attribute/AttributeGrid"
import PersonalDetails from "../personalDetails/PersonalDetails"


const Overview = () => {
    return (
        <>
            <GridRow>
                <GridColumn width={3}>
                    <CharacteristicList/>
                </GridColumn>
                <GridColumn width={7}>
                    <AttributeGrid/>
                </GridColumn>
                <GridColumn width={6}>
                    <PersonalDetails/>
                </GridColumn>
            </GridRow>
        </>
    )
}

export default Overview