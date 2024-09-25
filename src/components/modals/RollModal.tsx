import { useContext } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Label, LabelDetail, Modal, ModalContent } from "semantic-ui-react"
import AnimatedNumbers from "react-animated-numbers"
import { useSelector } from "react-redux"
import { appState } from "../../types/types"
import { selectInfo, selectOptions } from "../../state/CharacterContext"

const RollModal = () => {
    const {rollModalState, setRollModalState} = useContext(ModalContext)
    const options = useSelector((state: { state: appState }) => selectOptions(state))
    const info = useSelector((state: { state: appState }) => selectInfo(state))

    const sendToDiscord = () => {
        console.log({content: `${info.name} ${rollModalState.crit? 'critcally': ''} ${rollModalState.success? 'succeeded': 'failed'} their ${rollModalState.text} check! ${rollModalState.result} against ${rollModalState.target}`})
        fetch(options.discordWebHook, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({content: `${info.name} ${rollModalState.crit? 'critcally': ''} ${rollModalState.success? 'succeeded': 'failed'} their ${rollModalState.text} check! ${rollModalState.result} against ${rollModalState.target}`})
        })
    }

    return (
        <Modal
            onClose={() => setRollModalState({...rollModalState, open: false})}
            onOpen={() => setRollModalState({...rollModalState, open: true})}
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
                    <Button label='Send to discord' icon='send' onClick={() => sendToDiscord()}/>: null}
                </div>
            </ModalContent>
        </Modal>
    )
}

export default RollModal