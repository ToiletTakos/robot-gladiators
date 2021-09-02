var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log (
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        // if player choses to skip
        
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
        window.alert("welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        // repeat and execute as long as the enemy-robot is alive
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}