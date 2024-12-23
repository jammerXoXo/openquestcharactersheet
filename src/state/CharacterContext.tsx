// import { applyForumlas, calculateCurrent, getSkillGrowthCost } from './utils/utils'
import { v4 as uuid} from 'uuid'

import { createSlice, configureStore} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { applyForumlas, calculateCurrent, getBaseSpellGrowthCosts, getSkillGrowthCost, getSpellCost, persistCharacter, restoreCharacter } from '../utils/utils'
import { appState, attributesKeys, characteristicsKeys, characterStats, countersKeys, customElements, formulaDescription, item, learnedSpell, notesKeys, options, skillsKeys, spellDescription, story, trackedInfoKeys } from '../types/types'
import { spellDescriptions } from '../constants/magic'
import { itemDescriptions } from '../constants/items'
import { getDefaultCharacter } from '../constants/DefaultState'



let timer: number|null = null


const getLastCharacter = () => {
    const lastUuid = localStorage.getItem('options/lastsaved')
    const ret = structuredClone(getDefaultCharacter(String(uuid())))
    if (lastUuid) {
        const lastCharacter:string = localStorage.getItem(`characters/${lastUuid}`) ?? ''
        if (lastCharacter.length > 0) {
            ret.characterStats = restoreCharacter(lastCharacter)
        }
    }
    const customElements:string = localStorage.getItem('customElements') ?? ''
    if (customElements.length > 0) {
        ret.customElements = JSON.parse(customElements)
    }
    const options:string = localStorage.getItem('options') ?? ''
    if (options.length > 0) {
        ret.options = JSON.parse(options)
    }

    return ret
}

const addGrowthPoints = (state: appState, growthPoints: number) => {
    if (state.options.disableGrowthCost) {
        return true
    }

    if (state.characterStats.attributes.growth.current + growthPoints < 0) {
        return false
    }

    state.characterStats.attributes.growth.point_mod += growthPoints
    state.characterStats.attributes.growth.current = calculateCurrent(state.characterStats.attributes.growth)

    return true
}

const statsSlice = createSlice({
    name: 'state',
    initialState: getLastCharacter(),
    reducers: {
        incrementGrowthPoints: (state: appState, action: PayloadAction<{increment: number}>) => {
            addGrowthPoints(state, action.payload.increment)
        },
        updateCharacteristic: (state: appState, action: PayloadAction<{target: characteristicsKeys, increment: number}>) => {
            const target = action.payload.target
            const increment = action.payload.increment
            // handle growth points
            const newValue = state.characterStats.characteristics[target].base + state.characterStats.characteristics[target].point_mod + increment 
            if ( newValue > 18 || newValue < ((action.payload.target === 'size' || action.payload.target === 'intelligence')? 8 : 3)) {
                return
            }
            
            if (!addGrowthPoints(state, -5 * increment)) {
                return
            }

            state.characterStats.characteristics[target].point_mod += increment
            state.characterStats.characteristics[target].current = calculateCurrent(state.characterStats.characteristics[target])

            applyForumlas(state.characterStats)
            state.characterStats.meta.edited = (new Date()).toLocaleString()
            },
        updateSkill: (state: appState, action: PayloadAction<{target: skillsKeys, increment: number}>) => {
            const target = action.payload.target
            const increment = action.payload.increment

            if (state.characterStats.skills[target].current + increment > 100 || state.characterStats.skills[target].current + increment < 0) {
                return
            }

            if (!addGrowthPoints(state, -1 * getSkillGrowthCost(state.characterStats.skills[target].current, increment))) {
                return
            }

            state.characterStats.skills[target].point_mod += increment
            state.characterStats.skills[target].current = calculateCurrent(state.characterStats.skills[target])
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        updateNote: (state: appState, action: PayloadAction<{target: string, newValue: Partial<story>, type: notesKeys}>) => {
            state.characterStats.notes[action.payload.type][action.payload.target] = {...state.characterStats.notes[action.payload.type][action.payload.target], ...action.payload.newValue}
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        deleteNote: (state: appState, action: PayloadAction<{target: string, type: notesKeys}>) => {
            delete state.characterStats.notes[action.payload.type][action.payload.target] 
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        updateDetail: (state: appState, action: PayloadAction<{target: trackedInfoKeys, newValue: string}>) => {
            state.characterStats.info[action.payload.target] = action.payload.newValue
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        applyDamage: (state: appState, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            if ('damage' in state.characterStats.attributes[action.payload.target]) {
                const newDamage = (state.characterStats.attributes[action.payload.target].damage ?? 0) - action.payload.newValue
                state.characterStats.attributes[action.payload.target] = {...state.characterStats.attributes[action.payload.target], damage: newDamage}
            }
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        updateCounter: (state: appState, action: PayloadAction<{target: countersKeys, newValue: number}>) => {
            state.characterStats.counters[action.payload.target] += action.payload.newValue
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        updateAttribute: (state: appState, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            state.characterStats.attributes[action.payload.target].point_mod += action.payload.newValue
            state.characterStats.attributes[action.payload.target].current = calculateCurrent(state.characterStats.attributes[action.payload.target])
            state.characterStats.meta.edited = (new Date()).toLocaleString()
        },
        loadData: (state: appState, action: PayloadAction<{newValue: characterStats | customElements | options, type: keyof appState}>) => {
            if (action.payload.type === 'characterStats') {
                const loadChar = action.payload.newValue as characterStats
                applyForumlas(loadChar)

                localStorage.setItem(`options/lastsaved`, loadChar?.meta?.id)
                loadChar.meta.edited = (new Date()).toLocaleString()

                state.characterStats.info = loadChar.info
                state.characterStats.characteristics = loadChar.characteristics
                state.characterStats.attributes = loadChar.attributes
                state.characterStats.counters = loadChar.counters
                state.characterStats.inventory = loadChar.inventory
                state.characterStats.magic = loadChar.magic
                state.characterStats.notes = loadChar.notes
                state.characterStats.skills = loadChar.skills
                state.characterStats.meta = loadChar.meta
            } else if (action.payload.type === 'customElements') {
                const customElements = action.payload.newValue as customElements
                state.customElements = customElements
            }
        },
        newCharacter: (state: appState) => {
            const newChar = structuredClone(getDefaultCharacter(String(uuid())))
            applyForumlas(newChar.characterStats)
            localStorage.setItem(`options/lastsaved`, newChar.characterStats.meta.id)

            state.characterStats.info = newChar.characterStats.info
            state.characterStats.characteristics = newChar.characterStats.characteristics
            state.characterStats.attributes = newChar.characterStats.attributes
            state.characterStats.counters = newChar.characterStats.counters
            state.characterStats.inventory = newChar.characterStats.inventory
            state.characterStats.magic = newChar.characterStats.magic
            state.characterStats.skills = newChar.characterStats.skills
            state.characterStats.meta = newChar.characterStats.meta
            state.characterStats.notes = newChar.characterStats.notes
        },
        deleteSpells: (state: appState, action: PayloadAction<{spellNames: string[]}>) => {
            const result = state.characterStats.magic.reduce<{pass: Array<learnedSpell>, cost: number}>((acc, spell) => {
                return action.payload.spellNames.indexOf(spell.name) === -1? { pass: [...acc.pass, spell], cost: acc.cost} : {pass: acc.pass, cost: (acc.cost + getSpellCost(spell.type, spell.learnedMagnitude))}
            }, {pass: [] as learnedSpell[], cost: 0})
            // state.characterStats.magic = state.characterStats.magic.filter(spell => action.payload.spellNames.indexOf(spell.name) === -1)
            state.characterStats.magic = result.pass
            addGrowthPoints(state, result.cost)     
        },
        addSpells: (state: appState, action: PayloadAction<{spellNames: string[]}>) => {
            const cost = getBaseSpellGrowthCosts(state.customElements, action.payload.spellNames)

            if (addGrowthPoints(state, -cost)) {
                action.payload.spellNames.forEach((spellName: string) => state.characterStats.magic.push({
                    name: spellDescriptions[spellName]?.name ?? state.customElements.magic[spellName].name,
                    magnitude: spellDescriptions[spellName]?.magnitude ?? state.customElements.magic[spellName].magnitude,
                    variable: spellDescriptions[spellName]?.variable ?? state.customElements.magic[spellName].variable,
                    tags: spellDescriptions[spellName]?.tags ?? state.customElements.magic[spellName].tags,
                    type: spellDescriptions[spellName]?.type ?? state.customElements.magic[spellName].type,
                    learnedMagnitude: spellDescriptions[spellName]?.magnitude ?? state.customElements.magic[spellName].magnitude,
                    remainingMagnitude: spellDescriptions[spellName]?.magnitude ?? state.customElements.magic[spellName].magnitude
                }))
            }
        },
        updateSpell: (state: appState, action: PayloadAction<Partial<learnedSpell>>) => {
            if (action.payload.name) {
                state.characterStats.magic = state.characterStats.magic.map((x) => {
                    if (x.name === action.payload.name) {
                        if (action.payload.learnedMagnitude) {
                            const costDiff = (x.type === 'sorcery'? 3: (action.payload.learnedMagnitude - x.learnedMagnitude) * (x.type === 'divine'? 2: 1))
                            if (!addGrowthPoints(state, -costDiff)) {
                                return x
                            }
                        }
                        return {...x, ...action.payload}
                    }
                    return x
                })
            }
        },
        deleteItems: (state: appState, action: PayloadAction<{itemNames: string[]}>) => {
            state.characterStats.inventory = state.characterStats.inventory.filter(item => action.payload.itemNames.indexOf(item.name) === -1)
        },
        addItems: (state: appState, action: PayloadAction<{itemNames: string[]}>) => {
            action.payload.itemNames.forEach((itemName: string) => {
                const newItem = {
                    name: itemDescriptions[itemName]?.name ?? state.customElements.items[itemName].name,
                    tags: itemDescriptions[itemName]?.tags ?? state.customElements.items[itemName].tags,
                    enc: itemDescriptions[itemName]?.enc ?? state.customElements.items[itemName].enc,
                    type: itemDescriptions[itemName]?.type ?? state.customElements.items[itemName].type,
                    cost: itemDescriptions[itemName]?.cost ?? state.customElements.items[itemName].cost,
                    description: itemDescriptions[itemName]?.description ?? state.customElements.items[itemName].description,
                    count: 1
                }
                const index = state.characterStats.inventory.findIndex(x => x.name === itemName)
                if (index >= 0) {
                    state.characterStats.inventory[index] = {...state.characterStats.inventory[index], count: (state.characterStats.inventory[index].count ?? 0) + 1}
                } else {
                    state.characterStats.inventory.push(newItem)
                }
            })
        },
        updateItem: (state: appState, action: PayloadAction<{itemName: string, newValue: Partial<item>}>) => {
            const index = state.characterStats.inventory.findIndex(x => x.name === action.payload.itemName)
            if (index >= 0) {
                state.characterStats.inventory[index] = {...state.characterStats.inventory[index], ...action.payload.newValue}
            }
        },
        addCustomItem: (state: appState, action: PayloadAction<{newValue: item}>) => {
            const newItem = action.payload.newValue
            state.customElements.items = { ...state.customElements.items, [newItem.name]: newItem }
        },
        addCustomSpell: (state: appState, action: PayloadAction<{newValue: spellDescription}>) => {
            const newSpell = action.payload.newValue
            state.customElements.magic = { ...state.customElements.magic,  [newSpell.name]: newSpell }
        },
        addCustomSkill: (state: appState, action: PayloadAction<{newValue: formulaDescription<`cult[${string}]` | `lang[${string}]` | `lore[${string}]` | `relig[${string}]`>}>) => {
            const newSkill = action.payload.newValue
            if (newSkill.skill.startsWith('lang') || newSkill.skill.startsWith('lore') || newSkill.skill.startsWith('cult')) {
                const skillDescriptions = {
                    knowledge: {
                        abbr: "knowl",
                        display: "Knowledge",
                        skills: []
                    },
                ...state.characterStats.customSkills}
                skillDescriptions.knowledge.skills = [...skillDescriptions.knowledge.skills, newSkill as formulaDescription<`cult[${string}]` | `lang[${string}]` | `lore[${string}]`>]
                state.characterStats.customSkills = skillDescriptions

                state.characterStats.skills[newSkill.skill] = {
                    current: 0,
                    base: 0,
                    magic_mod: 0,
                    point_mod: 0,
                    magic_mod_perc: 1,
                    point_mod_perc: 1,
                }
                state.characterStats.skills[newSkill.skill].current = calculateCurrent(state.characterStats.skills[newSkill.skill])
            } else if (newSkill.skill.startsWith('relig')) {
                const skillDescriptions = {
                    magic: {
                        abbr: "magic",
                        display: "Magic",
                        skills: []
                    },
                ...state.characterStats.customSkills}
                skillDescriptions.magic.skills = [...skillDescriptions.magic.skills, newSkill as formulaDescription<`relig[${string}]`>]
                state.characterStats.customSkills = skillDescriptions

                state.characterStats.skills[newSkill.skill] = {
                    current: 0,
                    base: 0,
                    magic_mod: 0,
                    point_mod: 0,
                    magic_mod_perc: 1,
                    point_mod_perc: 1,
                }
            }
            applyForumlas(state.characterStats)
        },
        deleteCustomElement: (state: appState, action: PayloadAction<{value: string}>) => {

            const [key, value] = action.payload.value.split('_')

            if (key === 'knowledge') {
                const index = (state.characterStats.customSkills.knowledge?.skills ?? []).findIndex(x => x.skill === value)
                if (index) {
                    state.characterStats.customSkills.knowledge?.skills.splice(index, 1)
                }
                delete state.characterStats.skills[value as skillsKeys]
            } else if (key === 'magic') {
                const index = (state.characterStats.customSkills.magic?.skills ?? []).findIndex(x => x.skill === value)
                if (index) {
                    state.characterStats.customSkills.magic?.skills.splice(index, 1)
                }
                delete state.characterStats.skills[value as skillsKeys]
            } else if (key === 'item') {
                const index = state.characterStats.inventory.findIndex(x => x.name === value)
                if (index) {
                    state.characterStats.inventory.splice(index, 1)
                }
                delete state.customElements.items[value]
            } else if (key === 'spell') {
                const index = state.characterStats.magic.findIndex(x => x.name === value)
                if (index) {
                    state.characterStats.magic.splice(index, 1)
                }
                delete state.customElements.magic[value]
            } 
        },
        updateOptions: (state: appState, action: PayloadAction<{newOptions: Partial<options>}>) => {
            state.options = {...state.options, ...action.payload.newOptions}
        }
    },
    selectors: {
        selectAttribute: (state: appState, target: attributesKeys) => state.characterStats.attributes[target],
        selectCharacteristic: (state: appState, target: characteristicsKeys) => state.characterStats.characteristics[target],
        selectSkill: (state: appState, target: skillsKeys) => state.characterStats.skills[target],
        selectNotes: (state: appState) => state.characterStats.notes,
        selectInfo: (state: appState) => state.characterStats.info,
        selectCounter: (state: appState, target: countersKeys) => state.characterStats.counters[target],
        selectMagic: (state: appState) => state.characterStats.magic,
        selectInventory: (state: appState) => state.characterStats.inventory,
        selectCustomSkills: (state: appState) => state.characterStats.customSkills,
        selectCustomElements: (state: appState) => state.customElements,
        selectOptions: (state: appState) => state.options
    }
})

export const store = configureStore({
    reducer: {
        state: statsSlice.reducer
    }
})

store.subscribe(() => {
    if (!timer) {
        timer = setTimeout(() => {
            const {state} = store.getState()
            document.title = `OpenQuest - ${state.characterStats.info.name}`
            persistCharacter(state.characterStats)
            localStorage.setItem(`options/lastsaved`, state.characterStats.meta.id)
            localStorage.setItem('customElements', JSON.stringify(state.customElements))
            localStorage.setItem('options', JSON.stringify(state.options))
            timer = null
        }, 5000)
    }
})



const { actions, selectors, reducer } = statsSlice

export const { dispatch } = store
export const { incrementGrowthPoints,  updateCharacteristic, updateSkill, updateNote, deleteNote, updateDetail, applyDamage, updateCounter, updateAttribute, loadData, newCharacter, deleteSpells, addSpells, updateSpell, deleteItems, addItems, updateItem, addCustomItem, addCustomSkill, addCustomSpell, deleteCustomElement, updateOptions } = actions
export const { selectAttribute, selectCharacteristic, selectSkill, selectInfo, selectCounter, selectMagic, selectInventory, selectNotes, selectCustomElements, selectCustomSkills, selectOptions } = selectors
export default reducer