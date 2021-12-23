let Container = document.getElementById("Main-Container");
let userName = "";

//resets the protagonist
function ResetChar() {
    player.name = "";
    player.health = 100;
    player.hunger = 100;
    player.strenght = 1;
    player.speed = 1;
    player.defense = 1;
    player.luck = 1;
    player.statusPoints = 10;
    player.gold = 15
    player.xp = 0;
}


////Instances////////Instances////
/*---- Instances of the classes ----*/
/* The player */
let player = new Protagonist(100, "", 1, 1, 1, 1, 10, 15);
let god = new Entity(1100, "'Father'", 100, 100, 100, 100);
/* Crabs */
let crab = new Enemie(15, "Evil Crustacian", 3, 2, 5, 1, "CRAB", 5)
crab.biomes = ["Moisty", "Rocky","Treasury"]

/* Bandids */
let bandid = new Enemie(35, "Shady Bandid", 4, 3, 2, 2, "BANDID", 22)
bandid.biomes = ["Rocky", "Treasury"]

/* Devils */
let devil = new Enemie(50, "Infernal Devil", 5, 5, 1, 2, "DEVIL", 52)
bandid.biomes = ["Treasury"]

/* Caves */
let startingRoom = new Cave("Strange cave", "Starting", "Smoothy", true, 1, 
    "A very strange cave with smooth walls.", "none");
let treasureRoom = new Cave("Treasure cave", "Treasure", "Treasury", false, 2, 
    "A cave with shinny walls and valuables laying around.", "low")
let moistRoom = new Cave("Moisty cave", "Battle", "Moisty", false, 2, 
    "A humid cave with many plant life, puddles and a fishy stench...", "high");
let sandRoom = new Cave("Sandy cave", "Battle", "Sandy", false, 1, 
    "A cave overran with sand, you can see bones comming out of the walls..." , "none");
let MinesRoom = new Cave("The Mines", "Battle", "Mine", false, 5, 
    "A central cave with ores and a lot of exits, bones and mining gear litter the place...", "mid");
let rockyRoom = new Cave("Rocky cave", "Battle", "Rocky", false, 2, 
    "A Rocky cave with rought surfaces, red sand falls from the ceiling...", "none");

enemyIndex =[crab, bandid, devil];
caveIndex = [treasureRoom, moistRoom, sandRoom, MinesRoom, rockyRoom];

////Instances////////Instances////


//Start?
StartSession();

