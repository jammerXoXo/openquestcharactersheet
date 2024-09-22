export type rollModalState = {
    open: boolean
    result: number
    target: number
    crit: boolean
    success: boolean
}

export type storyModalState = {
    open: boolean
    type: motivesKeys
    id: string
}

export type loadModalState = {
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

export type characteristicsKeys = 'strength' | 'constitution' | 'dexterity' | 'size' | 'intelligence' | 'power' | 'charisma'
export type characteristics =  { [key in characteristicsKeys]: trackedStat }

export type attributesKeys = 'damageMod' | 'hitPoints' | 'magicPoints' | 'movement' | 'armor' | 'growth'
export type attributes = { [key in attributesKeys]: trackedStat }

export type motivesKeys = 'saga' | 'quest'
export type motives = { [key in motivesKeys]: { [key: string]: story } }

export type skillTypes = 'resistance' | 'combat' | 'knowledge' | 'magic' | 'practical'
export type resistanceSkillsKeys = 'dodge' | 'persistance' | 'resiliance'
export type combatSkillsKeys = 'close' | 'ranged' | 'unarmed'
export type knowledgeSkillsKeys = 'cultOwn' | 'langOwn' | 'nature' | 'cultOther' | 'langOther' | 'loreOther'
export type magicSkillsKeys = 'pers' | 'sorc' | 'religOwn' | 'religOther'
export type practicalSkillsKeys = 'althletics' | 'craft' | 'decep' | 'drive' | 'engin' | 'healing' | 'influ' | 'mech' | 'percep' | 'perf' | 'riding' | 'sail' | 'street' | 'trade' |'wealth'
export type skillsKeys =  resistanceSkillsKeys | combatSkillsKeys | knowledgeSkillsKeys | magicSkillsKeys | practicalSkillsKeys
export type skills = { [key in skillsKeys]: trackedStat }

export type countersKeys = 'wealth' | 'fortune'
export type counters = { [key in countersKeys]: number }

export type metasKeys = 'id' | 'edited'
export type meta = { [key in metasKeys]: string }

export type magicsKeys = 'personal' | 'divine' | 'sorcery'
export type magic = { [key in magicsKeys]: any }

export type trackedInfoKeys = 'image' | 'name' | 'gender' | 'age' | 'culture' | 'concept' | 'rank' | 'org'
export type trackedInfo = { [key in trackedInfoKeys]: string }

export type characterStatsKeys = 'characteristics' | 'attributes' | 'motives' | 'skills' | 'info' | 'counters' | 'meta' | 'magic' | 'inventory'

export type characterStats = {
    characteristics: characteristics
    attributes: attributes
    motives: motives
    skills: skills
    info: trackedInfo
    counters: counters
    meta: meta
    magic: magic
    inventory: any
}

export type basicDescription = {
    abbr: string
    display: string
}

export type formulaDescription = {
    abbr: string
    display: string
    formula: string
}

export type skillBlock<T extends string> = {
    abbr: string
    display: string
    skills: { [key in T]: formulaDescription }
}

export type characteristicsDescriptions = { [key in characteristicsKeys]: basicDescription }
export type attributesDescriptions = { [key in attributesKeys]: basicDescription }
export type motivesDescriptions = { [key in motivesKeys]: basicDescription }
export type skillDescriptions = {
    resistance: skillBlock<resistanceSkillsKeys>
    combat: skillBlock<combatSkillsKeys>
    knowledge: skillBlock<knowledgeSkillsKeys>
    magic: skillBlock<magicSkillsKeys>
    practical: skillBlock<practicalSkillsKeys>
}