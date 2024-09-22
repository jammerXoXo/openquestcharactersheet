import { useContext } from "react"
import Roller from "../statElement/Roller"
import { characterStats, characterStatsKeys, formulaDescription, skillsKeys } from "../../types/types"
import { useSelector } from "react-redux"
import { selectSkill } from "../../state/CharacterContext"
import { SheetContext } from "../../state/SheetContext"
import Editor from "../statElement/Editor"

type SkillProps = {
    target: skillsKeys
    display: formulaDescription
    type: characterStatsKeys
}

const Skill = ({target, display, type}: SkillProps) => {

    const skill = useSelector((state: { stats: characterStats }) => selectSkill(state, target))
    const {editingMode} = useContext(SheetContext)


    return (
        <div className="characteristic">
            <div>{display.display}</div>
            {editingMode?
            <Editor type={type} targetSkill={target}/>:
            <Roller value={skill.current} />
            }
        </div>
    )
}

export default Skill