import { GridColumn, GridRow } from "semantic-ui-react"
import StoryElement from "../storyArc/StoryElement"
import Portrait from "../portrait/Portrait"
import SkillBlock from "../skills/SkillBlock"


const StatsView = () => {
    return (
        <>
            {/* <GridRow>
                <GridColumn width={3}>
                    <CharacteristicList/>
                </GridColumn>
                <GridColumn width={7}>
                    <AttributeGrid/>
                </GridColumn>
                <GridColumn width={6}>
                    <PersonalDetails/>
                </GridColumn>
            </GridRow> */}
            <GridRow>
                <GridColumn width={6}>
                    {/* <StoryElement type='saga'/> */}
                </GridColumn>
                <GridColumn width={6}>
                    {/* <StoryElement type='quest'/> */}
                </GridColumn>
                <GridColumn width={4}>
                    <Portrait/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={4}>
                    <SkillBlock type='combat'/>
                    <SkillBlock type='magic'/>
                </GridColumn>
                <GridColumn width={4}>
                    <SkillBlock type='resistance'/>
                    <SkillBlock type='knowledge'/>
                </GridColumn>
                <GridColumn width={8}>
                    <SkillBlock type='practical' />
                </GridColumn>
            </GridRow>
        </>
    )
}

export default StatsView