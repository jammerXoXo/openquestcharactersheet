import { useEffect, useState } from "react"
import { Button, Input, Popup } from "semantic-ui-react"
import { characteristicsKeys, appState, characterStatsKeys, skillsKeys } from "../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { selectCharacteristic, selectSkill, updateCharacteristic, updateSkill } from "../../state/CharacterContext"
import { getGrowthCost } from "../../utils/utils"


type EditorProps = {
    type: characterStatsKeys
    targetSkill?: skillsKeys
    targetCharacteristic?: characteristicsKeys
}

const Editor = ({type, targetSkill = 'dodge', targetCharacteristic = 'strength'}: EditorProps) => {
 
    const skill =  useSelector((state: { state: appState }) => selectSkill(state, targetSkill))
    const characteristic = useSelector((state: { state: appState }) => selectCharacteristic(state, targetCharacteristic))

    const stat = type === 'skills'? skill : characteristic

    const dispatch = useDispatch()
    const [ctrlHeld, setCtrlHeld] = useState(false)

    const updateValue = (increment: number) => {
        if (type === 'skills') {
            dispatch(updateSkill({target: targetSkill, increment: increment}))
        } else if (type === 'characteristics') {
            dispatch(updateCharacteristic({target: targetCharacteristic, increment: increment}))
        }
    }

    const downHandler = ({key}: {key: string}) => {
        if (key === 'Control') {
          setCtrlHeld(true);
        }
      }
    
    const upHandler = ({key}: {key: string}) => {
        if (key === 'Control') {
            setCtrlHeld(false);
        }
      }

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])

    return (
        <Input type="text" size='mini'>
            <Popup basic on='hover' className='growthpopup' size='mini' content={`Cost: ${getGrowthCost(type, stat.current, ctrlHeld? -5 : -1)}`} trigger={<Button size='mini' icon='minus' onClick={() => {updateValue(ctrlHeld? -5 :-1)}}></Button> }/>
            <input style={{width: '50px', height: '28px', borderLeft:'0px', borderBottom: '0px', borderRight: '0px'}} value={`${stat.current}(${stat.point_mod})`}/>
            <Popup basic on='hover' className='growthpopup' size='mini' content={`Cost: ${getGrowthCost(type, stat.current, ctrlHeld? 5 : 1)}`} trigger={<Button size='mini' icon='plus' onClick={() => {updateValue(ctrlHeld? 5 : 1)}}></Button> }/>
        </Input>
    )
}

export default Editor