import { Container, GridColumn, GridRow, Label, Segment } from "semantic-ui-react"


//A character has a limit of their POW in magnitude in spells. So, for example, a character with a POW of 10 could learn Babel (which has a fixed magnitude of 2), Coordination 3 Disruption 3 and Heal 2, which is a total of ten points of magnitude.
//Characters can learn Personal Magic spells from other characters who know the spell. If the spell has a variable magnitude, the teacher must know it at the magnitude that the character wants to learn it or higher. It costs one growth point per magnitude point to learn a Personal Magic spell. If a character knows a spell at a lower magnitude, they only have to pay the difference in growth points to gain the spell at a higher magnitude.

//The character must pay a cost in growth points, equal to twice the magnitude of the spell, to the deity. Incremental purchase of spells is allowed, e.g. the player buys Shield 1 for two growth points and then later increases this to Shield 3, by spending an additional four points.

//The character must first learn the spell through research. To learn a particular Sorcery spell, the caster must possess the spell in written form or be taught it by a teacher. The player then spends three Growth points and writes the spell down on their character sheet.
//If the casting test fails, the spell does not take effect, and the caster loses one magic point.

const MagicView = () => {
    return (
        <>
            <GridRow>
                <GridColumn width={10}>
                    <Segment style={{display: 'flex', flex: '1 1', justifyContent: 'center', flexDirection: 'column'}}>
                        <Label attached='top'>Known Spells</Label>
                        <Container>
                            
                        </Container>
                    </Segment>
                </GridColumn>
                <GridColumn width={6}>

                </GridColumn>
            </GridRow>
        </>
    )
}

export default MagicView