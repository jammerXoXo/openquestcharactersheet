import { useContext, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Label, LabelDetail, Modal, ModalContent } from "semantic-ui-react"
import AnimatedNumbers from "react-animated-numbers"
import { useDispatch, useSelector } from "react-redux"
import { appState } from "../../types/types"
import { incrementGrowthPoints, selectInfo, selectOptions } from "../../state/CharacterContext"

const RollModal = () => {
    const {rollModalState, setRollModalState} = useContext(ModalContext)
    const options = useSelector((state: { state: appState }) => selectOptions(state))
    const info = useSelector((state: { state: appState }) => selectInfo(state))
    const [sent, setSent] = useState(false)
    const [pointAdded, setPointAdded] = useState(false)

    const dispatch = useDispatch()

    const sendToDiscord = () => {
        setSent(true)
        fetch(options.discordWebHook, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({content: `${info.name} ${rollModalState.crit? 'critcally': ''} ${rollModalState.success? 'succeeded': 'failed'} their ${rollModalState.text} check! ${rollModalState.result} against ${rollModalState.target}`})
        })
    }

    const addGrowthPoint = () => {
        setPointAdded(true)
        dispatch(incrementGrowthPoints({increment: 1}))
    }

    const resetState = (open: boolean) => {
        setRollModalState({...rollModalState, open: open})
        setSent(false)
        setPointAdded(false)
    }

    return (
        <Modal
            onClose={() => resetState(false)}
            onOpen={() => resetState(true)}
            open={rollModalState.open}
            size="small"
            style={{width: '250px'}}
        >
            <ModalContent>
                <div className="numberroller">
                    <AnimatedNumbers
                        transitions={() => ({
                            type: "spring",
                            duration: 2
                        })}
                        animateToNumber={rollModalState.result}
                        fontStyle={{
                            fontSize: 80,
                            color: "dark grey"
                        }}
                    />
                    <Label>
                        Target
                    <LabelDetail>{rollModalState.target}</LabelDetail>
                    </Label>
                    <span className="successcard" style={{color: rollModalState.success? "green": "red", opacity: "0"}}>{`${rollModalState.crit? 'Crit ': ''}${rollModalState.success? 'Success': 'Failure'}`}</span>
                    {options.discordWebHook.length > 0? 
                    <Button disabled={sent} label='Send to discord' icon='send' onClick={() => sendToDiscord()}/>: null}
                    {rollModalState.crit?
                    <Button style={{marginTop: '5px' }} disabled={pointAdded} label='Add crit growth point' icon='plus' onClick={() => addGrowthPoint()}/>: null}
                </div>
            </ModalContent>
        </Modal>
    )
}

export default RollModal