import { spellDescription } from "../types/types";

export const spellDescriptions:spellDescription[] = [
    {   
        "name": "Animal Whisperer",
        "magnitude": 2,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": "The caster whispers into the ear of a distressed animal, calming it. If the distressed animal is under the influence of a spell such as Fear (see Divine Magic)  or Scare, then it gets another Persistence test to shake off the effect of the spell."
    },
    {   
        "name": "Babel",
        "magnitude": 2,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " If the target fails their Persistence roll, this spell garbles the language of the affected creature. The target can still think and, for the most part, act normally, but anything it says comes out as gibberish. Thus, a commanding officer would be unable to give orders to their men, and a spell caster would be unable to cast spells. "
    },
    {   
        "name": "Back Eyes",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " This spell grants the recipient awareness as if they had physically got eyes in the back of their head for the duration of the spell, which allows them to make Perception rolls and be aware of others behind them. "
    },
    {   
        "name": "Beast Call",
        "magnitude": 2,
        "variable": false,
        "tags": "Instant, Resist (Resilience)",
        "type": "personal",
        "description": " The Beast Call serves to attract an animal within range. When the spell is cast, it affects a targeted creature with a fixed INT of 7 or less. If it fails to resist, the creature will go to the place where the caster stands, and the spell effect terminates. Any barrier, immediate threat, or counter control, also end the effects of the spell, leaving the creature to react naturally.  For example, the Beast Call spell might cause a horse to turn and walk towards the spell, but a single yank of its reins by the rider would end the spell’s effect.  This spell is a potent aid to hunters and herders. "
    },
    {   
        "name": "Befuddle",
        "magnitude": 2,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " This spell confuses and clouds the mind of its target if they fail a Persistence roll. The affected target may not cast spells and may only take non-offensive actions. The target may run if it so chooses and may dodge and normally parry in combat.  Any skills that have INT as a base are at -20% when tested while the target is under the effects of this spell.  This spell is effective against humanoids and natural creatures. Other creatures (such as spirits or magical beasts like dragons) are not affected by this spell. "
    },
    {
        "name": "Block Sense (Sense)",
        "magnitude": 3,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " Depending on the version of this spell it will Blind/Deafen/Desensitise taste or smell/Numb touch on a failed resistance roll for the duration of the spell. "
    },
    {
        "name": "Call Spirit (Type)",
        "magnitude": 3,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " This spell summons a single spirit of a given type from the Spirit World to do the bidding of the caster. The spirit resists the call by using its Persistence. If it succeeds, it can return to the Spirit World. Unless combined with a Binding attempt (see below), the spirit that fails a Persistence roll must perform one action, within its power, for the caster, after which it returns to the Spirit World.  Types of Spirits  Disease spirits inflict disease upon the possessed victim. Passion (Fear/Madness/Pain) these spirits work upon the passions of a victim and cause mental debilitation and distress. Healing spirits heal wounds and drive out possessing disease spirits. Magic spirits know spells and have magic points that the caller may use. For more information about Spirits, see the Creatures chapter. Binding Spirits If the character wants to bind a spirit, they must engage in spiritual combat. If they win, they can bind the spirit to an item or their person, by spending an additional growth point. If they fail, the spirit either flees to the Spirit World if it is a Magic or Healing spirit or possesses the caster if it is a Disease or Passion spirit. "
    },
    {   
        "name": "Care",
        "magnitude": 2,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell places the recipient under the care of the caster.  If the caster has any active Protection or Countermagic spells, the character under the effects of the Care spell also benefits from the effects of these spells. "
    },
    {   
        "name": "Clear Path",
        "magnitude": 0,
        "variable":true,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell allows the caster to move through even the most tangled, thorny brush as if they were on an open road. For each additional point of magnitude, an additional person can accompany them. "
    },
    {   
        "name": "Coordination",
        "magnitude": 0,
        "variable":true,
        "tags": "Touch",
        "type": "personal",
        "description": " For every point of magnitude.  +10% added to the target’s combat order.  +10% to Dodge or DEX based Athletics tests. "
    },
    {   
        "name": "Countermagic",
        "magnitude": 0,
        "variable":true,
        "tags": "Instant",
        "type": "personal",
        "description": " This spell is cast in advance and sits dormant until a hostile spell attacks the recipient. At this point, the Countermagic spell fires off. As long as Countermagic’s magnitude equals or exceeds the target spell’s magnitude, the target spell does not take effect.  After the Countermagic tries to block a spell, successfully or not, it ends. "
    },
    {   
        "name": "Cover Blind Side",
        "magnitude": 1,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " For the duration of the spell, the target can react to attacks from behind or flank attacks as if they were a normal attack from the front. It does not confer any additional reactions. "
    },
    {   
        "name": "Create Charms",
        "magnitude": 0,
        "variable":true,
        "tags": "Permanent",
        "type": "personal",
        "description": " A charm is a physical item that stores one or more Personal Magic spells. A charm could be a necklace that holds a Befuddle 4 spell; a sword etched with runes that holds a Weapon Enhance 2 spell; or even a sheet of paper with a poem written on it that, when held against the skin, provides a Protection 1 spell.  To create a charm a character must possess both the spell they wish to store and Create Charm at the same or greater magnitude.  The item which going to hold the charm within close range of the caster for the length of the casting.  If the caster spends one growth point at the time of creation, the spell within the charm is reusable. Otherwise once the spell is cast the charm is dispelled.  A spell stored in a charm uses the wielder’s Personal Magic Casting skill and the wielder’s magic points.  The time taken to create a single-use charm is one hour per point of the magnitude of the spell; Reusable charms take three hours per point of magnitude to create.  Charms are mundane items.  Breaking the item dispels the charm. "
    },
    {   
        "name": "Create Magic Point Store",
        "magnitude": 0,
        "variable":true,
        "tags": "Permanent",
        "type": "personal",
        "description": " This spell allows the caster to create an item that has magic point storing capabilities. Magic Point Stores allow the owner to have a pool of magic points in addition to their own.  Typically, crystals, due to their physical toughness, make good stores. This spell can also be combined with an existing charm, such as a sword with Weapon Enhance 2 stored in it, to provide a pool of magic points to cast the spell from. In-game terms treat anything enchanted with this spell as unbreakable.  Magic point stores take one hour per magic point stored in them to create.  The caster must fill the item with their magic points as part of the spell. The number of magic points put into the item at the time of casting becomes the maximum.  By default, when used, the stored magic points do not regenerate and when all used up the spell ends. If the caster spends one growth point while creating the store, it is reusable, and the caster can refill the store using their magic points.  If the item containing the store becomes damaged or destroyed, the magic points are released harmlessly into the surrounding area. "
    },
    {   
        "name": "Create Potion",
        "magnitude": 0,
        "variable":true,
        "tags": "Permanent",
        "type": "personal",
        "description": " Potions are liquids that store one or more Personal Magic spells.  The magnitude of the Create Potion spell needs to equal or exceed the total of the magnitude of the spells placed into the potion.  All potions are one use. They must be drunk in one swift gulp to work.  The potion automatically works and doesn’t incur a cost in magic points to the person who is drinking it.  If multiple spells are placed in the potion, they are all cast on the drinker when the potion is drunk.  Drinking the potion takes place on the drinker’s Athletics skill, if the timing is important such as when determining combat order.  The potion costs the enchanter magic points. They must know the spell at the magnitude enchanting at, with the magic points of the spell(s) placed into the potion.  There is an associated cost of 1 Gold Ducat per magnitude in materials, which includes the flask that contains the potion.  Potions take one hour per point of the magnitude of the spell(s) stored to create.  An airtight container must be used to store a potion, or it evaporates, losing one point of magnitude per week. "
    },
    {   
        "name": "Create Scroll",
        "magnitude": 0,
        "variable":true,
        "tags": "Permanent",
        "type": "personal",
        "description": " This spell allows the caster to create a written version of the spell for use later. Either to impart knowledge of the spell to a trainee or as a reference when casting the spell in the field.  The caster must be able to read and write in some form of written language, which is represented by having a Language skill of over 80%.  They must also pay for the special inks and scroll paper (1 Gold Ducat per point of magnitude).  The trainee must be able to read the language that the scroll uses. Once every three months they may study the scroll, which takes one day per point of spell, and then make a Language skill test. If successful, they spend the normal growth cost to learn the spell. If they roll a critical they half that cost, to the nearest whole unit. If they fumble, they can never learn the spell from that scroll, it is beyond their understanding.  To directly cast a spell from the scroll, the caster must be able to read the language the scroll uses. Then cast the spell as normal.  Casting is much slower than if the caster is casting the spell from memory. First, the caster reads the spell out loud and then harnesses and shapes the magical energies. Therefore, no matter what their normal casting skill, the spell takes an entire combat round to cast, and fires off at the end of the combat round.  In both cases, once learnt or cast, unless the original writer spends one growth point at the time of creation to make the scroll reusable, the ink fades, and the scroll crumbles to dust. "
    },
    {   
        "name": "Cushion Fall",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " The successful casting of this spell eliminates all falling damage for the recipient for the duration of the spell. "
    },
    {   
        "name": "Darkwall",
        "magnitude": 2,
        "variable": false,
        "tags": "Area 5m",
        "type": "personal",
        "description": " Light sources within a Darkwall area shed no light, and normal sight ceases to function. Other senses such as a bat’s sonar and night vision (see chapter 11 Creatures) function normally.  The caster may move the Darkwall 15 metres per combat round if they concentrate on the spell. "
    },
    {   
        "name": "Demoralise",
        "magnitude": 2,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " This spell creates doubt and uncertainty into the very heart and soul of the target. The target of this spell has all combat skills halved and may not cast offensive spells. If this spell takes effect before combat begins, the target will try to avoid fighting and will either run or surrender. The Fanaticism spell automatically cancels the effects of this spell, and vice versa. "
    },
    {
        "name": "Detect (Type)",
        "magnitude": 1,
        "variable": false,
        "tags": "Concentration",
        "type": "personal",
        "description": " This description covers a family of spells that all operate similarly, allowing the caster to locate the closest target of the spell within its range. Any Detect spell is stopped by a thick substance, such as metal, earth or stone, at least one metre thick. It is also blocked by Countermagic, though the caster will know the target is somewhere within range (though not its precise location) and that Countermagic is protecting it. The separate Detect spells are listed below, and each must be learned separately.  Detect Enemy: Gives the location of the nearest creatures that intend to harm the caster.  Detect Magic: Gives the location of the nearest magic item, magical creature or active spell.  Detect Species: Each Detect Species spell will give the location of the nearest creature of the specified species. Examples of this spell include Detect Goblin, Detect Rhino and Detect Elf.  Detect Substance: Each Detect Substance spell will give the location of the nearest substance of the specified type. Examples of this spell include Detect Coal, Detect Gold and Detect Wood. "
    },
    {   
        "name": "Dispel Magic",
        "magnitude": 0,
        "variable":true,
        "tags": "Instant",
        "type": "personal",
        "description": " This spell will attack and eliminate other spells. Dispel Magic will eliminate a combined magnitude of spells equal to its magnitude, starting with the most powerful affecting the target. If it fails to eliminate any spell (because the spell’s magnitude is too high), then its effects immediately end. Dispel Magic cannot partially dispel spells, so a target under the effects of a spell whose magnitude is higher than that of Dispel Magic will not have any spells currently affecting it eliminated. "
    },
    {   
        "name": "Disruption",
        "magnitude": 0,
        "variable":true,
        "tags": "Instant, Resist (Resilience)",
        "type": "personal",
        "description": " Disruption pulls a target’s body apart. On a failed Resilience skill test, the target will suffer 1D4 points of damage per point of magnitude, ignoring any armour points. "
    },
    {   
        "name": "Drive Out Spirit",
        "magnitude": 0,
        "variable":true,
        "tags": "Instant, Resist (Persistence)",
        "type": "personal",
        "description": " This spell excommunicates a spirit that is either covertly or dominantly, possessing a character or physical location. The spirit resists eviction from its host using its Persistence, with a penalty of -10% for every magnitude point of the spell. If the spirit fails the test, it goes back to the Spirit World.  "
    },
    {   
        "name": "Dull Weapon",
        "magnitude": 0,
        "variable":true,
        "tags": "",
        "type": "personal",
        "description": "spell works on any weapon. For every point of magnitude, it reduces the damage dealt by the target weapon by two points. This spell does not affect the damage inflicted by the damage bonus of the user."
    },
    {
        "name": "Enhance (Skill)",
        "magnitude": 0,
        "variable":true,
        "tags": "",
        "type": "personal",
        "description": "Like Detect (Type), this includes several different spells, each of which affects a different non-combat skill.  For each point of magnitude, the recipient gains +10% to any skill test using the Enhanced skill.  Alternatively, for each additional point of magnitude of the spell, the caster can affect one more target.  How the caster allocates this magnitude between bonuses and targets is up to the caster, providing each bonus are in multiples of 10%, and the total of bonuses equals the spells magnitude x 10%.  For example, Ethelred may have Enhance (Deception) 5.  He could cast it all on himself to give a whopping +50% to their Deception or could cast it on himself and an ally, giving himself +30% and their ally +20%. If in a larger group, he could even cast it on 5 allies, each of whom would gain +10% to their Deception skill.  The most common spells of this type are:  Enhance (Deception), often used by thieves.  Enhance (Trade), used by merchants.  Enhance (Influence), used by lawyers, con-artists and officers.  Enhance (Resilience), used by warriors.  Enhance (Persistence), used by magicians. "
    },
    {   
        "name": "Extinguish",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "personal",
        "description": " This spell instantly puts out fires. At magnitude 1 it can extinguish a flame, magnitude 2 a small fire, magnitude 3 a large fire and magnitude 4 will put out an inferno.  "
    },
    {   
        "name": "Fanaticism",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " The target of this spell will have close combat and unarmed combat skills increased by +20% but may not attempt  to  cast spells. Also, for the duration of the spell, the target has a +50% bonus to any Persistence test. The Demoralise spell and vice versa automatically cancel the effects of this spell. "
    },
    {   
        "name": "Farsight",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration",
        "type": "personal",
        "description": " Each point of this spell extends the caster’s field of vision by twenty metres as long as they maintain their concentration.  Although they can see small details at a distance, this spell does not let the caster see through walls or other obstructions. "
    },
    {   
        "name": "Firearrow",
        "magnitude": 2,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": " Casting this spell on a missile weapon will allow it to fire magical missiles of flame. When one of these missiles hits a target, it deals 1D10 points of magical fire damage. Since the Firearrow does magical damage, it affects creatures that are immune to normal damage. A target remains on fire once hit, taking 1D10 damage per round in subsequent rounds, until they spend a combat action putting out the flames or someone successfully casts Extinguish on them. A missile weapon under the effects of Firearrow cannot benefit from Multimissile or Speedart "
    },
    {   
        "name": "Fireblade",
        "magnitude": 4,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": " For the duration of the spell, the target weapon deals an additional 1D10 magical fire damage as well as its normal damage. One struck by the weapon remains on fire, taking 1D10 damage per round in subsequent rounds, until they spend a combat action putting out the flames or someone successfully casts Extinguish on them. A weapon under the effects of Fireblade cannot benefit from Weapon Enhance. Since Fireblade does magical damage, it damages creatures immune to normal damage.” "
    },
    {   
        "name": "Fist of Gold",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": "This spell creates a minor illusion of 1D10 Gold Ducats per level of magnitude that persists for the duration of the spell."
    },
    {   
        "name": "Fist of the Wind",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "personal",
        "description": " Each point of magnitude allows the caster to make one extra unarmed attack. These attacks happen in a blur of motion as soon as the spell fires (i.e. when the spell takes effect), instead of the normal combat order that the character’s attacks happen on. An attack roll is made separately for each attack. "
    },
    {   
        "name": "Frostbite",
        "magnitude": 2,
        "variable": false,
        "tags": "Instant, Resist (Resilience)",
        "type": "personal",
        "description": " This attack spell allows the caster to freeze their opponent, dealing 1D8 points of damage, ignoring any armour points. Magical protection that protects against cold damage can block this effect, but mundane items (such as severe weather gear) are ineffective. "
    },
    {   
        "name": "Glue",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch, Area",
        "type": "personal",
        "description": " This spell covers an area of one centimetre square for each magnitude with extremely sticky glue. If a creature steps on the glue, it must make an Athletics roll vs. the magnitude x 10% to avoid being stuck for one round. On subsequent rounds, it must make the same roll to break free. This spell can also make conventional repairs, for example repairing a broken sword, with magnitude x 10% being the chance that the item won’t break again if used in circumstances that would cause it to. "
    },
    {   
        "name": "Harden",
        "magnitude": 1,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell makes a target item unbreakable for the duration of the spell.  Therefore, weapons with this spell cast on them will not break when a fumble occurs in combat, and it allows items that are normally too brittle to be wielded in combat to be used as improvised weapons. "
    },
    {   
        "name": "Heal",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Touch",
        "type": "personal",
        "description": " For every point of the magnitude of this spell, the caster can repair one hit point to damage to either themselves or another target.  Mortal Wounds. A magnitude 6 or higher Heal spell will heal a mortal wound (any damage that takes the character to zero hit point or less) instantly, restoring them to one hit point.  Curing Disease or Poison. At magnitude 5 or higher , a Heal spell will also cure any single poison or disease affecting the target. Lost hit points are restored normally, but any other damage caused by the poison or disease, such as characteristic loss, will not be restored.  This spell can not be used to bring characters who are dead back to life. "
    },
    {
        "name": "Hinder (Skill)",
        "magnitude": 0,
        "variable": true,
        "tags": "Ranged, Resist (Persistence)",
        "type": "personal",
        "description": " Like Enhance (Skill), this is several different spells, each of which affects a different skill.  For each point of the magnitude of the spell, the target gains a -10% penalty to the next skill test using the affected skill.  Alternatively, for each additional point of magnitude of the spell, the caster can affect one more target.  The bonuses and targets are allocated as necessary, provided each penalty is in multiples of 10%, and the total of bonuses equals the spell’s magnitude x 10%.  If used in this way, each target is affected separately; if one target succeeds in resisting the spell, other targets may fail and be affected.  The most common spells of this type are as follows.  Hinder (Perception), often used by thieves. Hinder (Trade), used by the nastier traders. Hinder (Persistence), used by magicians against enemy spellcasters before casting spells upon them. "
    },
    {   
        "name": "Ignite",
        "magnitude": 1,
        "variable": false,
        "tags": "Instant",
        "type": "personal",
        "description": " Ignite will set fire to anything flammable within range, creating a flame. If the target is attached to a living being (such as hair, fur or clothes), then the spell gains the Resist (Resilience) trait. "
    },
    {   
        "name": "Ironmind",
        "magnitude": 3,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " This spell hardens the resolve of the recipient for its duration. The spell adds 20 % to all Persistence tests against magical attacks to the mind (e.g. Fear, Befuddle, etc.) or opposed tests vs. Influence. "
    },
    {   
        "name": "Leap",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch, Resist (Dodge)",
        "type": "personal",
        "description": " This spell causes the target to leap 2m up in the air for each point of magnitude. If cast upon an unwilling target, make a resistance roll and roll for falling damage on failure. "
    },
    {   
        "name": "Levitating Disc",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration, Area 1 per Magnitude",
        "type": "personal",
        "description": " This spell creates an invisible disc,         1m in diameter for each point of magnitude.  It can carry weight equivalent to one person and their belongings per point of magnitude and moves at twice the magnitude in metres per combat round.  For example, a Levitating Disc with magnitude 3 can carry 3 people, is 3m in diameter, and moves at a rate of 6m per combat round. "
    },
    {   
        "name": "Light",
        "magnitude": 1,
        "variable": false,
        "tags": "Area 10",
        "type": "personal",
        "description": " When cast on a physical object (including living material), this spell causes the object to shed light across the area of effect. The spell illuminates only the specified area – everything outside the area of effect is not lit. This spell creates raw light, not a flame. "
    },
    {   
        "name": "Lock",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch, Permanent",
        "type": "personal",
        "description": " This spell gives an item a resistance to being opened equal to the spell’s magnitude x 10%. The item must have a lock, such as might be found on a door or a chest, as a focus for the spell. Once the lock has been forced/picked, the spell ends. "
    },
    {   
        "name": "Mindspeech",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": "This spell can affect one target for every point of magnitude. It allows telepathy between the caster and any target, though targets will not have telepathy with one another. The words transmitted by telepathy must be whispered and will be heard directly in the head of the recipient, in the same language in which the caster spoke it."
    },
    {   
        "name": "Mobility",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": "For every point of the magnitude of this spell, the target’s movement rate increases by an additional two meters."
    },
    {   
        "name": "Multimissile",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " If the caster succeeds in casting the spell, a missile weapon holds the spell for ten minutes. A missile under the effects of Multimissile cannot benefit from Firearrow or Speedart.  When the Multimissile-enchanted missile is fired or thrown, one additional magical missile fires for every point of magnitude. Each magic missile’s attack is separate, and each does the same damage as the original (though they will not benefit from the character’s damage modifier). Magical missiles created through Multimissile will not cause critical hits, though the original missile can. Magical missiles created through Multimissile will affect creatures that can only be hurt by magic. "
    },
    {   
        "name": "Personal Insight",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " This spell gives the caster or recipient a straightforward insight into a small question directly relevant to them, in the form of an internal intuition.  For example the question “Why can I not harm the creature?” would get the answer “Because your sword is not enchanted”, while “Why can we not harm the creature?” would not get an answer. "
    },
    {   
        "name": "Pierce",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell affects any weapon with a blade or point. For every point of magnitude, it ignores one armour point when it strikes armour. Pierce can bypass magical armour as easily as normal armour. "
    },
    {   
        "name": "Protection",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": "For every point of the magnitude of this spell, the armour of the target gains one additional armour point."
    },
    {
        "name": "Push/Pull",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Resist (Resilience)",
        "type": "personal",
        "description": " This spell allows the caster to move an item of up to 3 SIZ or ENC per point of magnitude either towards or away from them in a straight line as if pushed suddenly from one direction or the other. The item does not move with significant enough force to inflict damage unless it is naturally damaging (a bottle of acid, for instance). The caster has no control over the distance pushed or pulled, as this depends on the location of the item and/or the surface on which it rests. Living creatures targeted by this spell are allowed a Resilience roll to resist. "
    },
    {   
        "name": "Read Emotion",
        "magnitude": 1,
        "variable": false,
        "tags": "Instant, Resist (Persistence)",
        "type": "personal",
        "description": " This spell, when cast, tells you what the true emotional state of the target is if they fail a Persistence roll. "
    },
    {
        "name": "Resist (Element)",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": " spell increases resistance against hostile effects, magic or otherwise, from a given element (Air/Darkness/Earth/Fire/Water) by 10% per point of magnitude and subtracts 2 points of damage from that element per point of magnitude."
    },
    {   
        "name": "Restore Energy",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Touch",
        "type": "personal",
        "description": " Each point of this spell’s magnitude instantly removes one fatigue level from the recipient. "
    },
    {   
        "name": "Sap Energy",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Touch, Resist (Resilience)",
        "type": "personal",
        "description": " Each point of this spell’s magnitude adds one fatigue level from the target upon a failed Resilience roll. "
    },
    {   
        "name": "Scare",
        "magnitude": 2,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "personal",
        "description": " On a failed resistance roll, the target is scared for 1D6 rounds. Scared targets must withdraw from combat with the caster for the duration of the spell, and move as quickly as they are able, directly away from the caster. "
    },
    {   
        "name": "Second Sight",
        "magnitude": 3,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " Second Sight allows the caster to gauge the POW of every creature and magic item within the range. Anything that prevents normal vision stops the spell. The caster will know if each aura created by the illuminated POW is less than their POW, within three points of their POW, or greater than their POW.  Additionally, Second Sight provides a +20% bonus on Perception tests to notice hidden magical items or hiding people or creatures. Second Sight will also reveal invisible entities, though only a hazy image will show (treat such targets as partially obscured). "
    },
    {   
        "name": "Slip",
        "magnitude": 1,
        "variable": false,
        "tags": "Resist (Dodge)",
        "type": "personal",
        "description": " The caster makes the ground under the target’s feet as slippery as black sheet ice.  The target must make a Dodge roll or fall over prone. "
    },
    {   
        "name": "Slow",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Resilience)",
        "type": "personal",
        "description": "For every point of the magnitude of this spell, decrease target’s movement rate by 2m. A target’s movement may not go below one metre through use of this spell."
    },
    {   
        "name": "Speedart",
        "magnitude": 2,
        "variable": false,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell is cast on a missile weapon and triggers when fired. It gives a +20% to Ranged Combat and +3 damage while using the weapon. A missile weapon under the effects of Speedart cannot benefit from Firearrow or Multimissile. "
    },
    {   
        "name": "Spirit Shield",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": " spell forms a magical barrier that protects the caster from magic point loss as the result of a successful attack during spirit combat (see “Spirit Combat” ). Each point of magnitude reduces the damage done by an attacking spirit by one point. "
    },
    {   
        "name": "Strength",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " For every point of the magnitude of this spell, the target’s damage increases by +1 and strength-based athletics tests are +10% per magnitude.  Note, the increased damage is not magical damage. "
    },
    {   
        "name": "Talk to Animal",
        "magnitude": 3,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " With this spell, the recipient can talk to any beast within ten metres of them. This communication is verbal; therefore, the recipient must be able to speak and be heard by the target animal. "
    },
    {   
        "name": "Tongues",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "personal",
        "description": " This spell allows the recipient to speak another language perfectly for its duration. "
    },
    {   
        "name": "Truth Seeker",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "personal",
        "description": " This spell grants the caster a +10% bonus per point of magnitude to their next skill test they make to discover lies, secrets or hidden objects.  It does not stack with any other spell-effect bonuses. "
    },
    {   
        "name": "Unlock",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch, Instant",
        "type": "personal",
        "description": " This spell has a chance of opening a lock equal to the spell’s magnitude x 20%, minus any modifiers due to the intricacy of the lock. If cast on a lock that has had a Lock spell cast on it, the test is an opposed test vs. the magnitude x 20% of the Lock spell. "
    },
    {   
        "name": "Vigour",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " For every point of the magnitude of this spell, the target’s hit points increase by +2. A target cannot have its hit points increased in this way to more than twice its original score.  Damage is taken from the ‘magical’ hit points first, so when the spell dissipates the inflicted damage taken on the magical hit points disappears too "
    },
    {   
        "name": "Vomit",
        "magnitude": 0,
        "variable": true,
        "tags": "Ranged, Resist (Resilience)",
        "type": "personal",
        "description": " This spell disables its victim for 1 round per point of magnitude, due to uncontrollable vomiting. On a fumbled Resilience roll, the victim also takes 1D6 hit points damage. "
    },
    {
        "name": "Walk on (Element)",
        "magnitude": 3,
        "variable": true,
        "tags": "",
        "type": "personal",
        "description": " This spell allows the recipient to walk on the specified element (Air/Darkness/Earth/Fire/Water) without sinking or taking any harm for the spell’s duration. With this spell for the appropriate element, the caster can walk across lava, quicksand, water, or even through the air. Each additional point of magnitude increases the duration of the spell by 1 minute. "
    },
    {   
        "name": "Water Breath",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " This spell allows the target to breathe water for the duration of the spell. For every point of magnitude, one additional person can breathe water, or the duration is increased by one minute. Water Breath does not affect the target’s ability to breathe air. "
    },
    {   
        "name": "Weapon Enhance",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "personal",
        "description": " Cast this spell on any close combat weapon or any unarmed attack. For every point of magnitude, it increases the chance to hit with the weapon by +10% and deals one point of extra damage. This extra damage is magical and will affect creatures that can only be hurt by magic. The weapon’s base damage remains non-magical. A weapon under the effects of this spell cannot benefit from Fireblade."
    },
    {
        "name": "Absorption",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15, Progressive, Touch",
        "type": "divine",
        "description": " This spell absorbs incoming spells aimed at the target or their equipment, converting their magical energy into magic points which are then available to the target. Once cast on a subject, Absorption will attempt to absorb the effects of any spells cast at the target. It will not have any effect on spells that are already affecting a character. The effects of Absorption depend on the relative magnitude of both itself and the incoming spell – see the Absorption Results table for more details. Any spell absorbed by this spell is cancelled and does not affect the target.  Absorption Results  Incoming Spell’s Magnitude is  Effect Equal to or weaker than Absorption’s magnitude.  Incoming spell absorbed and Absorption remains. 1 or more points stronger than Absorption’s magnitude.  Absorption eliminated and incoming spell takes effect. A character may not accumulate more magic points than his POW while Absorption is in effect – excess magic points garnered through Absorption simply vanish. Absorption is incompatible with Reflection, Shield and Spirit Block. "
    },
    {
        "name": "Berserk",
        "magnitude": 2,
        "variable": false,
        "tags": "Duration 15, Touch",
        "type": "divine",
        "description": " The recipient of this spell is overcome with blood-lust, causing them to disregard their safety and loyalties but imbuing them with tremendous stamina and combat ability.  The recipient will automatically succeed any Resilience test for the duration of the spell. The recipient also automatically succeeds at any Fatigue tests and cannot be rendered unconscious. The Close Combat skills of the recipient receive a +50% bonus for the spell’s duration.  However, the subject may not Parry, Dodge or cast any magic spells while under the influence of Berserk. Normally, the recipient remains in the Berserk state for the entire 15-minute duration of the spell. Still, Referees may allow a Berserk character to shake off the effects with a Persistence test modified by -50%. At the end of the spell, the recipient immediately becomes Fatigued.  Berserk does not combine with Fanaticism – Berserk will always take precedence in such cases. "
    },
    {
        "name": "Block Fertility",
        "magnitude": 3,
        "variable": false,
        "tags": "Permanent",
        "type": "divine",
        "description": " While this spell is in place, the recipient is unable to conceive. Depending on the view of the recipient, this is a blessing or a curse. The spell can be dispelled by the caster whenever they want. Otherwise, the effects of the spell are permanent. "
    },
    {
        "name": "Breathe Water",
        "magnitude": 2,
        "variable": false,
        "tags": "Duration 15, Touch",
        "type": "divine",
        "description": " This spell allows an air-breathing creature to breathe water for the spell’s duration (the subject will still be able to breathe air as well). It may also be used upon a water-breathing creature to allow it to breathe air. "
    },
    {
        "name": "Call (Elemental)",
        "magnitude": 1,
        "variable": true,
        "tags": "Permanent, Progressive",
        "type": "divine",
        "description": " This spell summons and binds to the service of the caster an elemental from another plane of existence, of size dependent on the magnitude of the spell.  1 = Small,2= Medium,3= Large,4=Huge  For more details on Elementals, see Chapter 11 ‘Creatures’.  The elemental stays under the control of the Priest until killed, or the Call spell is dispelled.  To be successfully cast, the spell requires an equal volume of the source material for the elemental. For example, before a successful summoning, a Large Undine (Water elemental) requires a pool of water of at least 50m3. "
    },
    {
        "name": "Call (Undead)",
        "magnitude": 1,
        "variable": true,
        "tags": "Permanent, Progressive",
        "type": "divine",
        "description": " This spell reanimates a dead human corpse and turns it into an undead creature, of a type determined by the magnitude of the spell.  1 = Skeleton, 2 = Zombie, 5= Ghoul, 8= Vampire  The undead creature stays under the control of the Priest until killed. "
    },
    {
        "name": "Consecrate",
        "magnitude": 1,
        "variable": true,
        "tags": "Area Special, Common, Permanent, Progressive",
        "type": "divine",
        "description": " This spell is as much a part of a temple’s foundation as is its cornerstone. It creates a sphere with a radius of ten metres per point of magnitude. The consecrated sphere is sacred to the caster’s god. Consecrate by itself does nothing to keep outsiders at bay, but the caster of the spell will know if a spell, spirit or someone who is not a lay member of his religion, crosses the boundaries of the Consecrate spell. "
    },
    {
        "name": "Create Blessed Items",
        "magnitude": 1,
        "variable": true,
        "tags": "Area Special, Common, Permanent, Progressive",
        "type": "divine",
        "description": " This spell allows the caster to create items which store Divine Magic spell(s) that are blessed by a Priest with power from the religion’s deity.  Only Priests and High Priests can create blessed items.  The enchanter forgets the spell(s) they blessed the item with.  The wielder of the item can cast the spell(s) that has blessed the item but doing so discharges the item’s power. After discharging it, to recharge the item, it is taken to a temple of the religion that created it. This recharge takes as many hours as the magnitude of the spell. If the magnitude of the spell is higher than two, the consecrating team must have at least one Priest.  The wielder must be a member of either the religion that created the blessed item or an allied religion.  Blessed items become protected by the religion’s deity and are unbreakable by normal non-magical means. "
    },
    {
        "name": "Create Idol",
        "magnitude": 4,
        "variable": true,
        "tags": "Common, Permanent",
        "type": "divine",
        "description": " This spell requires an image of the caster’s god worth 100 GD, specially consecrated by a Priest reading from the sacred texts of the deity telling the tales and myths. The idol stores the god’s spells and can be used by Priest and Initiates to regain spells. It can be used by Lay Members to receive ‘lessons’, via visions, upon touching the idol.  Such visions will increase the Religion skill of a Lay Member by 1D10% when exposed to them. "
    },
    {
        "name": "Create the Crystal Ship",
        "magnitude": 4,
        "variable": true,
        "tags": "duration the length of the voyage",
        "type": "divine",
        "description": " From out of the air coalesces the Crystal Ship, a magical vessel that sails through the air to a single destination preordained by the caster. The caster need never have been there, but the caster’s deity must know of it. The ship is about the size of a merchant cog and fitted with no weapons.  Although the ship heads steadily towards the destination, at a rate of 100 km a day, the fine manoeuvring of the ship is managed by the thoughts of the caster. "
    },
    {
        "name": "Dismiss Magic",
        "magnitude": 1,
        "variable": true,
        "tags": "Common, Instant, Progressive, Ranged",
        "type": "divine",
        "description": " Dismiss Magic is used either against a general target or a specific spell and as a reaction when attacked with magic.  When used against a general target, Dismiss Magic will eliminate a combined magnitude of spells equal to its magnitude, starting with the most powerful affecting the target. If it fails to eliminate any spell (because the spell’s magnitude is too high), then its effects immediately end and it will dispel no more spells.  The caster can also target Dismiss Magic against a single specific spell. It will work successfully as long as Dismiss Magic’s magnitude equals or exceeds the target spell’s magnitude.  When used as a defensive reaction against incoming magic, as long as the attacking caster is within Dismiss Magic’s range, a successful Dismiss Magic disrupts the other spell and nullifies it. "
    },
    {
        "name": "Divination",
        "magnitude": 1,
        "variable": true,
        "tags": "Common, Instant, Progressive",
        "type": "divine",
        "description": " For each point of the magnitude of this spell, the caster can ask one question of their deity, which they must answer to the best of their ability.  A deity can only answer questions it knows about, and that falls within its sphere of power. For example, a Mountain God will know exactly what is going on its slopes at any given time but will be completely ignorant about the ocean.  Gods will also commonly ask for a sacrifice of an animal or precious object worth one gold ducat per question asked. Particularly cruel and bloodthirsty deities will demand blood sacrifices of sentient beings.  Note, a weaker and less direct form of divination can be obtained at temples and shrines, without use of this spell. See Asking the Gods above. "
    },
    {
        "name": "Divine Heal",
        "magnitude": 2,
        "variable": false,
        "tags": "Instant, Touch",
        "type": "divine",
        "description": " This powerful spell instantly heals any lost hit points, even if the character is mortally wounded, back to their full total. It also cures any natural disease, i.e. one not caused by a spirit; and any deadly poison is purged instantly from the character. Any damage or effects caused by it are removed. "
    },
    {
        "name": "Enhance Fertility",
        "magnitude": 3,
        "variable": false,
        "tags": "Permanent",
        "type": "divine",
        "description": " This spell makes any one creature more fertile than normal. If it is an animal that has multiple offspring, then it doubles the number. For creatures who usually have singular births, it guarantees the conception and birth of the offspring.  This spell negates the effects of any “Block Fertility” spell. "
    },
    {
        "name": "Enhance Unit",
        "magnitude": 3,
        "variable": false,
        "tags": "Duration 6 hours",
        "type": "divine",
        "description": " For the duration of this spell, a troop of up to thirty soldiers gain +1D6 damage.  Also, they cannot be routed or affected by any mind control magic (such as Befuddle). "
    },
    {
        "name": "Excommunicate",
        "magnitude": 5,
        "variable": false,
        "tags": "Common, Permanent, Resist (Persistence)",
        "type": "divine",
        "description": " This spell severs the mystical link an Initiate enjoys with their god, causing the target of the spell to immediately and permanently lose all Divine Magic from the caster’s religion. The target will never again be able to learn or use Divine Magic spells from the religion. However, they will still be able to use their Religion skill for purely academic purposes.  A Priest of the same religion as the target casts the spell in a ceremony that takes one hour to cast. The Initiate need not be present. "
    },
    {
        "name": "Exorcism",
        "magnitude": 3,
        "variable": false,
        "tags": "Common, Concentration",
        "type": "divine",
        "description": " A Divine Magic caster can draw out a spirit currently possessing a mortal being by using this spell. Whether the possession is dominant or covert is immaterial.  This spell forces a possessing spirit into Spirit Combat. The caster uses his Religion (Own) as the attacking skill in the opposed contest, as this represents the strength of their faith. If the caster is successful in defeating the spirit, it is cast out of the victim and flees. If the caster fails, the spirit remains in the possessed victim. "
    },
    {
        "name": "Extension",
        "magnitude": 1,
        "variable": true,
        "tags": "Common, Duration Special, Progressive",
        "type": "divine",
        "description": " This spell lengthens the duration of any Divine Magic spell with the Duration trait. Extension, and the spell it is extending, are cast simultaneously by the caster – this is an exception to the normal rule that only one Divine Magic spell is cast during a combat round.  Each point of magnitude of the Extension spell doubles the target spell’s duration. Thus, a magnitude 1 Extension increases Breathe Water’s Duration to 30 minutes, a magnitude 2 increases it to one hour, magnitude 3 increases it to two hours, magnitude 4 increases it to four hours, and so on. "
    },
    {
        "name": "Fear",
        "magnitude": 1,
        "variable": false,
        "tags": "Instant, Ranged, Resist (Persistence)",
        "type": "divine",
        "description": " This spell causes the target to become overwhelmed with fear. Fear does not affect unconscious targets, those without an INT characteristic or those that are currently under the influence of a Fear spell.  Fear Effects  Target’s Persistence Test  Effect Target fumbles Persistence test  The victim instantly loses half original hit points damage, as its heart falters. Falls into a coma for 1D12 hours. Target fails Persistence test  The victim flees in screaming terror for combat rounds equal to 20 minus its POW (minimum of one combat round). The victim will not engage in combat unless forced to and will use the Run combat action whenever possible (unless a faster mode of egress is available). Target succeeds Persistence test  The victim is shaken and disturbed, suffering a –20% penalty to all skill tests for combat rounds equal to 20 minus its POW (minimum of one combat round). Target critically succeeds Persistence test  The victim is unaffected by the spell and cannot be affected by further Fear spells for combat rounds equal to its POW."
    },
    {
        "name": "Find (Type)",
        "magnitude": 1,
        "variable": false,
        "tags": "Duration 15, Ranged",
        "type": "divine",
        "description": " This spell is several spells, though they all operate in a similar fashion, which allows the caster to locate the closest target of the spell within its range. This effect is stopped by a thick substance such as metal, earth or stone, if it is at least one metre thick. It is also blocked by Absorption, though the caster will know the target is somewhere within range (though not its precise location). The separate Find spells are listed below.  Unlike the Personal Magic Detect spells, the Find spells do not require concentration on the part of the caster – they simply function and alert them to the presence of whatever they locate.  Find Enemy: Gives the location of one creature who intends to harm the caster.  Find Magic: Gives the location of the nearest magic item, magical creature, or active spell.  Find (Species): Each Find Species spell will give the location of the nearest creature of the specified species. Examples of this spell include Find Goblin, Find Dwarf and Find Horse.  Find Substance: Each Find Substance spell will give the location of the nearest substance of the specified type. Examples of this spell include Find Coal, Find Gold and Find Wood.  The Referee should provide the rough power of the detected subject (e.g. ‘weak magic’ or ‘rich gold lode’). "
    },
    {
        "name": "Illusion",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15, Progressive, Ranged",
        "type": "divine",
        "description": " This spell creates an illusion based on all five senses. The illusion will seem real and solid unless the person looking at it succeeds in a Perception test, which is subject to a modifier based on the magnitude of the spell. If the viewer succeeds in a Perception test, and the illusion could usually cause damage if believed in, it can no longer cause damage to that character. As soon as a viewer disbelieves the illusion, it becomes insubstantial and ghost-like to them.  The magnitude also governs the Size of the illusion.  A magnitude 1 Illusion can quite happily create small household items, say a fake table and chair, but would not be able to create an illusion of a fire-breathing Dragon.  Illusions Magnitude  Modifier to Perception test  Type of illusion possible 1  +50 %  Not capable of motion or causing damage. Slightly fuzzy and unreal round the edges. Limit of SIZ 10.,2  +25 %  Some minor discrepancies. Capable of motion, but not of damage. Limit of SIZ 15. 3  0  Capable of motion and causing damage. Limit of SIZ 20. 4  -25 %  Capable of motion and causing damage. Limit of SIZ 30. 5  -50 %  Indistinguishable from the real thing, capable of motion and damage. Limit of SIZ 40. +1  -50%  +10 SIZ per magnitude."
    },
    {
        "name": "Invisibility",
        "magnitude": 4,
        "variable": false,
        "tags": "Concentration, Touch, Personal",
        "type": "divine",
        "description": " For the duration of the spell, the recipient is entirely invisible to sight.  They can still be heard, felt or smelled, with a -20% to Perception tests. Also, if the caster loses concentration, or the recipient casts a spell or makes an attack, the spell ends. The recipient also becomes visible immediately after the spell ends, so even if the caster immediately casts another Invisibility spell, there will be a delay between castings where the recipient is visible. "
    },
    {
        "name": "Jigsaw",
        "magnitude": 4,
        "variable": false,
        "tags": "Duration 6 Hours",
        "type": "divine",
        "description": " This spell causes the target to fall to pieces upon a failed Persistence roll.  The victim will still be alive but will not require food or water during the time the spell is in operation. When the spell ends, due to being dispelled or running out of duration, the victim will die unless painstakingly put back together beforehand. "
    },
    {
        "name": "Lightning Strike",
        "magnitude": 1,
        "variable": true,
        "tags": "Instant, Progressive, Ranged, Resist (Dodge)",
        "type": "divine",
        "description": " This spell causes a sizzling bolt of lightning to streak from the hand of the caster toward the target. If the bolt hits, each point of magnitude of the spell will cause 1D6 damage. Armour Points are not effective against this damage, and it counts as both magical and electrical damage. "
    },
    {
        "name": "Madness",
        "magnitude": 1,
        "variable": false,
        "tags": "Instant, Ranged, Resist (Persistence, see below)",
        "type": "divine",
        "description": " This spell causes the target to lose contact with reality and become a gibbering loon. Madness does not affect unconscious targets, those without an INT Characteristic or those that are already under the effect of a Madness spell.  Madness Effects  Target’s Persistence Test  Effect Target fumbles Persistence test  Victim instantly loses 1D4 INT permanently and lapses into a catatonic state for minutes equal to 20 minus its POW (minimum of one combat round). Target fails Persistence test   Victim gibbers and raves uncontrollably for combat rounds equal to 20 minus its POW (minimum of one combat round).     The victim will perform random combat actions during this period.     Roll 1D6.  Move to close combat attack a random target.  Run in a random direction (Roll 1D12 as clock face to determine direction).  Cast a spell at a random target.  Use ranged attack against a random target.  Shout at a random target.  Change stance.  Target succeeds Persistence test  The victim is shaken and disturbed, suffering a –20% penalty to all skill tests for combat rounds equal to 20 minus its POW (minimum of one combat round). Target critically succeeds Persistence test  The victim is unaffected by the spell and cannot be affected by further Madness spells for combat rounds equal to its POW.  "
    },
    {
        "name": "Mindblast",
        "magnitude": 1,
        "variable": true,
        "tags": "Instant, Progressive, Ranged, Resist (Persistence)",
        "type": "divine",
        "description": " This spell applies a penalty to the victim’s INT equal to the magnitude of the spell. The effect lasts days equal to the Caster’s current CHA. "
    },
    {
        "name": "Mindlink",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15, Progressive, Ranged",
        "type": "divine",
        "description": " This spell allows the transmission of conscious thoughts, spell knowledge, runes and magic points between participants.  Additional points of magnitude allow multiple sets of people to be linked together, either creating several separate pairs of Mindlinked people or making the Caster the central hub of a small Mindlink network. In the second case, only the ‘central’ character is linked directly to other participants.  Mindlink must be cast upon all participants at the same time and is limited to consenting participants. Any participant in a Mindlink may use the spell knowledge and magic points of others they linked to without consent.  Participants in a Mindlink have a special vulnerability to INT, POW, CHA and morale-affecting spells. Such a spell cast against any member of a Mindlink will affect all those connected, though all participants are entitled to defend themselves individually.  Although participants in a Mindlink share magic points and conscious thought, they remain their own entity. Mindlink does not include hidden thoughts, memories, unconscious urges or permanent spell knowledge. A Mindlink participant may cast a spell using one of those the other participants have, but only if they have the necessary spell casting skill – Mindlink does not allow sharing of skills.  Any participant may sever their connection to the Mindlink as a combat action. If any participant in Mindlink leaves the spell’s range, that participant has left the Mindlink. "
    },
    {
        "name": "Miraculous Item",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 1 hour, Progressive",
        "type": "divine",
        "description": " This spell allows the Caster to create items literally from nowhere. The size of the item depends upon the magnitude of the spell. Magnitude vs. Size of Miraculous Item  Magnitude  Size of item 1  Small items. Such as pots, plates, knives, and a defaced detail on a stone fresco, etc.,2  Medium. Large containers such as wine amphorae, target shields, long swords, human-sized armour, a missing arm on a broken statue. 3  Large. Tower shields, broken doors, a missing masonry feature such as a column. 4  Huge. Giant armour, ruined houses, shattered towers. 5  Enormous. The broken parts of a walking castle, the ruined walls of a city.    Such items are always of the finest quality and do not break under any circumstance.  For the cost of the magnitude in growth points, the item can last permanently.  Otherwise, it disappears after one hour. "
    },
    {
        "name": "Mythic Journey",
        "magnitude": 4,
        "variable": false,
        "tags": "Common, Duration 1 Day",
        "type": "divine",
        "description": " This spell opens a gate to a place in the Houses of the Holy associated most closely with the worshipper’s deity or pantheon. The worshipper may take any number of companions with them but must be aware that if they are not acceptable to the residents of the place they are going to, they may be attacked or expelled. Also, the companions must have some strong spiritual connection with the caster, such as being members of the same religion or good friends.  Time works differently in the worlds of mythology, perhaps no longer being a workable concept, but for where time is important, in the Real World, the spell’s duration is the amount of time that the caster and their companions are away in the Mythic World.  For example, Ethelred uses this spell to travel to the Palace of the Celestial Emperor to ask him in person for help in the Real World against the invading Burning Horde. Once his business has finished there, he decides to stay and linger enjoying the delights of the Divine Court. Months pass, or so it seems, until Ethelred loses track of how many Imperial Banquets he has enjoyed. One morning, instead of waking up in his crystal room with its bed made of satin sheets, in the palace, he awakes in the Real World Temple of the Celestial Emperor in one of the initiates beds, a rather rude affair with rougher linen sheets. He asks the passing novice how long he has been away and finds out that it’s only a day after he passed through the gate when he cast the spell.  It is also possible to get trapped in the Mythic World (for example, through getting captured by magical powers) in which case the character does not return form the Mythic World until they escape whatever power that has them in their thrall.  For example, Nykos the Squire accompanies Ethelred to the Palace of the Celestial Emperor. While his master is conducting his business, Nykos meets one of the Imperial Handmaidens and becomes beguiled by her charms. When Ethelred returns to the real world, after months of pleasure, Nykos remains still under the spell of the Imperial Handmaiden. "
    },
    {
        "name": "Mischief",
        "magnitude": 2,
        "variable": false,
        "tags": "Touch, Resist (Persistence)",
        "type": "divine",
        "description": " Mischief is a minor trickster’s spell which afflicts its target with a small irritating curse.  Roll 1D20 on the following list for a result, which stays in place for the duration of the spell.  Type of Mischief  Roll 1D20  Result 1  Clothes disappear. 2  Hair goes green. 3  Hair drops out. 4  Grows beard regardless of sex. 5  The target’s weapon becomes a bunch of flowers. 6  Armour becomes the festive dress of the opposite sex. 7  Feet become duck feet. 8  Head becomes that of a domestic animal (cow, pig, sheep, etc.). 9  Victim smells of excrement (-20% to any Deception or Influence rolls). 10  Wobbles uncontrollably, -20% to attacks, Athletics and any other roll involving dexterity. 11  The victim can only speak gibberish. 12  The victim says the most inappropriate things at the most socially awkward times. -20% to any Influence rolls. 13  The victim falls asleep for 1D6 rounds on failed Persistence roll whenever they enter combat. 14  Makes loud flatulent noises whenever they move; -25 to any Deception rolls. 15  The victim is compelled to tell the truth at all times. 16  No one ever takes the character seriously. Always has to make an Influence roll at -20% to convince others. 17  Turns into a dog. 18  Arms turn to rubber, unable to hold anything. 19  The victim becomes short, half SIZ. 20  Roll twice. "
    },
    {
        "name": "Puppet",
        "magnitude": 3,
        "variable": true,
        "tags": "Concentration, Duration 6 hours, Resist (Persistence)",
        "type": "divine",
        "description": " The caster uses this spell to enchant a puppet, which is the focus of the spell and the stand-in for the victim. The victim can use Persistence to resist the spell, and if they fail, their actions are controlled via the puppet by the caster, for the duration of the spell. The victim is aware of not being in control of their body but is powerless to stop it. The exception to this rule is when the victim’s life or that of a friend is in danger because of the Puppeteer’s commands. Then the victim is allowed another Persistence roll, and, if successful, break free of the spell’s control. "
    },
    {
        "name": "Purity (Religion/Creed)",
        "magnitude": 2,
        "variable": true,
        "tags": "Touch",
        "type": "divine",
        "description": " This spell removes a perceived sin according to a particular religion. If the caster is out of favour because of said sin, all is forgotten and forgiven. "
    },
    {
        "name": "Quicksand",
        "magnitude": 2,
        "variable": false,
        "tags": "Area",
        "type": "divine",
        "description": " This spell creates a patch of quicksand 10m square. The earth in the area becomes boggy and saturated with water. On a failed Persistence roll, any character standing on the patch will sink into the earth, at a rate of 1 metre a combat round, The quicksand holds the victim firmly and only by dispelling the magic can they be rescued.  Once the duration of the spell is over, the victim, if not on the surface, is buried under the now solid earth (see Suffocation rules). "
    },
    {
        "name": "Radiant Appearance",
        "magnitude": 2,
        "variable": false,
        "tags": "Duration 1 Day",
        "type": "divine",
        "description": " The recipient of this spell glows with light and power. They gain +50% to any Influence rolls for the duration of the spell.  Also, any light-hating creatures suffer -20% when attacking the recipient. "
    },
    {
        "name": "Repair and Replace",
        "magnitude": 1,
        "variable": true,
        "tags": "Instant, Progressive",
        "type": "divine",
        "description": " This spell repairs broken crafted items. It also replaces missing parts of an item.  The size of the item depends on the magnitude of the spell.  Size of Item vs Magnitude  Magnitude  Size of Item 1  Small items, such as pots, plates, knives, a defaced detail on a stone fresco, etc.,2  Medium. Large containers, such as wine amphorae, target shields, long swords, human-sized armour, a missing arm on a broken statue. 3  Large. Tower shields, broken doors, a missing masonry feature such as a column. 4  Huge. Giant armour, ruined houses, shattered towers. 5  Enormous. The broken parts of a walking castle, the ruined walls of a city."
    },
    {
        "name": "Reflection",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15, Progressive, Ranged",
        "type": "divine",
        "description": " This spell reflects incoming spells aimed at the target or his equipment, redirecting the spell back at the original caster. Once cast on a subject, Reflection will attempt to reflect any spells cast at the target. It will not have any effect on spells that are already affecting a character. The effects of Reflection depend on the relative magnitude of both itself and the incoming spell – see the Reflection Results table for more details.  Reflection is incompatible with Absorption, Shield and Spirit Block  Reflection Results  Incoming Spell’s Magnitude is. . .  Effect Equal to or weaker than Reflection’s magnitude.  Incoming spell reflected and Reflection remains. 1 or more points stronger than Reflection’s magnitude.  Reflection is eliminated and the incoming spell takes effect."
    },
    {
        "name": "Resurrect",
        "magnitude": 5,
        "variable": false,
        "tags": "Concentration Special, Instant, Touch",
        "type": "divine",
        "description": " The body of the deceased must be present and must be whole. If the target died due to disease or poison, the recipient returns to life cured.  This spell summons the deceased spirit to return its former body. Taking minutes equal to the target’s totalled Characteristics to take effect, during which time the caster must maintain concentration on the spell. If interrupted, the spell fails. When the spell is successful, the dead character returns to life with one hit point.  Resurrect must be cast within days equal to the POW of the deceased. Casting the spell after this point results in the magic automatically failing. "
    },
    {
        "name": "Rout",
        "magnitude": 3,
        "variable": false,
        "tags": "",
        "type": "divine",
        "description": " When aimed at a body of warriors, of no more than one hundred persons, they must make a Persistence roll or immediately lose all cohesion as a unit and rout. Routing units move at double movement, away from the caster, to ideally a place of safety.  They will not defend themselves but will attack any enemy units that get in their way, to get through them to their place of safety. "
    },
    {
        "name": "See Past",
        "magnitude": 2,
        "variable": false,
        "tags": "Area, Concentration",
        "type": "divine",
        "description": " When cast on a 10m area, the caster, as long as they concentrate, can see the area as it was in any past point of time they wish.  They still need to make successful Perception rolls to notice details, such as important clues, and they cannot interact with the scene they see in any way, shape or form. "
    },
    {
        "name": "Shield",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15, Progressive",
        "type": "divine",
        "description": " This spell protects the caster from physical and magical attacks. Each point of magnitude gives the caster one Armour Point and provides a +10% bonus to any tests the caster may make to resist malign magical effects. A magnitude 4 Shield spell provides the caster with +4 AP and a +40% bonus against malign spells, for instance. These effects are cumulative with other spells, as well as any physical armour the caster is wearing. Shield is incompatible with Absorption, Reflection and Spirit Block. "
    },
    {
        "name": "Soul Sight",
        "magnitude": 1,
        "variable": false,
        "tags": "Common, Duration 15, Touch",
        "type": "divine",
        "description": " This spell allows the recipient to see the POW aura of anyone they looks at, enabling them to discern that creature’s current magic points, as well as the nature of any active spells or enchanted items the creature is carrying. It also allows the recipient to see into the Spirit World. "
    },
    {
        "name": "Stink Bomb",
        "magnitude": 1,
        "variable": true,
        "tags": "Resist (Resilience)",
        "type": "divine",
        "description": " Upon being targeted by this spell, the victim becomes covered in a tightly fitting cloak of noxious smelling gas for 1D6 rounds. Each round the victim must make a Resilience test or take 1D4 damage. If the resistance test result is fumbled, the character is unconscious for the remaining duration of the spell from being knocked out by the smell.  All Influence tests and other social interactions are at -20% for the duration of the spell. "
    },
    {
        "name": "Spirit Block",
        "magnitude": 1,
        "variable": true,
        "tags": "Common, Duration 15, Progressive, Touch",
        "type": "divine",
        "description": " Spirits may only touch the recipient of Spirit Block with a POW high enough to break through the spell’s magnitude (see table).  Spirit Block Effectiveness  Spirit Block’s Magnitude  Recipient May Only Be Harmed By Spirits With… 1  POW 10 or higher 2  POW 17 or higher 3  POW 26 or higher 4  POW 37 or higher 5  POW 50 or higher 6  POW 65 or higher 7  POW 82 or higher 8  POW 101 or higher A spirit unable to touch a Spirit Blocked character will not be able to personally attack or harm the recipient, including through ranged attacks (such as a thrown spectral javelin). A spell cast by a spirit at the recipient is blocked unless its magnitude exceeds Spirit Block’s magnitude.  Spirit Block is incompatible with Absorption, Reflection and Shield. "
    },
    {
        "name": "Sun Disc",
        "magnitude": 1,
        "variable": false,
        "tags": "Ranged, Resist (Dodge)",
        "type": "divine",
        "description": " Upon casting this spell, the Caster projects a disc of blinding light from their hand. Targets in the path of the disc are blinded for 1D4 hours, unless they pass their Dodge skill test. Its warming effect melts ice upon contact, even magical ice, if under three magnitude in power, and gives anyone it touches +50% resistance versus cold. "
    },
    {
        "name": "Sunspear",
        "magnitude": 4,
        "variable": false,
        "tags": "Instant, Ranged, Resist (Dodge)",
        "type": "divine",
        "description": " This spell will only function in direct sunlight. When cast, a shaft of light two metres wide streaks from the sky to blast a single target, who must be visible to the caster. If the target does not dive out of the way, the blazing light will burn it for 4D6 damage. Armour points are not effective against this damage, and it counts as both magical and fire damage. "
    },
    {
        "name": "Sureshot",
        "magnitude": 1,
        "variable": false,
        "tags": "Duration 15, Ranged",
        "type": "divine",
        "description": " When cast on a missile weapon (such as a knife, arrow, javelin or rock), firing it triggers the spell. Unless the wielder of the weapon rolls an automatic failure or a fumble, the missile hits successfully (though it may be dodged or parried). So long as the target is within the maximum range of the weapon, the missile will strike home, regardless of concealment or any other factors. Attempts to parry or dodge the missile suffer a –20% penalty.  Combining Sureshot with Firearrow, Multimissile or Speedart does not work, since Sureshot will always take precedence in such cases. "
    },
    {
        "name": "Thunder’s Voice",
        "magnitude": 2,
        "variable": false,
        "tags": "",
        "type": "divine",
        "description": " This spell grants the caster a loud voice of command which gives the caster +20% added to their Influence skill, heard at up to 200 metres. "
    },
    {
        "name": "Touch of Death",
        "magnitude": 4,
        "variable": false,
        "tags": "Touch, Instant, Resist (Persistence)",
        "type": "divine",
        "description": " The caster must touch their victim, and on a failed Persistence test, the victim falls dead. This incredibly powerful spell is available to only members of religions whose deity wields the power of death itself. Usually, to redress the balance, where a person who by all rights should be dead is still alive. "
    },
    {
        "name": "Treasury",
        "magnitude": 4,
        "variable": true,
        "tags": "Duration 1-day",
        "type": "divine",
        "description": " This spell creates a secure room, for one day, to store valuables.  All the entrances are locked and only the caster can come in and out without setting off a magical alarm that they can hear, no matter how far away from the room they are. "
    },
    {
        "name": "True (Weapon)",
        "magnitude": 3,
        "variable": false,
        "tags": "Duration 15 minutes, Ranged",
        "type": "divine",
        "description": " When cast on the specified type of weapon, this spell doubles that weapon’s normal damage dice. Other modifiers, such as Damage Modifier, are not affected. The wielder of the weapon should roll the weapon’s damage twice and total the result. "
    },
    {
        "name": "Ward Camp",
        "magnitude": 2,
        "variable": false,
        "tags": "Area, Duration eight hours",
        "type": "divine",
        "description": " This spell protects a camp with an area of 50 meters squared.  Anyone crossing the invisible boundary of the spell takes 1D10 damage and sets off a magical alarm that immediately awakens everyone within the camp.  The Ward stays in place, even after it has been crossed, for the full duration of the spell. "
    },
    {
        "name": "Wax Effigy",
        "magnitude": 4,
        "variable": false,
        "tags": "Resist (Persistence)",
        "type": "divine",
        "description": " This spell enchants a small wax representation of the intended victim. Spells can be cast at the effigy and affect the victim, despite the distance between the effigy and the victim. The caster need not have seen/met the victim, since it is the power of their god that is providing the link.  Once a day, the victim can be caused physical harm by driving pins into the effigy, at 1D4 damage per pin. The caster can attempt to kill the victim outright by breaking off the head of the effigy.  In this case, the victim gets a Persistence roll to avoid death.  On a failed Persistence test, the victim dies. On a successful Persistence roll, the effigy no longer has any power over the victim. "
    },
    {
        "name": "Whirlwind",
        "magnitude": 1,
        "variable": true,
        "tags": "Duration 15 minutes, Progressive",
        "type": "divine",
        "description": " Each point of magnitude of this spell whips up a whirlwind capable of carrying 20 SIZ in its whirling vortex.  Each round the whirlwind moves ten metres per point, in a random direction (use a D8 to determine the direction, with 1 being North and 5 being South, progressing clockwise around the directions). For each point of magnitude the whirlwind is 10 metres tall.  If the whirlwind hits a character, make a Dodge roll to avoid being caught up in it. Characters caught are whipped off their feet, 1D6 metres into the vortex. Each round roll a 1D6 and consult the following table.  Whirlwind Results  Roll 1D6  Result 1-2  The character is carried up 1D10 metres (if already at the top, blown out of the whirlwind the additional height before falling to earth (taking damage). 3-4  Stay at the height they are. 5-6  Fall 1D6 down in the vortex. If this takes them to the ground, they take falling damage.  "
    },
    {
        "name": "Animate (Substance)",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration",
        "type": "sorcery",
        "description": "    This spell allows the sorcerer to animate the substance indicated, up to one SIZ for every point of magnitude. The sorcerer can cause it to move about and interact, albeit relatively clumsily (Movement of 1m per three points of magnitude).    The sorcerer’s chance to have the animated object perform any physical skill successfully is equal to half their own chance to perform that action (before any modifiers). If the appropriate Form/Set spell is cast immediately after this spell, the caster can perform much finer manipulation of the object. In this case, the animated object will use the caster’s full skill scores for physical activities.    This spell can only be used on inanimate matter.  "
    },
    {
        "name": "Cast Back",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "  This protective spell shields the caster from hostile magic and has a chance of sending it back to the attacking spell caster.    Cast Back only affects spells that target the user specifically and have the Resist trait. Such spells may affect the protected character normally, but if it is resisted, the spell is launched back at the person who cast it, as long as its magnitude is not greater than the Cast Back’s magnitude.    "
    },
    {
        "name": "Create Godform (Deity)",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    This spell can be cast on a recipient other than the caster. It allows the recipient to assume the magical form of the deity for the duration of the spell. While not quite the same as becoming the god itself, it allows the recipient to assume some of the powers of the deity.    While the spell is in operation, the recipient gains:    +20% in all the skills that the deity teaches.    Each magnitude of the spell beyond the first allows the recipient to learn and cast one point of the deity’s Divine or Personal Magic for the duration of the spell. Divine Magic is one use, and Personal Magic must be paid for from the recipients’ magic points.    The recipient knows anything the deity would know.    This is an exceptionally powerful spell, whose use and knowledge automatically puts the sorcerer on the enemy list of the deity’s cult, should they find out that the sorcerer knows how to Godform their god.    If the spell is fumbled, one of the following events, or one similar from the Referee’s fertile imagination, occurs:    The deity sends one of its guardians, an Otherworld servant, to exact divine vengeance upon the sorcerer.    The deity transports the sorcerer and all ‘helpers’ to their court in the Houses of the Holy to explain themselves.    The deity tells a local priest of the sorcerer’s heresy and makes it clear that it is their temple’s job to exact revenge on their deity’s behalf.    "
    },
    {
        "name": "Damage Boosting",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    This spell can be cast upon any weapon up to 5 ENC. Each point of magnitude adds one point to the weapon’s damage (e.g. the basic spell will increase a hatchet from 1D6 damage to 1D6+1 damage).    "
    },
    {
        "name": "Damage Resistance",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    This spell protects the body of the recipient. Any incoming attack dealing damage equal to or less than the magnitude of the spell is ignored. Any incoming attack dealing more damage than the magnitude of Damage Resistance is unaffected and will deal its full damage as normal. Note, the protected character may still suffer from Knockback if applicable.    Damage Resistance may be combined with the Divine Magic spell Shield, in which case incoming damage is compared to the Damage Resistance spell first and only encounters the Shield spell if the Damage Resistance is bypassed.    "
    },
    {
        "name": "Diminish (characteristic)",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Persistence/Resilience), Touch",
        "type": "sorcery",
        "description": "    There are seven Diminish spells, one for each characteristic. The spell will temporarily apply a penalty to the specified characteristic equal to the magnitude of the spell. The penalty applied by this spell may not reduce a characteristic below one, and a creature must have the characteristic in question to be affected by this spell.    Diminish (STR, DEX, CON and SIZ) are resisted with Resilience. Diminish (INT, POW and CHA) are resisted with Persistence.    Applying a penalty to POW does not reduce the character’s magic points.    Note that not all uses of this spell are malicious. Thieves and others often value the timely use of a Diminish (SIZ) spell, as it can greatly enhance their ability to enter restricted areas.    "
    },
    {
        "name": "Dominate (Species)",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Persistence)",
        "type": "sorcery",
        "description": "    This spell allows the caster to gain control over a creature belonging to a specific species. If the target fails to resist the spell, it must obey the commands of the caster for the duration of the spell.    The controlled creature shares a telepathic link with the sorcerer by which it can receive its orders. If the sorcerer and the creature dominated do not share a common language, the sorcerer can order it about, by forming a mental image of the actions they wish the dominated creature to perform.    "
    },
    {
        "name": "Energy Projection (Type)",
        "magnitude": 0,
        "variable": true,
        "tags": "Ranged, Instant, Resist (Dodge)",
        "type": "sorcery",
        "description": "  Energy is either projected as a beam or a ball towards the target, who can avoid the attack by Dodging.    If the spell takes effect, the target takes damage equal to double the magnitude of the spell. Physical armour does not protect against the damage, but magical protection does. Types of energy that can be projected by this spell are Cold (Dark), Lightning, Heat (Fire), Shards of Rock (Earth), Windblast (Air).    "
    },
    {
        "name": "Enhance (characteristic)",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    There are seven Enhance spells, one for each characteristic. Essentially the reverse of the Diminish spell, Enhance allows the Sorcerer to temporarily apply a bonus to the specified characteristic equal to the magnitude of the spell. A creature must have the characteristic in question to be affected by this spell.    Applying a bonus to POW does not increase the character’s magic points.    "
    },
    {
        "name": "Fly",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration, Resist (Persistence)",
        "type": "sorcery",
        "description": "    Using this spell allows the caster (or whomever or whatever they target with the spell) to fly.  The caster may levitate objects or characters (the caster counting as one of these characters if they so wish).    A levitated character may not be overloaded and must have a SIZ characteristic which is lower than the sorcerer’s POW characteristic.    Objects must have an ENC lower than the sorcerer’s POW characteristic.    Character or objects moved by this spell have a base Movement Rate of 6m. All objects and characters moved by this spell move at the spell caster’s behest, not their own.    Each point of the spell’s magnitude may either be used to increase the target’s Movement by +2m or to target an additional object or character – but not both. A sorcerer casting this spell at magnitude 4 may fly themselves with a Movement of 14m, fly themselves and a friend with a Movement of 10m each, or fly themselves and three friends with a Movement of 6m each.    "
    },
    {
        "name": "Form/Set (Substance)",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "sorcery",
        "description": "    There is an unlimited number of Form/Set spells in existence, one for every substance imaginable, from steel to smoke to water.    Each point of magnitude allows the caster to shape one ENC of solid substance or one cubic metre of an ethereal substance (like darkness). The caster must be familiar with the shape they are forming.    When the caster has finished the forming process, the substance retains its shape. Rigid substances like steel will hold the form they had at the end of the spell, while more mutable substances like water will immediately lose their shape.    This spell can be used to mend the damage done to an object. The sorcerer must form the entire object and must succeed at an appropriate Craft test.  If successful they will restore the item to its original condition.    This spell can only be used on inanimate substances.  "
    },
    {
        "name": "Glow",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "  This spell causes a glowing point of light to appear on a solid substance. At its base, the spell creates an area of light one metre in radius, giving off the same illumination as a candle. Each additional point of magnitude increases the radius of effect by one metre. At magnitude 3, the brightness of the spell increases to that of a flaming brand at its centre. At magnitude 5, it increases to that of a camp-fire and at magnitude 10 to that of a bonfire.    This spell can be cast on an opponent’s eyes. If cast on a living being, the spell also gains the Resist (Dodge) trait. If the target fails to resist it, they will suffer a penalty to all attack, parry and Dodge tests, as well as any skills relying upon vision, equal to five times the spell’s magnitude, until the spell ends or is dispelled.    "
    },
    {
        "name": "Hamper",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Resilience)",
        "type": "sorcery",
        "description": "    Each point of magnitude of Hamper subtracts 1m from the Movement rate of the target. Every two points of magnitude also subtract -10% from a recipient’s skills for the purposes of determining the order in combat.    Haste  Each point of magnitude of Haste adds 1m to the Movement rate of the recipient. Every two points of magnitude also add +10% to the recipient’s skills for the purposes of determining the order in combat.    "
    },
    {
        "name": "Holdfast",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    This spell causes two adjacent ten centimetres by ten centimetre surfaces (roughly the size of a person’s palm) to commingle into one. The basic bond has a STR of 1. Each additional point of magnitude will either increase the STR of the bond by +1 or double the area affected.    This spell can affect organic and inorganic substances. If the caster is attempting to bond a living being with this spell, the spell gains the Resist (Resilience) trait.    "
    },
    {
        "name": "Make Potion",
        "magnitude": 0,
        "variable": true,
        "tags": "Permanent",
        "type": "sorcery",
        "description": "    Using the arts of alchemy, Sorcerers can store Sorcery spells in a liquid known as a Potion.    All potions have an attached cost of 1 Gold Ducat per magnitude of spell in ingredients. Multiple spells may be stored in one potion, with the understanding that they will all be cast when the potion is drunk at the magnitude that the creator originally put into the potion.    "
    },
    {
        "name": "Make Scroll",
        "magnitude": 0,
        "variable": true,
        "tags": "Permanent",
        "type": "sorcery",
        "description": "    Magical scrolls are written items that store Sorcery spells. All scrolls have an attached cost of 1 Gold Ducat per magnitude of spell in ingredients (for special inks/parchments, etc.).    The resulting scroll is a one-use item which, upon a successful Sorcery Casting test, casts the spell(s) with any included manipulations at the magnitude that was cast on the scroll.    Alternatively, upon a successful Sorcery Casting skill test, the reader of the scroll can learn the spell by spending the appropriate number of Growth points.    Either way, upon the successful use of the scroll, the spell fades from the scroll. If the casting roll merely fails, the spell remains, but the reader cannot attempt to use the scroll until their Sorcery Casting skill increases. If the casting roll is fumbled, the spell fades from the scroll, without any benefit to the reader.    "
    },
    {
        "name": "Make Spell Matrix",
        "magnitude": 0,
        "variable": true,
        "tags": "Permanent",
        "type": "sorcery",
        "description": "    This spell creates items that store Sorcery spells.    All spell matrices have an attached cost of 10 Gold Ducats per spell in special materials.    The enchanter pays 1 Growth point per spell stored in the matrix.    The wielder can cast and manipulate the spell at the skill of the original enchanter, using their own magic points as fuel.    Spell matrices are reusable and permanent.    Spell matrices are mundane items in their own right and if the item is broken, the spell is dispelled. However, at the time of enchantment, the enchanter can spend another growth point to magically harden the item, making it indestructible.  "
    },
    {
        "name": "Mirage",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": " is the Sorcerers’ version of Illusion.    This spell creates an illusion based on all five senses. The illusion will seem real and solid unless the person looking at it succeeds in a Perception test, which is subject to a modifier based on the magnitude of the spell. If the viewer succeeds in a Perception test, and the illusion could usually cause damage if believed in, it can no longer cause damage to that character. As soon as a viewer disbelieves the illusion, it becomes insubstantial and ghost-like to them.    The size of the illusion is also governed by the magnitude.  A magnitude 1 Illusion can be used to create small household items, say a fake table and chair, but would not be able to create an illusion of a fire-breathing dragon.    Magnitude  Modifier to Perception test  Type of illusion possible    1  +50 %  Not capable of motion or causing damage. Slightly fuzzy and unreal around the edges. Limit of SIZ 10.  2  +25 %  Some minor discrepancies. Capable of motion, but not of damage. Limit of SIZ 15.  3  0  Capable of motion and causing damage. Limit of SIZ 20.  4  -25 %  Capable of motion and causing damage. Limit of SIZ 30.  5  -50 %  Indistinguishable from the real thing, capable of motion and damage. Limit of SIZ 40.  +1  -50%  +10 SIZ per magnitude.       "
    },
    {
        "name": "Mystic Vision",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration",
        "type": "sorcery",
        "description": "    This spell allows the recipient to literally see magic. By augmenting the recipient’s natural vision, the spell allows them to see a creature’s magic points, as well as enchanted items with their own magic points or spells. The recipient must be able to see the creature or object for this spell to work. Mystic Vision also allows a recipient to see into the Spirit World.    On a normal success, the recipient of the spell will only know roughly how many magic points an object or creature has (1–10, 11–20, 21–30 and so forth). On a critical, they will know the exact amount. On a fumble, the Referee should give the player a misleading total.    By looking at a spell’s effect, a recipient of Mystic Vision will automatically be aware of its magical origin (Divine Magic, Personal Magic, or Sorcery). By increasing the magnitude of Mystic Vision, the caster can learn more about what they are seeing. Compare the magnitude of Mystic Vision to the magnitude of any spell that the target is either casting or under the influence of. As long as Mystic Vision’s magnitude exceeds the other spell’s, the caster will be able to precisely determine the effects of the perceived spell, and a mental image of who cast the spell (if it is not obvious).    By looking at an enchanted item, a recipient of Mystic Vision will automatically be aware of its gross magical effects (such as the types of enchantment currently on the item). Each point of magnitude of Mystic Vision will also determine either the invested POW (and therefore the relevant strength) of a particular enchantment or a particular condition laid upon an enchantment (Referee’s choice).    "
    },
    {
        "name": "Neutralise Magic",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "sorcery",
        "description": "    This spell allows a caster to neutralise other spells. Neutralise Magic will eliminate a combined magnitude of spells equal to its own magnitude, starting with the most powerful affecting the target. If it fails to eliminate the most powerful spell, then it will instead target the second-most powerful spell. As soon as Neutralise Magic can no longer dismiss a target’s spells, because all the remaining spell’s magnitudes are too high, its effects immediately end.    Neutralise Magic can be fired as a Reaction, but only when another spell that the character wishes to counter is cast within Neutralise Magic’s range. A successful Neutralise Magic disrupts the other spell and nullifies it. As long as Neutralise Magic’s magnitude equals or exceeds the target spell’s magnitude, the target spell is countered.  "
    },
    {
        "name": "Other World Portal (Other World)",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "  This spell creates a portal to a named Other World. The magnitude of the spell is the number of creatures (of SIZ range 12-18) who can use the portal simultaneously.  The portal exists as long as the spell is in effect. When the spell’s duration is reached, the portal closes instantly.    If the spell casting is fumbled, catastrophic events occur.  Here are some example events. The creative Referee is encouraged to create more.    A malignant creature from that Other World emerges and attacks the sorcerer in an attempt to close the portal.    The sorcerer and all within 10m of them are sucked through the portal, which then promptly closes. Worse, the Sorcerer is so befuddled that they cannot remember this spell for D20+D4 hours.    The Other World, to which the portal is connected, invades the home reality in a 1D10 km diameter from the portal. The home reality protects itself by throwing up a magical barrier that lets things into the beachhead but not out.    "
    },
    {
        "name": "Palsy",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Resilience)",
        "type": "sorcery",
        "description": "    If the caster is able to overcome their Target with this spell, they can turn the victim’s own nervous system against them. The spell will paralyse the target, provided the spell’s magnitude is greater than quarter of the target’s current hit points.  "
    },
    {
        "name": "Poison Antidote",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "This spell counteracts an antidote to any poison. For the duration of the spell, it reduces any poison’s potency by its magnitude X 5. This is for the chance to resist the poison initially. If that resistance test is failed, it still reduces the poison’s effective potency by its magnitude X 5.   If cast on a person who is already affected by a poison, they get another chance to resist the poison.  "
    },
    {
        "name": "Protective Sphere",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "When completed, the Protective Sphere will create a sphere-shaped area of protection with a radius in metres equal to the spell’s magnitude. If this spell is cast on the ground (or another immovable place), it cannot be moved. If cast on a vehicle (such as the bed of a wagon) or a person, it will move with the target.  After the sphere has been completed any one or all of the following spells can be added to provide the defensive capacities of the Sphere during the duration of the Sphere. The Sphere on its own provides no protection, that is down to the Resistance spells.    Damage Resistance, Spell Resistance, Spirit Resistance.    The Protective Sphere’s perimeter contains the benefits of its combined Resistance spell(s). The Protective Sphere only inhibits spells or attacks entering the circle from the outside – attacks or spells originating within the circle are unaffected. Thus, a Protective Sphere against spirits would block out outside spirits but have no effect on those already inside its perimeter.  A Protective Sphere against damage or spells would block out incoming attacks/spells but have no effect on attacks made within the sphere (including attacks targeting those outside the sphere).  "
    },
    {
        "name": "Remove Disease",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "This spell purges the recipient of any disease that is currently afflicting them. Make an opposed roll of the spell’s magnitude vs. the disease’s potency. If successful the character is restored to full health, any penalties to characteristics are removed and any hit points lost to the effects of the disease are regained.    "
    },
    {
        "name": "(Sense) Projection",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration",
        "type": "sorcery",
        "description": "    Each (Sense) Projection spell is a separate spell. These spells encompass the five base senses, but there are also variants for any unusual sensory mechanisms appropriate to the game world (such as sonar).    This spell allows the caster to project one of their senses anywhere within the spell’s range. The spell forms an invisible and intangible sensor, some ten centimetres across, which receives the specified type of sensory input and transmits it to the caster. The sensor can move metres per combat round equal to the spell’s magnitude, directed by the sorcerer, and allows the sorcerer to use their Perception skill through the sensor.    Spells can be cast through the sensor of some Projection spells. For instance, ranged spells require Sight Projection, while touch spells require Touch Projection (and likely Sight Projection too, so the Sorcerer can find their target efficiently).    Characters using Mystic Vision can see the sensor and attack it if they wish, though it is only vulnerable to magic. Magical weapons and spells employed against the sensor will not destroy it but will instead transfer their damage directly to the caster.    "
    },
    {
        "name": "Sense (Substance)",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration",
        "type": "sorcery",
        "description": "    Eminently useful for finding valuables from afar, this spell has a variation for every substance imaginable. Sense (Substance) will cause all sources of the substance within range of the spell to glow an appropriate colour, visible only to the caster – diamonds will gleam like ice, amber will shine like a camp-fire and so on. Each point of this spell’s magnitude allows it to penetrate one metre of rock, wood or dirt. If the source is concealed behind such a material, the surface nearest the caster will glow for a moment. The spell cannot penetrate refined metal, though it can penetrate ore.    "
    },
    {
        "name": "Shapechange (Species) to (Species)",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Resilience), Touch",
        "type": "sorcery",
        "description": "    Each Shapechange spell is a separate spell. Of all the spells with multiple variations, the Shapechange spell has the most, comprising a new spell for almost every combination of creatures imaginable. The spell only works on living things – the dead or inanimate cannot be shape changed.    The magnitude of the spell must be equal to or greater than the average SIZ of both specified species. Thus, changing a mouse (SIZ 1) into a newt (also SIZ 1) is magnitude 1. Changing a mouse into a lion (SIZ 19) is magnitude 10.    If the spell is successful, the target will be biologically changed, gaining the STR, DEX, CON and SIZ of its new form. Its INT, POW and CHA are unchanged, and the target retains its memories and abilities (though it may be unable to use some of those abilities in its new form).    "
    },
    {
        "name": "Skin of Life",
        "magnitude": 0,
        "variable": true,
        "tags": "Touch",
        "type": "sorcery",
        "description": "    This spell protects the recipient from suffocation by air deprivation, due to such factors as drowning or the Smother spell. Each point of magnitude will cover three points of SIZ – thus a magnitude 4 Skin of Life spell would sustain a SIZ 12 creature.    "
    },
    {
        "name": "Smother",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration, Resist (Resilience Special)",
        "type": "sorcery",
        "description": "    If successful, this spell neutralises the air surrounding the target, making each breath stale and worthless, depriving it of oxygen. The caster must concentrate each round, in order to keep the spell operating. For the duration of the spell, the target will be unable to breathe, essentially drowning on dry land.    When the spell begins, the target’s Resilience test determines whether it is able to gasp in one last breath before Smother cuts off the surrounding oxygen supply. If the target succeeds, it may hold its breath as normal. If it fails, it will start drowning in the next combat round.    This spell can also be used to extinguish fires, as the flames will be starved of oxygen. At magnitude 1, it can extinguish a Flame, magnitude 2 a Large Flame, magnitude 4 a Small Fire, magnitude 7 a Large Fire and magnitude 10 it will put out an Inferno. Smother has no effect on magical fire or on fire-based creatures.  "
    },
    {
        "name": "Spell Resistance",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": "This spell matches its magnitude against the magnitude of any incoming spell. If Spell Resistance’s magnitude is greater than the incoming spell’s, then the incoming spell has no effect. If the incoming spell’s magnitude is equal to or greater than the magnitude of Spell Resistance, then the spell affects the target normally.    Unlike many protective spells, Spell Resistance remains in place for the entirety of its duration – spells that successfully breach the spell do not dispel it. However, it does not discriminate between incoming spells – a comrade attempting to magically heal the recipient of Spell Resistance must overcome it in order to successfully use a healing spell.  "
    },
    {
        "name": "Spirit Resistance",
        "magnitude": 0,
        "variable": true,
        "tags": "",
        "type": "sorcery",
        "description": " spell matches its magnitude against the POW of any spirit that comes into contact with the recipient. If the recipient of the caster’s  POW  the Spirit Resistance’s magnitude is greater than the spirit’s POW, the spirit cannot touch the recipient.    A spirit unable to touch a recipient will not be able to attack or directly harm them, including through ranged attacks. A spell cast by a spirit at the recipient is blocked unless its magnitude exceeds the Spirit Resistance’s magnitude.    "
    },
    {
        "name": "Summon (Other World creature)",
        "magnitude": 0,
        "variable": true,
        "tags": "Resist (Persistence)",
        "type": "sorcery",
        "description": "    This spell allows the sorcerer to summon one Other World creature, per casting, to the mundane world. The creature is not automatically under the sorcerer’s control. If the summoned creature succeeds its Persistence test, it is free of the sorcerer’s command and, if so inclined, may be hostile to the sorcerer. Otherwise, it acts as if under the influence of a Dominate spell, for the duration of the spell.  The duration of the summon spell also determines how long the creature is trapped in the Mundane World.    Example Other World creatures: Demons, Elementals, Spirits and Undead.    "
    },
    {
        "name": "Tap (characteristic)",
        "magnitude": 0,
        "variable": true,
        "tags": "Concentration, Resist (Persistence), Touch",
        "type": "sorcery",
        "description": "    There are actually seven Tap spells, one for each characteristic. These devastating spells allow the caster to permanently strip a target of characteristic points, transforming them into magic points for their own use.    The caster must make contact with the target, either physically or through Touch Projection, in order to Tap it – therefore the spell cannot be used on incorporeal creatures, such as spirits.    Tap will only work if its magnitude is equal to, or greater than, the target’s specified characteristic. Thus, a magnitude 6 Tap Strength spell would only work on targets with a STR of 6 or lower.    The number of points Tapped by the spell is equal to 1D6 per combat round the spell is applied to the victim.    Characteristic points lost to Tap are lost permanently, though the victim can raise them again through the normal means of increasing a characteristic. Characteristics may be tapped to 0, which usually involves the death of the victim (the exception being Charisma).    For each characteristic point the sorcerer Taps, they will gain one magic point. The sorcerer is limited in the number of magic points they can gain through Tap; the spell can only increase their magic points to double their normal limit. A sorcerer may simply Tap a target and dissipate any gained magic points.    If the sorcerer gains more magic points through Tap than their normal maximum, the points will disappear at the rate of one magic point per minute once the spell finishes.    "
    },
    {
        "name": "Teleport",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Resist (Dodge)",
        "type": "sorcery",
        "description": "    Teleport allows a sorcerer to move their self or a target, instantaneously, to anywhere within the range of the spell, as long as the destination can be directly observed (Sense Projection spells allow the Caster to ‘see’ locations beyond the physical line of sight), there is solid footing, and no objects bar their arrival. If these conditions are not met, the spell automatically fails. The caster is able to teleport objects up to 3 points of SIZ per point of magnitude.    "
    },
    {
        "name": "Time Travel (Time Period)",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant",
        "type": "sorcery",
        "description": "    This spell transports the caster and creatures (of SIZ 12-18) equal to the magnitude of the spell to a named time era via a time tunnel that opens up and instantly sucks them through to their destination.  The duration of the spell is the time that the caster and group jump forward or backwards through time.    Sorcerers usually have some knowledge about the time period they are travelling to and use an Anchor, a landmark such as a bronze statue, that exists in both the original and destination time period. If they are travelling blind without such an Anchor, the casting roll is at -25%, and the effects of a fumbled roll are even more catastrophic than the examples below suggest.    If the spell casting is failed, the caster and group still travel, but they end up in the wrong location (1D10 Km away from the anchor point) and time (1D10 time units away, the length of the time unit depends on duration, e.g. if the duration was in days, the time unit is days).    If the spell casting is fumbled, catastrophic events occur.  Here are some example events, the creative Referee is encouraged to create more:    A guardian creature from the Other World emerges through the portal and attacks the sorcerer in an attempt to close the portal.    The sorcerer, and all within 10m of them, is sucked through the portal which then promptly closes. The sorcerer is so befuddled that they cannot remember the spell for D20+D4 hours.    As above, but the sorcerer and party arrive in a completely different Time Era or even an Alternative Reality.    Sorcerers with this spell can “change” time freely without having to worry about unintentional “butterfly effect” changes or any alterations in their own existence or memory from changing “their” past.  However, regular use risks the catastrophic effects of a fumble.    "
    },
    {
        "name": "Treat Wounds",
        "magnitude": 0,
        "variable": true,
        "tags": "Instant, Touch",
        "type": "sorcery",
        "description": "    This spell must be cast upon a wounded character. It dramatically accelerates the natural healing rate of the target.  For every point of magnitude of this spell the caster can repair one hit point per combat round, for the duration of the spell.    The spell cast at magnitude 6 instantly heals mortal wounds, bringing the character’s hit point total to one.    This spell does not treat disease or poison. See Remove Disease and Poison Antidote, respectively.    "
    }
]