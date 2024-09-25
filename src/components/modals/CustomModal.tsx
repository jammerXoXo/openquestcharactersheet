import { useContext, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Dropdown, Form, FormDropdown, FormField, FormGroup, FormInput, Modal, ModalContent, Segment } from "semantic-ui-react"
import { item, spellDescription } from "../../types/types"
import { useDispatch } from "react-redux"
import { addCustomItem, addCustomSkill, addCustomSpell } from "../../state/CharacterContext"

const re = /-?\d+/

const typeOptions = [
    {
        key: 'item',
        text: 'Item',
        value: 'item'
    },    
    {
        key: 'spell',
        text: 'Spell',
        value: 'spell'
    },    
    {
        key: 'loreOther',
        text: 'Skill (lore)',
        value: 'lore'
    },    
    {
        key: 'langOther',
        text: 'Skill (lang)',
        value: 'lang'
    },    
    {
        key: 'cultOther',
        text: 'Skill (cult)',
        value: 'cult'
    },    
    {
        key: 'religOther',
        text: 'Skill (relig)',
        value: 'relig'
    }
]

const itemOptions = [
    {
        key: 'armor',
        text: 'Armor',
        value: 'armor'
    },    
    {
        key: 'ranged',
        text: 'Ranged Weapon',
        value: 'ranged'
    },    
    {
        key: 'melee',
        text: 'Melee Weapon',
        value: 'melee'
    },    
    {
        key: 'other',
        text: 'Other',
        value: 'other'
    }
]

const spellVariabilities = [
    {
        key: 'true',
        text: 'Variable',
        value: true
    },
    {
        key: 'false',
        text: 'Non-Variable',
        value: false
    }
]

const spellTypes = [
    {
        key: 'personal',
        text: 'Personal',
        value: 'personal'
    },
    {
        key: 'divine',
        text: 'Divine',
        value: 'divine'
    },
    {
        key: 'sorcery',
        text: 'Sorcery',
        value: 'sorcery'
    },
]

const CustomModal = () => {
    const {customModalState, setCustomModalState} = useContext(ModalContext)

    const [chosenType, setChosenType] = useState('')
    const [itemInfo, setItemInfo] = useState({type: 'other'} as item)
    const [spellInfo, setSpellInfo] = useState({type: 'personal', variable: true} as spellDescription)
    const [skillName, setSkillName] = useState('')

    const dispatch = useDispatch()

    const getSkillDisplayName = (skill: string) => {
        if (skill === 'lang') {
            return 'Language'
        } else if (skill === 'lore') {
            return 'Lore'
        } else if (skill === 'cult') {
            return 'Culture'
        } else if (skill === 'relig') {
            return 'Religion'
        } else {
            return skill
        }
    }

    const handleSubmit = () => {
        if (chosenType === 'item') {
            dispatch(addCustomItem({ newValue: itemInfo }))
        } else if (chosenType === 'spell') {
            dispatch(addCustomSpell({ newValue: spellInfo }))
        } else if (chosenType === 'lang' || chosenType === 'lore' || chosenType === 'cult' || chosenType === 'relig') {
            dispatch(addCustomSkill({
                    newValue: {
                        skill: `${chosenType}[${skillName}]` as `cult[${string}]` | `lang[${string}]` | `lore[${string}]` | `relig[${string}]`,
                        abbr: `${chosenType} [${skillName}]`,
                        display: `${getSkillDisplayName(chosenType)} [${skillName}]`,
                        formula: '(INT)'
                    }
             }))
        }
        setCustomModalState({open: false})
    }

    const updateInfo = (updates: item | spellDescription | string) => {
        if (chosenType === 'item') {
            setItemInfo({...itemInfo, ...updates as item})
        } else if (chosenType === 'spell') {
            setSpellInfo({...spellInfo, ...updates as spellDescription})
        } else if (chosenType === 'lang' || chosenType === 'lore' || chosenType === 'cult' || chosenType === 'relig') {
            setSkillName(updates as string)
        }
    }

    const getContent = () => {
        if (chosenType === 'item') {
            return (
                <>
                    <FormInput error={!(itemInfo?.name) || itemInfo.name.length === 0} fluid label='Name' onChange={(_, {value}) => updateInfo({name: value} as item)}/>
                    <FormGroup inline>
                        <FormDropdown label='Type' options={itemOptions} defaultValue='other' onChange={(_, {value}) => updateInfo({type: value} as item)}/>
                        <FormInput label='Enc' onChange={(_, {value}) => updateInfo({enc: parseInt(value)} as item)}/>
                        <FormInput label='Cost' onChange={(_, {value}) => updateInfo({cost: value} as item)}/>
                    </FormGroup>
                    <FormInput fluid label='Tags' onChange={(_, {value}) => updateInfo({tags: value} as item)}/>
                    <FormInput fluid label='Description' onChange={(_, {value}) => updateInfo({description: value} as item)}/>
                </>
            )
        } else if (chosenType === 'spell') {
            return (
                <>
                    <FormInput error={!(spellInfo?.name) || spellInfo.name.length === 0} fluid label='Name' onChange={(_, {value}) => updateInfo({name: value} as spellDescription)}/>
                    <FormGroup inline>
                        <FormDropdown label='Type' options={spellTypes} defaultValue='personal' onChange={(_, {value}) => updateInfo({type: value} as spellDescription)}/>
                        <FormDropdown label='Variable Magnitude' options={spellVariabilities} defaultValue={true} onChange={(_, {value}) => updateInfo({variable: value} as spellDescription)}/>
                        <FormInput error={!re.exec(String(spellInfo?.magnitude ?? ''))} label='Base Magnitude' onChange={(_, {value}) => updateInfo({magnitude: parseInt(value)} as spellDescription)}/>
                    </FormGroup>
                    <FormInput fluid label='Tags' onChange={(_, {value}) => updateInfo({tags: value} as spellDescription)}/>
                    <FormInput fluid label='Description' onChange={(_, {value}) => updateInfo({description: value} as spellDescription)}/>
                </>
            )
        } else if (chosenType === 'lang' || chosenType === 'lore' || chosenType === 'cult' || chosenType === 'relig') {
            return <FormInput fluid label='Name' onChange={(_, {value}) => updateInfo(value)}/>
         } else {
            return null
        }
    }

    return (
        <Modal
            onClose={() => {
                setCustomModalState({...customModalState, open: false})
                setChosenType('')
            }}
            onOpen={() => setCustomModalState({...customModalState, open: true})}
            open={customModalState.open}
            style={{minWidth: '500px', minHeight: '600px'}}
        >
            <ModalContent>
                <Segment style={{height: '500px'}}>
                    <Dropdown placeholder="Select type..." fluid selection options={typeOptions} onChange={(_, {value}) => setChosenType(String(value ?? ''))}/>
                    <Form onSubmit={() => handleSubmit()}>
                        {getContent()}
                        {chosenType?.length ?? 0 > 0 ? <FormField control={Button}>Submit</FormField>: null }
                    </Form>
                </Segment>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal