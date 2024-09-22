import { spellDescriptions } from "../constants/magic"
import { FORMULAS, FORMULAKEYS } from "../constants/stats"
import { characterStats, characterStatsKeys, countersKeys, learnedSpell, spellDescription, trackedStat } from "../types/types"

const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max)
}


export const getRollModalContent = (target: number, mod: number) => {
    const first = getRandomNumber(10)
    const second = getRandomNumber(10)
    const total = first * 10 + second
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
        success: success
    }
}

export const saveFile = async (stats: characterStats) => {

    const blob = new Blob([JSON.stringify(stats)], { type: 'application/json'})

    const a = document.createElement('a')
    a.download = stats.info.name ?? stats.meta.id
    a.href = URL.createObjectURL(blob)
    a.addEventListener('click', () => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000)
    })
    a.click()
  };


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

export const getBaseSpellGrowthCosts = (spellNames: string[]) => {
    return spellNames.reduce<number>((acc: number, spell: string) => {
        const s = spellDescriptions[spell]
        if (s.type === 'divine') {
            return acc + s.magnitude * 2 
        } else if (s.type === 'personal') {
            return acc + s.magnitude
        } else {
            return acc + 3
        }
    }, 0)
}

const applyForumla = (stats: characterStats, type: characterStatsKeys) => {
    (Object.keys(stats[type]) as Array<FORMULAKEYS>).forEach((key: FORMULAKEYS) => {
        if (key in FORMULAS) {
            stats[type][key].base = FORMULAS[key](stats.characteristics)
        }
        stats[type][key].current = calculateCurrent(stats[type][key])
    })
}

const applyCurrent = (stats: characterStats, type: characterStatsKeys) => Object.keys(stats[type]).forEach(key => stats[type][key].current = calculateCurrent(stats[type][key]))

export const calculateCurrent = (x: trackedStat) => {
    return (x.base + x.point_mod + x.magic_mod) * x.point_mod_perc * x.magic_mod_perc 
}

export const applyForumlas = (stats: characterStats) => {
    applyCurrent(stats, 'characteristics')
    applyForumla(stats, 'skills')
    applyForumla(stats, 'attributes');
    (Object.keys(stats.counters) as Array<countersKeys>).filter((key: countersKeys) => key in FORMULAS).forEach((key: countersKeys & FORMULAKEYS ) => stats.counters[key] = FORMULAS[key](stats.characteristics))
    return stats
}