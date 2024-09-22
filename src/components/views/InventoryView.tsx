import { GridColumn, GridRow } from "semantic-ui-react"
import StoryElement from "../storyArc/StoryElement"


const InventoryView = () => {
    return (
        <>
            <GridRow>
                <GridColumn width={6}>
                    <StoryElement type='saga'/>
                </GridColumn>
                <GridColumn width={6}>
                    <StoryElement type='quest'/>
                </GridColumn>
                <GridColumn width={4}>
                    <SkillBlock type='combat' />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={4}>
                    <SkillBlock type='combat'/>
                    <SkillBlock type='magic'/>
                </GridColumn>
                <GridColumn width={4}>
                    <SkillBlock type='resistances'/>
                    <SkillBlock type='knowledge'/>
                </GridColumn>
                <GridColumn width={8}>
                    <SkillBlock type='practical' />
                </GridColumn>
            </GridRow>
        </>
    )
}

export default InventoryView