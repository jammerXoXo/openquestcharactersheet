import { attributesDescriptions, attributesKeys, characteristics, characteristicsDescriptions, countersKeys, motivesDescriptions, skillDescriptions, skillsKeys } from "../types/types"

export const CHARACTERISTICS: characteristicsDescriptions = {
    strength: {
        abbr: "str",
        display: "Strength"
    },    
    constitution: {
        abbr: "con",
        display: "Constitution"
    },    
    dexterity: {
        abbr: "dex",
        display: "Dexterity"
    },    
    size: {
        abbr: "siz",
        display: "Size"
    },    
    intelligence: {
        abbr: "int",
        display: "Intelligence"
    },    
    power: {
        abbr: "pow",
        display: "Power"
    },    
    charisma: {
        abbr: "cha",
        display: "Charisma"
    }
}

export const ATTRIBUTES: attributesDescriptions = {
    damageMod: {
        abbr: "d. mod",
        display: "Damage Mod"
    },
    hitPoints: {
        abbr: "hp",
        display: "Hit Points"
    },
    magicPoints: {
        abbr: "mp",
        display: "Magic Points"
    },
    movement: {
        abbr: "move",
        display: "Movement"
    },
    armor: {
        abbr: "AP",
        display: "Armor Worn"
    },
    growth: {
        abbr: "growth",
        display: "Growth"
    }
}

export const MOTIVES: motivesDescriptions = {
    saga: {
        abbr: "saga",
        display: "Saga"
    },
    quest: {
        abbr: "quest",
        display: "Quest"
    }
}

export const SKILLS: skillDescriptions = {
    resistance: {
        abbr: "resists",
        display: "Resistances",
        skills: {
            dodge: {
                abbr: "dodge",
                display: "Dodge",
                formula: "(DEX + 10)",
            },
            persistance: {
                abbr: "persist",
                display: "Persistance",
                formula: "(POW + 10)",
            },
            resiliance: {
                abbr: "resil",
                display: "Resilience",
                formula: "(CON + POW)",
            }
        }
    },
    combat: {
        abbr: "combat",
        display: "Combat Skills",
        skills: {
            close: {
                abbr: "close",
                display: "Close Combat",
                formula: "(DEX + STR)",
            },
            ranged: {
                abbr: "ranged",
                display: "Ranged Combat",
                formula: "(DEX + INT)",
            },
            unarmed: {
                abbr: "unarmed",
                display: "Unarmed Combat",
                formula: "(DEX + STR)",
            }
        }
    },
    knowledge: {
        abbr: "knowl",
        display: "Knowledge",
        skills: {
            cultOwn: {
                abbr: "cult [own]",
                display: "Culture [Own]",
                formula: "(INT + 10)",
            },
            langOwn: {
                abbr: "lang [own]",
                display: "Language [Own]",
                formula: "(INT + 50)",
            },
            nature: {
                abbr: "nat. lore",
                display: "Natural Lore",
                formula: "(INT + 10)",
            },
            cultOther: {
                abbr: "cult [other]",
                display: "Culture [Other]",
                formula: "(INT)",
            },
            langOther: {
                abbr: "lang [other]",
                display: "Language [Other]",
                formula: "(INT)"
            },
            loreOther: {
                abbr: "lore [other]",
                display: "Lore [other]",
                formula: "(INT)",
            },
        }
    },
    magic: {
        abbr: "magic",
        display: "Magic",
        skills: {
            pers: {
                abbr: "personal",
                display: "Personal Magic",
                formula: "(POW x 3)",
            },
            sorc: {
                abbr: "sorcery",
                display: "Sorcery Casting",
                formula: "(INT)",
            },
            religOwn: {
                abbr: "relig [own]",
                display: "Religion [Own]",
                formula: "(INT + 10)",
            },
            religOther: {
                abbr: "relig [other]",
                display: "Religion [Other]",
                formula: "(INT)"
            }
        }
    },
    practical: {
        abbr: "pract",
        display: "Practical",
        skills: {
            althletics: {
                abbr: "athle",
                display: "Athletics",
                formula: "(DEX + STR)",
            },
            craft: {
                abbr: "craft",
                display: "Craft",
                formula: "(INT + 10)",
            },
            decep: {
                abbr: "decept",
                display: "Deception",
                formula: "(DEX + INT)",
            },
            drive: {
                abbr: "drive",
                display: "Driving",
                formula: "(DEX + INT)",
            },
            engin: {
                abbr: "engin",
                display: "Engineering",
                formula: "(INT + 10)",
            },
            healing: {
                abbr: "heal",
                display: "Healing",
                formula: "(INT + 10)",
            },
            influ: {
                abbr: "influ",
                display: "Influence",
                formula: "(CHA + 10)",
            },
            mech: {
                abbr: "mecha",
                display: "Mechanisms",
                formula: "(DEX + INT)",
            },
            percep: {
                abbr: "percep",
                display: "Perception",
                formula: "(INT + POW)",
            },
            perf: {
                abbr: "perf",
                display: "Performance",
                formula: "(CHA + 10)",
            },
            riding: {
                abbr: "ride",
                display: "Riding",
                formula: "(DEX + POW)",
            },
            sail: {
                abbr: "sail",
                display: "Sailing",
                formula: "(DEX + INT)",
            },
            street: {
                abbr: "street",
                display: "Streetwise",
                formula: "(CHA + POW)",
            },
            trade: {
                abbr: "trade",
                display: "Trade",
                formula: "(INT + 10)",
            },
            wealth: {
                abbr: "wealth",
                display: "Wealth",
                formula: "(INT + CHA)",
            },
        }
    }
}


export type FORUMLAKEYS = Exclude<(skillsKeys | attributesKeys | countersKeys), 'armor' | 'movement' | 'growth' | 'fortune'>

export const FORMULAS : {[key in FORUMLAKEYS]: (characteristics: characteristics) => number} = {
    dodge: (characteristics: characteristics) => (characteristics.dexterity.current + 10),
    persistance: (characteristics: characteristics) => (characteristics.power.current + 10),
    resiliance: (characteristics: characteristics) => (characteristics.constitution.current + characteristics.power.current),
    close: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.strength.current),
    ranged: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.intelligence.current),
    unarmed: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.strength.current),
    cultOwn: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    langOwn: (characteristics: characteristics) => (characteristics.intelligence.current + 50),
    nature: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    cultOther: (characteristics: characteristics) => (characteristics.intelligence.current),
    langOther: (characteristics: characteristics) => (characteristics.intelligence.current),
    loreOther: (characteristics: characteristics) => (characteristics.intelligence.current),
    pers: (characteristics: characteristics) => (characteristics.power.current * 3),
    sorc: (characteristics: characteristics) => (characteristics.intelligence.current),
    religOwn: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    religOther: (characteristics: characteristics) => (characteristics.intelligence.current),
    althletics: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.strength.current),
    craft: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    decep: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.intelligence.current),
    drive: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.intelligence.current),
    engin: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    healing: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    influ: (characteristics: characteristics) => (characteristics.charisma.current + 10),
    mech: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.intelligence.current),
    percep: (characteristics: characteristics) => (characteristics.intelligence.current + characteristics.power.current),
    perf: (characteristics: characteristics) => (characteristics.charisma.current + 10),
    riding: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.power.current),
    sail: (characteristics: characteristics) => (characteristics.dexterity.current + characteristics.intelligence.current),
    street: (characteristics: characteristics) => (characteristics.charisma.current + characteristics.power.current),
    trade: (characteristics: characteristics) => (characteristics.intelligence.current + 10),
    wealth: (characteristics: characteristics) => (characteristics.intelligence.current + characteristics.charisma.current),
    damageMod: (characteristics: characteristics) => (characteristics.strength.current + characteristics.size.current),
    hitPoints: (characteristics: characteristics) => (Math.ceil((characteristics.size.current + characteristics.constitution.current)/2)),
    magicPoints: (characteristics: characteristics) => (characteristics.power.current),
}