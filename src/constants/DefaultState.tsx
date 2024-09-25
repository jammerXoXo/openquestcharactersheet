import { appState } from "../types/types"
import { applyForumlas } from "../utils/utils"

export const getDefaultCharacter = (uuid:string): appState => {
    return ({
        characterStats: applyForumlas({
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
                resilience: {
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
                athletics: {
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
            inventory: [],
            notes: '',
            customSkills: {
                knowledge: {
                    abbr: "knowl",
                    display: "Knowledge",
                    skills: []
                },
                magic: {
                    abbr: "magic",
                    display: "Magic",
                    skills: []
                }
            }
        }),
        customElements: {
            items: {},
            magic: {},
        }
    })
}
