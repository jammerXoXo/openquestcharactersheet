import { useContext, useRef, useState } from "react";
import { Button, Input } from "semantic-ui-react"
import { ModalContext } from "../../state/ModalContext";
import { getRollModalContent } from "../../utils/utils";

import die from '../../public/220741__dermotte__dice_03.wav'
import diefail from '../../public/575042__code_e__dd_dice__bonus_007_roll_whop_thats_it_im_dead.wav'
import diealt from '../../public/575043__code_e__dd_dice__1xd12_005_roll.wav'

const DURATION = 500
const dieAudio = new Audio(die)
const dieAudioAlt = new Audio(diealt)
const dieAudioFail = new Audio(diefail)

type RollerProps = {
    disabled?: boolean
    value: number
}

const Roller = ({disabled, value}: RollerProps) => {
    const [advancedMode, setAdvancedMode] = useState(false)
    const [mod, setMod] = useState(0)
    const {setRollModalState} = useContext(ModalContext)

    const mouseDown = useRef(false)

    const setMouseDown = (value: boolean) => {
        mouseDown.current = value
    }

    const triggerAdvancedMode = () => {
        setMouseDown(true)
        setTimeout(() => {
            if (mouseDown.current) {
                setAdvancedMode(true)
            }
        }, DURATION)
    }

    const roll = (value: number, mod: number) => {
        if (disabled) {
            return
        }
        const modalState = getRollModalContent(value, mod)

        if (modalState.crit && !modalState.success) {
            dieAudioFail.play()
        }
        else if (Math.random() < 0.7) {
            dieAudio.play()
        }
        else {
            dieAudioAlt.play()
        }

        setRollModalState(modalState)
        resetMod()
        setMouseDown(false)
    }

    const resetMod = () => {
        setAdvancedMode(false)
        setMod(0)
    }


    let buttonLayout = null

    if (!disabled && advancedMode) {
        buttonLayout = <div onMouseLeave={() => resetMod()} style={{display: "inline-grid"}}>
            <Input type="text" size='mini'>
                <Button size='mini' icon='minus' onClick={() => setMod(mod-5)} ></Button>
                <input style={{width: '40px', height: '28px', borderLeft:'0px', borderBottom: '0px', borderRight: '0px'}} value={mod} onChange={(e) => setMod(e.nativeEvent.data)}/><span style={{marginLeft: '-20px', marginTop: '5px'}}>%</span>
                <Button size='mini' icon='plus' onClick={() => setMod(mod+5)}></Button>
            </Input>
            <Button size='mini' icon='connectdevelop' style={{width: '104px'}} onClick={() => roll(value, mod)}></Button>
            </div>
    } else {
        buttonLayout = <Button size='mini' onMouseDown={() => triggerAdvancedMode()} onMouseUp={() => setMouseDown(false)} onMouseLeave={() => resetMod()} onClick={() => roll(value, mod)} style={{width:'45px'}}>{value}</Button>
    }

    return (
        <>
            {buttonLayout}
        </>
    )
}

export default Roller