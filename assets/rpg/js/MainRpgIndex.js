let Container = document.getElementById("Main-Container");
let userName = "";

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
let startingRoom = new Cave("Strange cave", "Starting", "Smoothy", true, 1, "A very strange cave with smooth walls.");
let treasureRoom = new Cave("Treasure cave", "Treasure", "Treasury", false, 2, "A cave with shinny walls and valuables laying around.")
let moistRoom = new Cave("Moisty cave", "Battle", "Moisty", false, 2, "A humid cave with many plant life, puddles and a fishy stench...");

enemyIndex =[crab, bandid, devil];
////Instances////////Instances////


//Start?
StartSession();

