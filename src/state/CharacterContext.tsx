// import { applyForumlas, calculateCurrent, getSkillGrowthCost } from './utils/utils'
import { v4 as uuid} from 'uuid'

import { createSlice, configureStore} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { applyForumlas, calculateCurrent, getSkillGrowthCost } from '../utils/utils'
import { attributesKeys, characteristicsKeys, characterStats, countersKeys, motivesKeys, skillsKeys, story, trackedInfoKeys } from '../types/types'



let timer: number|null = null

const getDefaultCharacter = (uuid:string): characterStats => {
    return ({
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
            id: uuid,
            edited: (new Date()).toLocaleString()
        },
        magic: [
        ],
        inventory: []
    })
}



const getLastCharacter = () => {
    const lastUuid = localStorage.getItem('options/lastsaved')
    if (lastUuid) {
        const lastCharacter:string = localStorage.getItem(`characters/${lastUuid}`) ?? ''
        if (lastCharacter.length > 0) {
            return JSON.parse(lastCharacter)
        }
    }
    return structuredClone(getDefaultCharacter(String(uuid())))
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
            state.meta.edited = (new Date()).toLocaleString()
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
            state.meta.edited = (new Date()).toLocaleString()
        },
        updateStory: (state: characterStats, action: PayloadAction<{target: string, newValue: Partial<story>, type: motivesKeys}>) => {
            state.motives[action.payload.type][action.payload.target] = {...state.motives[action.payload.type][action.payload.target], ...action.payload.newValue}
            state.meta.edited = (new Date()).toLocaleString()
        },
        deleteStory: (state: characterStats, action: PayloadAction<{target: string, type: motivesKeys}>) => {
            delete state.motives[action.payload.type][action.payload.target] 
            state.meta.edited = (new Date()).toLocaleString()
        },
        updateDetail: (state: characterStats, action: PayloadAction<{target: trackedInfoKeys, newValue: string}>) => {
            state.info[action.payload.target] = action.payload.newValue
            state.meta.edited = (new Date()).toLocaleString()
        },
        applyDamage: (state: characterStats, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            if ('damage' in state.attributes[action.payload.target]) {
                state.attributes[action.payload.target].damage -= action.payload.newValue
            }
            state.meta.edited = (new Date()).toLocaleString()
        },
        updateCounter: (state: characterStats, action: PayloadAction<{target: countersKeys, newValue: number}>) => {
            state.counters[action.payload.target] += action.payload.newValue
            state.meta.edited = (new Date()).toLocaleString()
        },
        updateAttribute: (state: characterStats, action: PayloadAction<{target: attributesKeys, newValue: number}>) => {
            state.attributes[action.payload.target].point_mod += action.payload.newValue
            state.attributes[action.payload.target].current = calculateCurrent(state.attributes[action.payload.target])
            state.meta.edited = (new Date()).toLocaleString()
        },
        loadCharacter: (state: characterStats, action: PayloadAction<{newValue: characterStats}>) => {
            localStorage.setItem(`options/lastsaved`, action.payload.newValue?.meta?.id)
            state.meta.edited = (new Date()).toLocaleString()
        },
        newCharacter: (state: characterStats) => {
            const newChar = structuredClone(getDefaultCharacter(String(uuid())))
            applyForumlas(newChar)
            localStorage.setItem(`options/lastsaved`, newChar.meta.id)

            state.info = newChar.info
            state.characteristics = newChar.characteristics
            state.attributes = newChar.attributes
            state.counters = newChar.counters
            state.inventory = newChar.inventory
            state.magic = newChar.magic
            state.motives = newChar.motives
            state.skills = newChar.skills
            state.meta = newChar.meta
        },
        deleteSpells: (state: characterStats, action: PayloadAction<{spellNames: string[]}>) => {
            state.magic = state.magic.filter(spell => !action.payload.spellNames.indexOf(spell.name))
        }
    },
    selectors: {
        selectAttribute: (state: characterStats, target: attributesKeys) => state.attributes[target],
        selectCharacteristic: (state: characterStats, target: characteristicsKeys) => state.characteristics[target],
        selectSkill: (state: characterStats, target: skillsKeys) => state.skills[target],
        selectMotive: (state: characterStats, target: motivesKeys) => state.motives[target],
        selectInfo: (state: characterStats) => state.info,
        selectCounter: (state: characterStats, target: countersKeys) => state.counters[target],
        selectMagic: (state: characterStats) => state.magic
    }
})

export const store = configureStore({
    reducer: {
        stats: statsSlice.reducer
    }
})

store.subscribe(() => {
    if (!timer) {
        timer = setTimeout(() => {
            console.log('saving')
            const {stats} = store.getState()
            localStorage.setItem(`characters/${stats.meta.id}`, JSON.stringify(stats))
            localStorage.setItem(`options/lastsaved`, stats.meta.id)
            timer = null
        }, 5000)
    }
})



const { actions, selectors, reducer } = statsSlice

export const { dispatch } = store
export const { updateCharacteristic, updateSkill, updateStory, deleteStory, updateDetail, applyDamage, updateCounter, updateAttribute, loadCharacter, newCharacter, deleteSpells } = actions
export const { selectAttribute, selectCharacteristic, selectSkill, selectMotive, selectInfo, selectCounter, selectMagic } = selectors
export default reducer