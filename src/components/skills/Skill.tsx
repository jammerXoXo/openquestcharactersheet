import { useContext } from "react"
import Roller from "../statElement/Roller"
import { appState, characterStatsKeys, skillsKeys } from "../../types/types"
import { useSelector } from "react-redux"
import { selectSkill } from "../../state/CharacterContext"
import { SheetContext } from "../../state/SheetContext"
import Editor from "../statElement/Editor"

type SkillProps = {
    target: skillsKeys
    displayText: string
    type: characterStatsKeys
}

const Skill = ({target, displayText, type}: SkillProps) => {

    const skill = useSelector((state: { state: appState }) => selectSkill(state, target))
    const {editingMode} = useContext(SheetContext)

    if (skill) {
        return (
            <div className="skill">
                <div>{displayText}</div>
                {editingMode?
                <Editor type={type} targetSkill={target}/>:
                <Roller value={skill.current} text={displayText}/>
                }
            </div>
        )
    } else {
        return null
    }
}

export default Skill