let xp = 0;
let gold = 55;
let health = 100;
let currentweapon = 0;
let fighting = 0;
let a=0;

var goldtext = document.querySelector(".gold");
var healthtext = document.querySelector(".health");
var weaponnow = document.querySelector(".current-weapon");

const player = document.getElementById("player"); 
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const stats = document.querySelector(".stats");
const messagecontent = document.querySelector(".message-content");
const body = document.body;

const weapons = [
    { name: "stick", power: "5" },
    { name: "dagger", power: "30" },
    { name: "clawhammer", power: "50" },
    { name: "sword", power: "70" }
];

btn1.onclick = gostore;
btn2.onclick = gocave;
btn3.onclick = fightdragon;

let overlayImageslimy;
let overlayImagefanged;
let overlayImageweaponbought;
let overlayImageweaponbought2;
let overlayImageweaponbought3;

function gostore() {
    btn1.innerText = "buy 10 health (10gold)";
    btn2.innerText = "buy weapon (30gold)";
    btn3.innerText = "go to town square";
    btn1.onclick = buyhealth;
    btn2.onclick = buyweapon;
    btn3.onclick = gotownsquare;
    messagecontent.innerHTML = "<b>WELCOME TO THE STORE</b>";
    body.style.backgroundImage = "url('jungle.avif')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    addimages();
}

function gocave() {
    btn1.innerText = "fight slimy(10 gold)";
    btn2.innerText = "fight fanged beast(25 gold)";
    btn3.innerText = "go to town square";
    btn1.onclick = fightslimy;
    btn2.onclick = fightfangedbeast;
    btn3.onclick = gotownsquare;
    messagecontent.innerHTML = "<b>what a dark creepy CAVE!!!</b>";
    body.style.backgroundImage = "url('cave.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    
    overlayImageslimy = document.createElement("img");
    overlayImageslimy.src = "slime.avif";
    overlayImageslimy.classList.add("overlay-imageslimy");
    body.appendChild(overlayImageslimy);
    
    overlayImagefanged = document.createElement("img");
    overlayImagefanged.src = "fanged.jpg";
    overlayImagefanged.classList.add("overlay-imagefanged");
    body.appendChild(overlayImagefanged);
}

function buyhealth() {
    if (gold < 10) {
        messagecontent.innerHTML = "<b>not enough GOLD!!!</b>";
    } else {
        messagecontent.innerHTML = "<b>Heal Up Buddy :)</b>";
        gold = gold - 10;
        health = health + 10;
        goldtext.innerText = `Gold: ${gold}`;
        healthtext.innerText = `Health: ${health}`;
    }
}

function buyweapon() {
    removeimages();
    if (gold < 30) {
        messagecontent.innerHTML = "<b>not enough GOLD!!!</b>";
        addimages();

    }else{if(currentweapon==3){
        messagecontent.innerText = `U Already Have The Most Powerful Weapon: ${weapons[currentweapon].name}`;
        addimages();
    
        }else {
                gold = gold - 30;
                currentweapon += 1;
                goldtext.innerText = `Gold: ${gold}`;
                weaponnow.innerHTML = `Current Weapon: ${weapons[currentweapon].name}&nbsp;&nbsp;&nbsp;&nbsp;Power: ${weapons[currentweapon].power}`;

                messagecontent.innerText = `Congrats, U Got A New Weapon: ${weapons[currentweapon].name}`;
                addimages();
            }
        }
    }

function addimages(){
    if(currentweapon==1){
        overlayImageweaponbought = document.createElement("img");
        overlayImageweaponbought.src = "dagger.jpg";
        overlayImageweaponbought.classList.add("overlay-imageweaponbought");
        body.appendChild(overlayImageweaponbought);
    }
    if(currentweapon==2){
        overlayImageweaponbought = document.createElement("img");
        overlayImageweaponbought.src = "dagger.jpg";
        overlayImageweaponbought.classList.add("overlay-imageweaponbought");
        body.appendChild(overlayImageweaponbought);

        overlayImageweaponbought2 = document.createElement("img");
        overlayImageweaponbought2.src = "clawhammer.jpeg";
        overlayImageweaponbought2.classList.add("overlay-imageweaponbought2");
        body.appendChild(overlayImageweaponbought2);
    }
    if(currentweapon==3){
        overlayImageweaponbought = document.createElement("img");
        overlayImageweaponbought.src = "dagger.jpg";
        overlayImageweaponbought.classList.add("overlay-imageweaponbought");
        body.appendChild(overlayImageweaponbought);

        overlayImageweaponbought2 = document.createElement("img");
        overlayImageweaponbought2.src = "clawhammer.jpeg";
        overlayImageweaponbought2.classList.add("overlay-imageweaponbought2");
        body.appendChild(overlayImageweaponbought2);

        overlayImageweaponbought3 = document.createElement("img");
        overlayImageweaponbought3.src = "sword.jpeg";
        overlayImageweaponbought3.classList.add("overlay-imageweaponbought3");
        body.appendChild(overlayImageweaponbought3);
    }
}

function gotownsquare() {
    btn1.innerText = "Go To Store";
    btn2.innerText = "Go To Cave";
    btn3.innerText = "Fight Dragon(50 gold)";
    btn1.onclick = gostore;
    btn2.onclick = gocave;
    btn3.onclick = fightdragon;
    messagecontent.innerHTML = "<b>WELCOME TO TOWNSQUARE</b><br>Defeat The Dragon<br>Be The Champion</td>";
    body.style.backgroundImage = "url('townsquare.webp')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    removeimages()
}

function removeimages() {
    const imagesToRemove = [
        overlayImageslimy, 
        overlayImagefanged, 
        overlayImageweaponbought, 
        overlayImageweaponbought2, 
        overlayImageweaponbought3
    ];

    imagesToRemove.forEach(image => {
        if (image && body.contains(image)) {
            body.removeChild(image);
        }
    });
}


const monsters=[
    {
        name:"slimy",
        level:10,
        health:15,
        originalhealth:15
    },
    {
        name:"fanged beast",
        level:30,
        health:60,
        originalhealth:60
    },
    {
        name:"dragon",
        level:60,
        health:300,
        originalhealth:300
    }
]

let keys = {}; 

window.addEventListener("keydown", (e) => { 
    keys[e.key] = true;
}); 

window.addEventListener("keyup", (e) => { 
    keys[e.key] = false; }); 

function update() { 
    if (keys["ArrowUp"]) player.style.top = `${player.offsetTop - 5}px`; 
    if (keys["ArrowDown"]) player.style.top = `${player.offsetTop + 5}px`; 
    if (keys["ArrowLeft"]) player.style.left = `${player.offsetLeft - 5}px`; 
    if (keys["ArrowRight"]) player.style.left = `${player.offsetLeft + 5}px`; 

    requestAnimationFrame(update);
}

requestAnimationFrame(update);

function fightslimy() {
    fighting=0;
    btn1.innerText = "Go To Store";
    btn2.innerText = "Go To Cave";
    btn3.innerText = "Go To TOWNSQUARE";
    btn1.onclick = gostore;
    btn2.onclick = gocave;
    btn3.onclick = gotownsquare;
    body.style.backgroundImage = "url('fightwithslime.png')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    gofight();
    a=10
}

function fightfangedbeast() {
    fighting=1;
    btn1.innerText = "Go To Store";
    btn2.innerText = "Go To Cave";
    btn3.innerText = "Go To TOWNSQUARE";
    btn1.onclick = gostore;
    btn2.onclick = gocave;
    btn3.onclick = gotownsquare;
    body.style.backgroundImage = "url('fightwithfangedbeast.png')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    gofight();
    a=25
}

function fightdragon() {
    fighting=2;
    btn1.innerText = "Go To Store";
    btn2.innerText = "Go To Cave";
    btn3.innerText = "Go To TOWNSQUARE";
    btn1.onclick = gostore;
    btn2.onclick = gocave;
    btn3.onclick = gotownsquare;
    body.style.backgroundImage = "url('fightwithdragon.png')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    gofight();
    a=50
}

function gofight() {
    removeimages()
    const monster = monsters[fighting];
    messagecontent.innerHTML = `<b>Engaged in combat with ${monster.name}!</b>`;
    
        if (monster.health <= 0) {
            messagecontent.innerHTML = `<b>You have already defeated ${monster.name}!</b><br>To Fight Again Press (FIGHT AGAIN) key`;
            btn2.innerText = "Fight Again";
            btn2.onclick = function() {
                    monsters[fighting].health = monsters[fighting].originalhealth;
                    gofight() ;
            }
        }
            while (health > 0 && monster.health > 0) {
                monster.health -= weapons[currentweapon].power;
                messagecontent.innerHTML += `<br>You hit ${monster.name} for ${weapons[currentweapon].power} damage.`;
                
                if (monster.health > 0) {
                    health -= monster.level ;
                    messagecontent.innerHTML += `<br>${monster.name} hit you for ${monster.level} damage.`;
                }
            }

            if (health > 0) {
                messagecontent.innerHTML += `<br>You defeated ${monster.name}!`;
                xp += monster.level * 10;
                gold += a;
            } else {
                if(health<=0 && gold<10){
                    health = 0;
                    healthtext.innerText = `Health: ${health}`;
                    messagecontent.innerHTML = `<b>GAME OVER</b>`;
                    btn2.innerText = "PLAY AGAIN";
                    btn2.onclick = function() {
                        window.location.reload();
                    
                    }
                    btn1.innerText = "PLAY AGAIN";
                    btn1.onclick = function() {
                        window.location.reload();
                    
                    }
                    btn3.innerText = "PLAY AGAIN";
                    btn3.onclick = function() {
                        window.location.reload();
                    
                    }
                }
                else{
                health = 0;
                healthtext.innerText = `Health: ${health}`;
                messagecontent.innerHTML += `<br>${monster.name} defeated you!<br><b>Get Back Stronger</b>`;
                }
            }

    goldtext.innerText = `Gold: ${gold}`;
    healthtext.innerText = `Health: ${health}`;
}
function gameover(){
    if(health==0 && gold<10){
        messagecontent.innerHTML = `<b>GAME OVER</b>`;
        btn2.innerText = "PLAY AGAIN";
        btn2.onclick = function() {
            window.location.reload();
        
        }
        btn1.innerText = "PLAY AGAIN";
        btn1.onclick = function() {
            window.location.reload();
        
        }
        btn3.innerText = "PLAY AGAIN";
        btn3.onclick = function() {
            window.location.reload();
        
        }
    }
}