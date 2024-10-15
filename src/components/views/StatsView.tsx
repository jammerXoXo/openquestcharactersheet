import { GridColumn, GridRow } from "semantic-ui-react"
import SkillBlock from "../skills/SkillBlock"
import CharacteristicList from "../characteristic/CharacteristicList"


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
            {/* <GridRow>
                <GridColumn width={6}>
                    <StoryElement type='saga'/>
                </GridColumn>
                <GridColumn width={6}>
                    <StoryElement type='quest'/>
                </GridColumn>
                <GridColumn width={4}>
                    <Portrait/>
                </GridColumn>
            </GridRow> */}
            <GridRow style={{paddingBottom: '0px'}}>
                <GridColumn width={16}>
                    <CharacteristicList />

                </GridColumn>
            </GridRow>
            <GridRow style={{paddingTop: '0px'}}>
                <GridColumn width={12} style={{display: 'flex', paddingRight: '0px', flexWrap: 'wrap'}}>
                    <SkillBlock type='combat'/>
                    <SkillBlock type='magic'/>
                    <SkillBlock type='resistance'/>
                    <SkillBlock type='practical' />
                </GridColumn>
                <GridColumn width={4} style={{paddingLeft: '0px', display: 'flex', flexDirection: 'column'}}>
                    <SkillBlock type='knowledge' />
                </GridColumn>
            </GridRow>
        </>
    )
}

export default StatsView