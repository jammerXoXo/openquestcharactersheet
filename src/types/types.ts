export type rollModalState = {
    open: boolean
    result: number
    target: number
    crit: boolean
    success: boolean
    text?: string
}

export type storyModalState = {
    open: boolean
    type: notesKeys
    id: string
}

export type loadModalState = {
    open: boolean
}

export type customModalState = {
    open: boolean
}

export type optionsModalState = {
    open: boolean
}

export type trackedStat = {
    current: number
    base: number
    magic_mod: number
    point_mod: number
    magic_mod_perc: number
    point_mod_perc: number
    damage?: number
}

export type story = {
    story: string
    name: string
    completed: boolean
}

export type baseSpell = {
    name: string
    magnitude: number
    variable: boolean
    tags: string
    type: magicsTypes
}

export type spellDescription = baseSpell & {
    description: string
}

export type learnedSpell = baseSpell & {
    learnedMagnitude: number
    remainingMagnitude: number
}

export type item = {
    name: string
    type: itemTypes 
    enc: number
    cost: string
    tags: string 
    description: string
    count?: number
}

export type characteristicsKeys = 'strength' | 'constitution' | 'dexterity' | 'size' | 'intelligence' | 'power' | 'charisma'
export type characteristics =  { [key in characteristicsKeys]: trackedStat }

export type attributesKeys = 'damageMod' | 'hitPoints' | 'magicPoints' | 'movement' | 'armor' | 'growth'
export type attributes = { [key in attributesKeys]: trackedStat }

export type notesKeys = 'saga' | 'quest' | 'misc'
export type notes = { [key in notesKeys]: { [key: string]: story } }

export type skillTypes = 'resistance' | 'combat' | 'knowledge' | 'magic' | 'practical'
export type resistanceSkillsKeys = 'dodge' | 'persistance' | 'resilience'
export type combatSkillsKeys = 'close' | 'ranged' | 'unarmed'
export type knowledgeSkillsKeys = 'cultOwn' | 'langOwn' | 'nature' | `cult[${string}]` | `lang[${string}]` | `lore[${string}]`
export type magicSkillsKeys = 'pers' | 'sorc' | 'religOwn' | `relig[${string}]`
export type practicalSkillsKeys = 'athletics' | 'craft' | 'decep' | 'drive' | 'engin' | 'healing' | 'influ' | 'mech' | 'percep' | 'perf' | 'riding' | 'sail' | 'street' | 'trade' |'wealth'
export type skillsKeys =  resistanceSkillsKeys | combatSkillsKeys | knowledgeSkillsKeys | magicSkillsKeys | practicalSkillsKeys
export type skills = { [key in skillsKeys]: trackedStat }

export type countersKeys = 'wealth' | 'fortune'
export type counters = { [key in countersKeys]: number }

export type metasKeys = 'id' | 'edited'
export type meta = { [key in metasKeys]: string }

export type magicsTypes = 'personal' | 'divine' | 'sorcery'
export type magic = learnedSpell[]

export type itemTypes = 'armor' | 'ranged weapon' | 'melee weapon' | 'other'
export type inventory = item[]

export type trackedInfoKeys = 'image' | 'name' | 'gender' | 'age' | 'culture' | 'concept' | 'rank' | 'org'
export type trackedInfo = { [key in trackedInfoKeys]: string }

export type characterStatsKeys = 'characteristics' | 'attributes' | 'notes' | 'skills' | 'info' | 'counters' | 'meta' | 'magic' | 'inventory'

export type characterStats = {
    characteristics: characteristics
    attributes: attributes
    notes: notes
    skills: skills
    info: trackedInfo
    counters: counters
    meta: meta
    magic: magic
    inventory: inventory
    customSkills: Partial<skillDescriptions>
}

export type customElements = {
    items: {[key: string]: item}
    magic: {[key: string]: spellDescription}
}

export type options = {
    disableGrowthCost: boolean
    discordWebHook: string
}

export type appState = {
    characterStats: characterStats
    customElements: customElements
    options: options
} 

export type basicDescription = {
    abbr: string
    display: string
}

export type formulaDescription<T> = {
    skill: T
    abbr: string
    display: string
    formula: string
}

export type skillBlock<T extends string> = {
    abbr: string
    display: string
    skills: Array<formulaDescription<T>>
}

export type characteristicsDescriptions = { [key in characteristicsKeys]: basicDescription }
export type attributesDescriptions = { [key in attributesKeys]: basicDescription }
export type notesDescriptions = { [key in notesKeys]: basicDescription }
export type skillDescriptions = {
    resistance: skillBlock<resistanceSkillsKeys>
    combat: skillBlock<combatSkillsKeys>
    knowledge: skillBlock<knowledgeSkillsKeys>
    magic: skillBlock<magicSkillsKeys>
    practical: skillBlock<practicalSkillsKeys>
}