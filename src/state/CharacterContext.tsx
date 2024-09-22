// import { applyForumlas, calculateCurrent, getSkillGrowthCost } from './utils/utils'
import { v4 as uuid} from 'uuid'
import { createSlice, configureStore} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { applyForumlas, calculateCurrent, getSkillGrowthCost } from '../utils/utils'
import { attributesKeys, characteristicsKeys, characterStats, countersKeys, motivesKeys, skillsKeys, story, trackedInfoKeys } from '../types/types'



let timer: number|null = null

const defaultCharacter: characterStats = {
    characteristics: {
        strength: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },    
        constitution: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },    
        dexterity: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },    
        size: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },    
        intelligence: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },    
        power: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        charisma: {
            current: 0,
            base: 8,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        }
    },
    attributes: {
        damageMod: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        hitPoints: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
            damage: 0,
        },
        magicPoints: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
            damage: 0,
        },
        movement: {
            current: 0,
            base: 15,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        armor: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        growth: {
            current: 0,
            base: 225,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        }
    },
    motives: {
        saga: {
        },
        quest: {
        }
    },
    skills: {
        dodge: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        persistance: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        resiliance: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        close: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        ranged: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        unarmed: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        cultOwn: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        langOwn: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        nature: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        cultOther: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        langOther: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        loreOther: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        pers: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        sorc: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        religOwn: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        religOther: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        althletics: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        craft: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        decep: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        drive: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        engin: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        healing: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        influ: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        mech: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        percep: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        perf: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        riding: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        sail: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        street: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        trade: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
        wealth: {
            current: 0,
            base: 0,
            magic_mod: 0,
            point_mod: 0,
            magic_mod_perc: 1,
            point_mod_perc: 1,
        },
    },
    info: {
        image: "https://semantic-ui.com/images/wireframe/image.png",
        name: "", 
        gender: "",
        age: "", 
        culture: "", 
        concept: "",
        rank: "", 
        org: ""
    },
    counters: {
        wealth: 0,
        fortune: 0,
    },
    meta: {
        id: String(uuid()),
        edited: String((new Date()))
    },
    magic: {
        personal: {},
        diving: {},
        sorcery: {}
    },
    inventory: {}
}

const persistState = (state: characterStats) => {
    if (!timer) {
        timer = setTimeout(() => {
            state.meta.edited = String(new Date())
            localStorage.setItem(`characters/${state.meta.id}`, JSON.stringify(state))
            localStorage.setItem(`options/lastsaved`, state.meta.id)
            timer = null
        }, 5000)
    }
}

const getLastCharacter = () => {
    const lastUuid = localStorage.getItem('options/lastsaved')
    if (lastUuid) {
        const lastCharacter:string = localStorage.getItem(`characters/${lastUuid}`) ?? ''
        if (lastCharacter.length > 0) {
            return JSON.parse(lastCharacter)
        }
    }
    return defaultCharacter
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: applyForumlas(getLastCharacter()),
    reducers: {
        updateCharacteristic: (state: characterStats, action: PayloadAction<{target: characteristicsKeys, increment: number}>) => {
            const target = action.payload.target
            const increment = action.payload.increment
            // handle growth points
            const newValue = state.characteristics[target].base + state.characteristics[target].point_mod + increment 
            if ( newValue > 18 || newValue < ((action.payload.target === 'size' || action.payload.target === 'intelligence')? 8 : 3)) {
                return
            }
            if (action.payload.increment * 5 > state.attributes.growth.current) {
                return
            }
            
            state.attributes.growth.point_mod -= 5 * increment
            state.attributes.growth.current = calculateCurrent(state.attributes.growth)

            state.characteristics[target].point_mod += increment
            state.characteristics[target].current = calculateCurrent(state.characteristics[target])

            applyForumlas(state)
            persistState(state)
            },
        updateSkill: (state: characterStats, action: PayloadAction<{target: skillsKeys, increment: number}>) => {
            const target = action.payload.target
            const increment = action.payload.increment

            if (state.skills[target].current + increment > 100 || state.skills[target].current + increment < 0) {
                return
            }
            if (getSkillGrowthCost(state.skills[target].current, increment) > state.attributes.growth.current) {
                return
            }

            state.attributes.growth.point_mod -= getSkillGrowthCost(state.skills[target].current, increment)
            state.attributes.growth.current = calculateCurrent(state.attributes.growth)

            state.skills[target].point_mod += increment
            state.skills[target].current = calculateCurrent(state.skills[target])
            persistState(state)
        },
        updateStory: (state: characterStats, action: PayloadAction<{target: string, newValue: Partial<story>, type: motivesKeys}>) => {
            state.motives[action.payload.type][action.payload.target] = {...state.motives[action.payload.type][action.payload.target], ...action.payload.newValue}
            persistState(state)
        },
        deleteStory: (state: characterStats, action: PayloadAction<{target: string, type: motivesKeys}>) => {
            delete state.motives[action.payload.type][action.payload.target] 
            persistState(state)
        },
        updateDetail: (state: characterStats, action: PayloadAction<{target: trackedInfoKeys, newValue: string}>) => {
            state.info[action.payload.target] = action.payload.newValue
            persistState(state)
        },
        applyDamage: (state: characterStats, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            if ('damage' in state.attributes[action.payload.target]) {
                state.attributes[action.payload.target].damage -= action.payload.newValue
            }
            persistState(state)
        },
        updateCounter: (state: characterStats, action: PayloadAction<{target: countersKeys, newValue: number}>) => {
            state.counters[action.payload.target] += action.payload.newValue
            persistState(state)
        },
        updateAttribute: (state: characterStats, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            state.attributes[action.payload.target].point_mod += action.payload.newValue
            state.attributes[action.payload.target].current = calculateCurrent(state.attributes[action.payload.target])
            persistState(state)
        },
        loadCharacter: (state: characterStats, action: PayloadAction<{newValue: characterStats}>) => {
            localStorage.setItem(`options/lastsaved`, action.payload.newValue?.meta?.id)
            persistState(state)
        },
        newCharacter: (state: characterStats) => {
            const newChar = defaultCharacter
            applyForumlas(newChar)
            localStorage.setItem(`options/lastsaved`, newChar.meta.id)
            persistState(state)
        },
    },
    selectors: {
        selectAttribute: (state: characterStats, target: attributesKeys) => state.attributes[target],
        selectCharacteristic: (state: characterStats, target: characteristicsKeys) => state.characteristics[target],
        selectSkill: (state: characterStats, target: skillsKeys) => state.skills[target],
        selectMotive: (state: characterStats, target: motivesKeys) => state.motives[target],
        selectInfo: (state: characterStats) => state.info,
        selectCounter: (state: characterStats, target: countersKeys) => state.counters[target]
    }
})

export const store = configureStore({
    reducer: {
        stats: statsSlice.reducer
    }
})
const { actions, selectors, reducer } = statsSlice

export const { dispatch } = store
export const { updateCharacteristic, updateSkill, updateStory, deleteStory, updateDetail, applyDamage, updateCounter, updateAttribute, loadCharacter, newCharacter } = actions
export const { selectAttribute, selectCharacteristic, selectSkill, selectMotive, selectInfo, selectCounter} = selectors
export default reducer