import { useContext } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Label, LabelDetail, Modal, ModalContent } from "semantic-ui-react"
import AnimatedNumbers from "react-animated-numbers"

const RollModal = () => {
    const {rollModalState, setRollModalState} = useContext(ModalContext)

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
                </div>
            </ModalContent>
        </Modal>
    )
}

export default RollModal