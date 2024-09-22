import { item } from "../types/types";

export const itemDescriptions: { [key: string]: item} = {
    "Leather": { 
        name: "Leather", 
        type: "armor", 
        enc: 3,
        cost: "500 SP",
        tags: "AP 2", 
        description: "Either padded leather or boiled and stiffened leather or linen armour." 
    },
    "Ringmail": { 
        name: "Ringmail", 
        type: "armor", 
        enc: 5,
        cost: "1000 SP",
        tags: "AP 3", 
        description: "Metal rings sown onto a padded leather suit." 
    },
    "Scalemail": { 
        name: "Scalemail", 
        type: "armor", 
        enc: 7,
        cost: "1500 SP",
        tags: "AP 4", 
        description: "Metal scales sewn on to a padded leather suit." 
    },
    "Chainmail": { 
        name: "Chainmail", 
        type: "armor", 
        enc: 8,
        cost: "3000 SP",
        tags: "AP 5", 
        description: "Links of chain made into a suit." 
    },
    "Platemail": { 
        name: "Platemail", 
        type: "armor", 
        enc: 12,
        cost: "9000 SP",
        tags: "AP 6", 
        description: "Steel plates that cover the body, over a chain mail backing." 
    },
    "Cosh": {
        name: "Cosh", 
        type: "melee weapon", 
        enc: 1,
        cost: "5 SP",
        tags: "damage 1D4, One handed", 
        description: ""
    }, 
    "Club, Hatchet": {
        name: "Club, Hatchet", 
        type: "melee weapon", 
        enc: 1,
        cost: "20 SP",
        tags: "damage 1D6, One handed", 
        description: ""
    }, 
    "Quarterstaff": {
        name: "Quarterstaff", 
        type: "melee weapon", 
        enc: 2,
        cost: "20 SP",
        tags: "damage 1D8, Two handed", 
        description: ""
    }, 
    "Battleaxe, Warhammer, War pick, Ball & Chain, Mace": {
        name: "Battleaxe, Warhammer, War pick, Ball & Chain, Mace", 
        type: "melee weapon", 
        enc: 2,
        cost: "120 SP",
        tags: "damage 1D8, One handed", 
        description: ""
    }, 
    "Greathammer, Great Axe, Military Flail, War Maul": {
        name: "Greathammer, Great Axe, Military Flail, War Maul", 
        type: "melee weapon", 
        enc: 4,
        cost: "200 SP",
        tags: "damage 2D8, Two handed", 
        description: ""
    }, 
    "Halberd,Polearm, Glaive": {
        name: "Halberd,Polearm, Glaive", 
        type: "melee weapon", 
        enc: 3,
        cost: "200SP",
        tags: "damage 1D8, Two handed", 
        description: ""
    }, 
    "Small (eg. Buckler or Psilos)": {
        name: "Small (eg. Buckler or Psilos)", 
        type: "melee weapon", 
        enc: 1,
        cost: "50 SP",
        tags: "damage 1D4, One handed", 
        description: ""
    }, 
    "Medium (eg. Target Shield)": {
        name: "Medium (eg. Target Shield)", 
        type: "melee weapon", 
        enc: 2,
        cost: "150 SP",
        tags: "damage 1D6, One handed", 
        description: ""
    }, 
    "Large (Hoplon, Kite, Viking Round)": {
        name: "Large (Hoplon, Kite, Viking Round)", 
        type: "melee weapon", 
        enc: 3,
        cost: "300 SP",
        tags: "damage 1D8, One handed", 
        description: ""
    }, 
    "Lance": {
        name: "Lance", 
        type: "melee weapon", 
        enc: 3,
        cost: "150 SP",
        tags: "damage 1D10,  Two handed", 
        description: ""
    }, 
    "Longspear": {
        name: "Longspear", 
        type: "melee weapon", 
        enc: 2,
        cost: "30 SP",
        tags: "damage 1D8, Two handed", 
        description: ""
    }, 
    "Shortspear": {
        name: "Shortspear", 
        type: "melee weapon", 
        enc: 2,
        cost: "20 SP",
        tags: "damage 1D6, One handed", 
        description: ""
    }, 
    "Bastard Sword": {
        name: "Bastard Sword", 
        type: "melee weapon", 
        enc: 3,
        cost: "250 SP",
        tags: "damage 1D10,  One or Two handed or 2", 
        description: ""
    }, 
    "Dagger, Knife": {
        name: "Dagger, Knife", 
        type: "melee weapon", 
        enc: 0,
        cost: "20 SP",
        tags: "damage 1D4, 1 One handed, ", 
        description: ""
    }, 
    "Greatsword": {
        name: "Greatsword", 
        type: "melee weapon", 
        enc: 4,
        cost: "300 SP",
        tags: "damage 2D8, Two handed",
        description: ""
    }, 
    "Longsword, Scimitar": {
        name: "Longsword, Scimitar", 
        type: "melee weapon", 
        enc: 2,
        cost: "150 SP",
        tags: "damage 1D8, One handed", 
        description: ""
    }, 
    "Rapier": {
        name: "Rapier", 
        type: "melee weapon", 
        enc: 1,
        cost: "150 SP",
        tags: "damage 1D6, One handed", 
        description: ""
    },
    "Shortsword, Gladius": {
        name: "Shortsword, Gladius", 
        type: "melee weapon", 
        enc: 1,
        cost: "100 SP",
        tags: "damage 1D6, One handed",
        description: ""
    },
    "Blowgun": {
        name: "Blowgun",
        type: "ranged weapon", 
        enc: 0,
        cost: "30 SP",
        tags: "damage 1D2, Two handed, missile, Range 15m, Rate 1 CR, ",
        description: ""
    }, 
    "Heavy Crossbow": {
        name: "Heavy Crossbow",
        type: "ranged weapon", 
        enc: 2,
        cost: "350 SP",
        tags: "damage 2D6, Two handed, missile, Range 150m, Rate 1/3 CR",
        description: ""
    },
    "Light Crossbow": {
        name: "Light Crossbow",
        type: "ranged weapon", 
        enc: 1,
        cost: "150 SP",
        tags: "damage 1D8, One handed, missile, Range 125m, Rate 1/2 CR", 
        description: ""
    }, 
    "Long Bow": {
        name: "Long Bow",
        type: "ranged weapon", 
        enc: 1,
        cost: "150 SP",
        tags: "damage 1D10, Two handed, missile, Range 150m, Rate 1 CR", 
        description: ""
    }, 
    "Nomad Bow": {
        name: "Nomad Bow",
        type: "ranged weapon", 
        enc: 1,
        cost: "150 SP",
        tags: "damage 1D8, Two handed, missile, Range 125m, Rate 1 CR", 
        description: ""
    }, 
    "Short bow, Staff Sling": {
        name: "Short bow, Staff Sling",
        type: "ranged weapon", 
        enc: 1,
        cost: "75 SP",
        tags: "damage 1D8, Two handed, missile, Range 75m, Rate 1 CR", 
        description: ""
    }, 
    "Sling": {
        name: "Sling",
        type: "ranged weapon", 
        enc: 0,
        cost: "5 SP",
        tags: "damage 1D6, One handed, missile, Range 50m, Rate 1 CR, ", 
        description: ""
    }, 
    "Dagger, Knife (weapon)": {
        name: "Dagger, Knife (weapon)",
        type: "ranged weapon", 
        enc: 0,
        cost: "30 SP",
        tags: "damage 1D6, One handed, thrown, Range STR*m, Rate 1 CR, ", 
        description: ""
    }, 
    "Dart, Throwing Star": {
        name: "Dart, Throwing Star",
        type: "ranged weapon", 
        enc: 0,
        cost: "15 SP",
        tags: "damage 1D4, One handed, thrown, Range STR*m, Rate 1 CR, ", 
        description: ""
    }, 
    "Hatchet": {
        name: "Hatchet",
        type: "ranged weapon", 
        enc: 1,
        cost: "25 SP",
        tags: "damage 1D8, One handed, thrown, Range STR*m, Rate 1 CR", 
        description: ""
    }, 
    "Javelin/Shortspear": {
        name: "Javelin/Shortspear",
        type: "ranged weapon", 
        enc: 1,
        cost: "20 SP",
        tags: "damage 1D6, One handed, thrown, Range STR*2m, Rate 1 CR", 
        description: ""
    }, 
    "Rock/ improvised": {
        name: "Rock/ improvised",
        type: "ranged weapon", 
        enc: 1,
        cost: "0",
        tags: "damage 1D4, One handed, thrown, Range STR*m, Rate 1, Cost — SP", 
        description: ""
    },
    "Backpack": {
        name: "Backpack",
        type: "other", 
        enc: 1,
        cost: "5 SP",
        tags: "",
        description: "It can hold 20 ENC of equipment."
    },
    "Bedroll": {
        name: "Bedroll",
        type: "other", 
        enc: 1,
        cost: "1 SP",
        tags: "",
        description: ""
    },
    "Block & Tackle": {
        name: "Block & Tackle",
        type: "other", 
        enc: 1,
        cost: "15 SP",
        tags: "",
        description: "Adds +20% to Mechanisms tests to make or disarm large traps and makes Engineering tests possible in some circumstances. It requires at least 10m of rope to function."
    },
    "Bottle, glass": {
        name: "Bottle, glass",
        type: "other", 
        enc: 0,
        cost: "2 SP",
        tags: "",
        description: ""
    },
    "Candle, 1 hour": {
        name: "Candle, 1 hour",
        type: "other", 
        enc: 0,
        cost: "1 CP",
        tags: "",
        description: "A candle illuminates a one-metre radius. Any wind stronger than a slight breeze will extinguish a candle."
    },
    "Chain, 2 metres": {
        name: "Chain, 2 metres",
        type: "other", 
        enc: 2,
        cost: "40 SP",
        tags:"",
        description: ""
    },
    "Climbing kit": {
        name: "Climbing kit",
        type: "other", 
        enc: 1,
        cost: "25 SP",
        tags: "",
        description: "A climbing kit provides a bonus of +20% to any Athletics skill tests made to climb."
    },
    "Codex": {
        name: "Codex",
        type: "other", 
        enc: 1,
        cost: "60 SP",
        tags: "",
        description: ""
    },
    "Craft Tools": {
        name: "Craft Tools",
        type: "other", 
        enc: 2,
        cost: "75 SP",
        tags: "",
        description: ""
    },
    "Crowbar": {
        name: "Crowbar",
        type: "other", 
        enc: 1,
        cost: "25 SP",
        tags: "",
        description: "Adds +20% to brute force Athletics tests. If used as a weapon, it is considered a club (wielded with a –20% penalty)."
    },
    "Healers Kit": {
        name: "Healers Kit",
        type: "other", 
        enc: 0,
        cost: "25 SP",
        tags: "",
        description: ""
    },
    "Fish Hook": {
        name: "Fish Hook",
        type: "other", 
        enc: 0,
        cost: "2 LB",
        tags: "",
        description: "This item allows a character to use their Lore (Natural World) skill to catch a fish without suffering a penalty on the test."
    },
    "Fishing Kit": {
        name: "Fishing Kit",
        type: "other", 
        enc: 1,
        cost: "15 SP",
        tags: "",
        description: "The fishing kit grants a character a +20% bonus to their Lore (Natural World) test to catch fish."
    },
    "Flint & Tinder": {
        name: "Flint & Tinder",
        type: "other", 
        enc: 0,
        cost: "5 CP",
        tags: "",
        description: "A character with flint and tinder can build a fire in one minute under normal conditions without having to roll his Lore (Natural World) skill."
    },
    "Grappling Hook": {
        name: "Grappling Hook",
        type: "other", 
        enc: 0,
        cost: "5 SP",
        tags: "",
        description: "It will support the weight of 50 ENC or 50 SIZ, or any combination thereof."
    },
    "Hammer": {
        name: "Hammer",
        type: "other", 
        enc: 0,
        cost: "1 SP",
        tags: "",
        description: "If used as a weapon, it is treated as a club (wielded with a –20% penalty). Hammers may be used on inanimate objects without being destroyed."
    },
    "Healer’s Kit": {
        name: "Healer’s Kit",
        type: "other", 
        enc: 1,
        cost: "150 SP",
        tags: "",
        description: "A first aid kit is good for five uses (whether the skill test succeeds or fails)."
    },
    "Ladder, 3m": {
        name: "Ladder, 3m",
        type: "other", 
        enc: 4,
        cost: "2 SP",
        tags: "",
        description: ""
    },
    "Lantern": {
        name: "Lantern",
        type: "other", 
        enc: 1,
        cost: "10 SP",
        tags: "",
        description: "A lantern provides bright illumination out to a three-metre radius. It will burn for two hours on a flask of oil."
    },
    "Lock Picks": {
        name: "Lock Picks",
        type: "other", 
        enc: 0,
        cost: "75 SP",
        tags: "",
        description: ""
    },
    "Mining Pick": {
        name: "Mining Pick",
        type: "other", 
        enc: 1,
        cost: "35 SP",
        tags: "",
        description: "If used as a weapon, it is considered a club (wielded with a –20% penalty). Mining picks may be used on inanimate objects without being destroyed."
    },
    "Musical Instrument": {
        name: "Musical Instrument",
        type: "other", 
        enc: 2,
        cost: "70 SP",
        tags: "",
        description: ""
    },
    "Oil, Flask": {
        name: "Oil, Flask",
        type: "other", 
        enc: 1,
        cost: "1 SP",
        tags: "",
        description: "A flask of oil is enough to fuel a lantern for two hours or, if broken on the ground and ignited, enough to sustain a small fire for one minute."
    },
    "Papyrus, Sheet": {
        name: "Papyrus, Sheet",
        type: "other", 
        enc: 0,
        cost: "5 CP",
        tags: "",
        description: ""
    },
    "Pole, 3m": {
        name: "Pole, 3m",
        type: "other", 
        enc: 1,
        cost: "1 SP",
        tags: "",
        description: ""
    },
    "Quiver": {
        name: "Quiver",
        type: "other", 
        enc: 0,
        cost: "2 SP",
        tags: "",
        description: "Quivers can hold up to 30 arrows or crossbow bolts."
    },
    "Rope, 10m": {
        name: "Rope, 10m",
        type: "other", 
        enc: 2,
        cost: "10 SP",
        tags: "",
        description: "A standard rope can support the weight of 50 ENC or 50 SIZ, or any combination thereof."
    },
    "Sack, Large": {
        name: "Sack, Large",
        type: "other", 
        enc: 1,
        cost: "5 CP",
        tags: "",
        description: "Able to hold 10 ENC of equipment."
    },
    "Sack, Small": {
        name: "Sack, Small",
        type: "other", 
        enc: 0,
        cost: "2 CP",
        tags: "",
        description: "A small sack can hold 5 ENC of equipment."
    },
    "Scythe": {
        name: "Scythe",
        type: "other", 
        enc: 2,
        cost: "30 SP",
        tags: "",
        description: "If used as a weapon, it is considered a bill (wielded with a –20% penalty)."
    },
    "Slingbag": {
        name: "Slingbag",
        type: "other", 
        enc: 1,
        cost: "5 CP",
        tags: "",
        description: "It can carry 15 ENC of equipment."
    },
    "Spade": {
        name: "Spade",
        type: "other", 
        enc: 1,
        cost: "25 SP",
        tags: "",
        description: "If used as a weapon, it is considered a club (wielded with a –20% penalty)."
    },
    "Torch / Flaming Brand": {
        name: "Torch / Flaming Brand",
        type: "other", 
        enc: 0,
        cost: "4 CP",
        tags: "",
        description: "It will burn for one hour. A torch illuminates within a three metre radius. If used as a weapon, it is considered a club (wielded with a –20% penalty), except that it does not inflict normal damage – instead, it inflicts 1D4 fire damage and a fumble, or critical hit will also extinguish the brand."
    },
    "Waterskin": {
        name: "Waterskin",
        type: "other", 
        enc: 1,
        cost: "5 CP",
        tags: "",
        description: "A waterskin can hold enough water to sustain an adventurer for two days."
    },
    "Writing kit": {
        name: "Writing kit",
        type: "other", 
        enc: 1,
        cost: "45 SP",
        tags: "",
        description: ""
    }
}