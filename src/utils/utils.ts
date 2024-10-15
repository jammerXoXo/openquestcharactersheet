import { spellDescriptions } from "../constants/magic"
import { FORMULAS, FORMULAKEYS } from "../constants/stats"
import { characterStatsVersion } from "../constants/versions"
import { appState, characterStats, characterStatsKeys, countersKeys, customElements, magicsTypes, trackedStat } from "../types/types"
import { v4 as uuid} from 'uuid'

const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max)
}


export const getRollModalContent = (target: number, mod: number, text: string) => {
    const first = getRandomNumber(10)
    const second = getRandomNumber(10)
    const total = (first === 0 && second === 0)? 100: first * 10 + second
    const crit = first === second
    const test = (1 + mod/100) * target
    let success = false

    if ( total < test) {
        success = true
    }

    return {
        open: true,
        result: total,
        target: test,
        crit: crit,
        success: success,
        text: text
    }
}

export const saveFile = async (state: { state: appState }) => {
    const stats = state.state.characterStats
    const customElements = state.state.customElements

    const statsBlob = new Blob([JSON.stringify(stats)], { type: 'application/json'})
    const customElementsBlob = new Blob([JSON.stringify(customElements)], { type: 'application/json'})

    const a = document.createElement('a')
    a.download = stats.info?.name ?? stats.meta.id
    a.href = URL.createObjectURL(statsBlob)
    a.addEventListener('click', () => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000)
    })
    a.click()

    const b = document.createElement('a')
    b.download = 'customElements.json'
    b.href = URL.createObjectURL(customElementsBlob)
    b.addEventListener('click', () => {
      setTimeout(() => URL.revokeObjectURL(b.href), 30 * 1000)
    })
    b.click()
  }


export const getGrowthCost = (type: string, value: number, increment: number) => {
    if (type === 'characteristics') {
        return increment * 5
    }   else if (type === 'skills') {
        return getSkillGrowthCost(value, increment)
    }
}

export const getSkillGrowthCost = (skill: number, increment: number) => {
    let temp = increment
    let cost = 0
    let sign = 1

    if (temp < 0) {
        skill += temp 
        temp = -temp
        sign = -1 
    }

    if (temp !== 0  && skill < 25) { 
        cost += Math.min((25 - skill), temp)
        temp -= Math.min((25 - skill), temp)
    }
    if (temp !== 0  && skill < 50) { 
        cost += 2 * Math.min((50 - skill), temp)
        temp -= Math.min((50 - skill), temp)
    }    
    if (temp !== 0  && skill < 75) { 
        cost += 3 * Math.min((75 - skill), temp)
        temp -= Math.min((75 - skill), temp)
    }
    if (temp !== 0  && skill < 99) { 
        cost += 5 * Math.min((99 - skill), temp)
        temp -= Math.min((99 - skill), temp)
    }
    if (temp !== 0 && skill === 99) {
        cost = 10
    } 

    return sign*cost
}

export const getBaseSpellGrowthCosts = (customElements: customElements, spellNames: string[]) => {
    return spellNames.reduce<number>((acc: number, spell: string) => {
        const s = spellDescriptions[spell] ?? customElements.magic[spell]
        if (s.type === 'divine') {
            return acc + s.magnitude * 2 
        } else if (s.type === 'personal') {
            return acc + s.magnitude
        } else {
            return acc + 3
        }
    }, 0)
}

export const getSpellCost = (type: magicsTypes, magnitude: number) => {
    if (type === 'divine') {
        return magnitude * 2 
    } else if (type === 'personal') {
        return magnitude
    } else {
        return 3
    }
}


const applyForumla = (stats: characterStats, type: characterStatsKeys) => {
    (Object.keys(stats[type]) as Array<FORMULAKEYS>).forEach((key: FORMULAKEYS) => {
        if (key in FORMULAS) {
            //@ts-expect-error TODO fix this later :P
            stats[type][key].base = FORMULAS[key](stats.characteristics)
        } else if (key.includes('[')) {
            // TODO SUUUUUUUUUUUPER hacky, make this better
            //@ts-expect-error TODO fix this later :P
            stats[type][key].base = stats.characteristics.intelligence.current
        }
        //@ts-expect-error TODO fix this later :P
        stats[type][key].current = calculateCurrent(stats[type][key])
    })
}

//@ts-expect-error  TODO fix this later :P
const applyCurrent = (stats: characterStats, type: characterStatsKeys) => Object.keys(stats[type]).forEach(key => stats[type][key].current = calculateCurrent(stats[type][key]))

export const calculateCurrent = (x: trackedStat) => {
    return (x.base + x.point_mod + x.magic_mod) * x.point_mod_perc * x.magic_mod_perc 
}

export const applyForumlas = (stats: characterStats) => {
    applyCurrent(stats, 'characteristics')
    applyForumla(stats, 'skills')
    applyForumla(stats, 'attributes');
    //@ts-expect-error TODO fix this later :P
    (Object.keys(stats.counters) as Array<countersKeys>).filter((key: countersKeys) => key in FORMULAS).forEach((key: countersKeys & FORMULAKEYS ) => stats.counters[key] = FORMULAS[key](stats.characteristics))
    return stats
}

export const restoreCharacter = (char: string) => {
    const {version, ...character } = JSON.parse(char)

    if (!version) {   // aka version 1.0
        // Update to version 1.1
        const notes = character.notes
        character.notes = character.motives
        character.notes.misc = {
            [uuid()]: {
                name: 'restored',
                story: notes,
                completed: false
            }
        }
        delete character.motives
    }

    return character as characterStats
}

export const persistCharacter = (char: characterStats) => {
    localStorage.setItem(`characters/${char.meta.id}`, JSON.stringify({...char, version: characterStatsVersion }))
} 