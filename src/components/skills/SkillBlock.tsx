import { Label } from "semantic-ui-react"
import Skill from "./Skill"
import { formulaDescription, skillsKeys, skillTypes } from "../../types/types"
import { SKILLS } from "../../constants/stats"

type SkillBlockProps = {
    type: skillTypes
}

const SkillBlock = ({type}: SkillBlockProps) => {

    const getBackgroundColor = (type: skillTypes) => {
        let color = '#f0f0f0'
        switch (type) {
            case 'resistance':
                break
            case 'combat':
                break
            case 'knowledge':
                break
            case 'magic':
                break
            case 'practical':
                break
            default:
                color = '#e6dfcc'
        }

        return color
    }

    return (
        <div style={{backgroundColor: getBackgroundColor(type), borderRadius: '10px', marginBottom: '8px'}}>
            <Label style={{marginBottom: '3px', borderRadius: '0px 0px 5px 5px'}}>{SKILLS[type].display}</Label>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: '250px'}}>
                {(Object.entries(SKILLS[type].skills) as [skillsKeys, formulaDescription][]).map(([key, value]) => <Skill key={key} target={key} display={value} type='skills'></Skill>)}
            </div>
        </div>
    )
}

export default SkillBlock