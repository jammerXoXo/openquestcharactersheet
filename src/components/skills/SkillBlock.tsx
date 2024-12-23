import { Label } from "semantic-ui-react"
import Skill from "./Skill"
import { appState, combatSkillsKeys, formulaDescription, knowledgeSkillsKeys, magicSkillsKeys, practicalSkillsKeys, resistanceSkillsKeys, skillTypes } from "../../types/types"
import { SKILLS } from "../../constants/stats"
import { useSelector } from "react-redux"
import { selectCustomSkills } from "../../state/CharacterContext"
import React from "react"

type SkillBlockProps = {
    type: skillTypes, 
    parentStyle?: React.CSSProperties
}

const SkillBlock = ({type, parentStyle = {}}: SkillBlockProps) => {

    const customSkills = useSelector((state: { state: appState }) => selectCustomSkills(state))

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

    const getSkills = (type: skillTypes) => {
        if (type === 'resistance') {
            return SKILLS[type].skills as formulaDescription<resistanceSkillsKeys>[]
        } else if (type === 'combat') {
            return SKILLS[type].skills as formulaDescription<combatSkillsKeys>[]
        } else if (type === 'knowledge') {
            return [...SKILLS[type].skills as formulaDescription<knowledgeSkillsKeys>[], ...(customSkills.knowledge?.skills ?? [])]
        } else if (type ==='magic') {
            return [...SKILLS[type].skills as formulaDescription<magicSkillsKeys>[], ...(customSkills.magic?.skills ?? [])]
        } else if (type ==='practical') {
            return SKILLS[type].skills as formulaDescription<practicalSkillsKeys>[]
        }
    }

    return (
        <div className='skillblock' style={{...parentStyle, backgroundColor: getBackgroundColor(type), borderRadius: '10px', margin: '8px', overflow: 'auto'}}>
            <Label style={{marginBottom: '3px', borderRadius: '0px 0px 5px 5px'}}>{SKILLS[type]?.display ?? 'custom'}</Label>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: type==="practical"? 'wrap':'nowrap', maxHeight: '200px', overflow: 'auto'}}>
                {getSkills(type)?.map((value) => <Skill key={value.skill} target={value.skill} displayText={value.display} type='skills'></Skill>)}
            </div>
        </div>
    )
}

export default SkillBlock