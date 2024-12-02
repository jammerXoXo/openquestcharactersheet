import { GridColumn, GridRow } from "semantic-ui-react"
import SkillBlock from "../skills/SkillBlock"
import CharacteristicList from "../characteristic/CharacteristicList"


const StatsView = () => {
    return (
        <>
            <GridRow style={{paddingBottom: '0px'}}>
                <GridColumn width={16}>
                    <CharacteristicList />

                </GridColumn>
            </GridRow>
            <GridRow style={{paddingTop: '0px'}}>
                <GridColumn width={12} style={{display: 'flex', paddingRight: '0px', flexWrap: 'wrap'}}>
                    <SkillBlock parentStyle={{width: '30%'}} type='combat'/>
                    <SkillBlock parentStyle={{width: '30%'}} type='magic'/>
                    <SkillBlock parentStyle={{width: '30%'}} type='resistance'/>
                    <SkillBlock parentStyle={{width: '30%'}} type='practical' />
                </GridColumn>
                <GridColumn width={4} style={{paddingLeft: '0px', display: 'flex', flexDirection: 'column'}}>
                    <SkillBlock type='knowledge' />
                </GridColumn>
            </GridRow>
        </>
    )
}

export default StatsView