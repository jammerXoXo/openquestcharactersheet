
import { GridColumn, GridRow } from "semantic-ui-react"
import AttributeGrid from "../attribute/AttributeGrid"
import PersonalDetails from "../personalDetails/PersonalDetails"
import Portrait from "../portrait/Portrait"


const Overview = () => {
    return (
        <>
            <GridRow>
                <GridColumn width={4}>
                    <Portrait/>
                </GridColumn>
                <GridColumn width={7}>
                    <AttributeGrid/>
                </GridColumn>
                <GridColumn width={5}>
                    <PersonalDetails key='personalDetails' />
                </GridColumn>
            </GridRow>
        </>
    )
}

export default Overview