import { useContext, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Form, FormCheckbox, FormField, FormInput, Modal, ModalContent, Segment } from "semantic-ui-react"
import { appState} from "../../types/types"
import { useDispatch, useSelector } from "react-redux"
import {selectOptions, updateOptions } from "../../state/CharacterContext"


const re = /https:\/\/discord.com\/api\/webhooks\/\d+\/.*/

const OptionsModal = () => {
    const {optionsModalState, setOptionsModalState} = useContext(ModalContext)    
    const options = useSelector((state: { state: appState }) => selectOptions(state))

    const [disableGrowth, setDisableGrowth] = useState(options.disableGrowthCost)
    const [discordUrl, setDiscordUrl] = useState(options.discordWebHook ?? '')
    const [validUrl, setValidUrl] = useState(true)

    const dispatch = useDispatch()

    const validateDiscordUrl = (value: string) => {
        const match = re.exec(value)
        console.log(value)
        console.log(match)
        if (match) {
            setDiscordUrl(value)
            setValidUrl(true)
        } else {
            setValidUrl(false)
        }
    }

    const handleSubmit = () => {
        dispatch(updateOptions({newOptions: {disableGrowthCost: disableGrowth, discordWebHook: discordUrl}}))
        setOptionsModalState({open: false})
    }


    return (
        <Modal
            onClose={() => {
                setOptionsModalState({...optionsModalState, open: false})
            }}
            onOpen={() => setOptionsModalState({...optionsModalState, open: true})}
            open={optionsModalState.open}
        >
            <ModalContent>
                <Segment>
                    <Form onSubmit={() => handleSubmit()}>
                        <FormInput error={!validUrl} fluid label='Discord webhook url' defaultValue={discordUrl} onChange={(_, {value}) => validateDiscordUrl(value)}/>
                        <FormCheckbox toggle label='Disable Growth Point Cost' checked={disableGrowth} onChange={() => setDisableGrowth(!disableGrowth)}/>
                        <FormField control={Button}>Submit</FormField>
                    </Form>
                </Segment>
            </ModalContent>
        </Modal>
    )
}

export default OptionsModal