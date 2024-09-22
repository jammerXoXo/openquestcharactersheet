import AttributeGrid from "components/attribute/AttributeGrid"
import CharacteristicList from "components/characteristic/CharacteristicList"
import Counter from "components/counter/Counter"
import PersonalDetails from "components/personalDetails/PersonalDetails"
import Portrait from "components/portrait/Portrait"
import SkillBlock from "components/skills/SkillBlock"
import StoryElement from "components/storyArc/StoryElement"
import { Grid, GridColumn, GridRow } from "semantic-ui-react"


const NotesView = () => {
    return (
        <Grid >
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
            <GridRow>
                <GridColumn width={5}>
                    <StoryElement type='saga'/>
                </GridColumn>
                <GridColumn width={5}>
                    <StoryElement type='quest'/>
                </GridColumn>
                <GridColumn width={2}>
                    <Counter target="growth" display="Growth"/>
                    <Counter target="fortune" display="Fortune"/>
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
                    <SkillBlock type='resistances'/>
                    <SkillBlock type='knowledge'/>
                </GridColumn>
                <GridColumn width={8}>
                    <SkillBlock type='practical' />
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default NotesView