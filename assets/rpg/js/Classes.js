////Character////////Character////
/*Father of creatures*/
class Entity{ 
    constructor(hp, name, strenght, speed, defense, luck){
        this.health = hp;
        this.name = name;
        this.strenght = strenght;
        this.speed = speed;
        this.defense = defense;
        this.luck = luck;
        this.hunger = 100;
    }

}
/* Player */
class Protagonist extends Entity{
    constructor(hp,name, strenght, speed, defense, luck, statusPoints, gold){
        super(hp, name, strenght, speed, defense, luck)
        this.statusPoints = statusPoints;
        this.gold = gold;
        this.xp =0;
    }
}
/* Enemies */
class Enemie extends Entity{
    constructor(hp, name, strenght, speed, defense, luck, eType, goldDrop){
        super(hp, name, strenght, speed, defense, luck)
        this.enemieType = eType;
        this.goldDropCount = goldDrop;
        this.biomes = [];
    }
}

////Character////////Character////
////Cave////////Cave////
class Cave{
    constructor(caveName, type, biome, isSafeZone, minExits, description, foodCount) {
        this.caveName = caveName;
        this.type = type;
        this.biome = biome;
        this.isSafeZone = isSafeZone;
        this.minExits = minExits
        this.description = description;
        this.enemieCount;
        this.foodCount = foodCount;
    }
    
}
////Cave////////Cave////