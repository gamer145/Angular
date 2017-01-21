var app = angular.module("Characters", []);
app.controller("chCtrl", function ($scope) {
    $scope.characters = [{ name: "Ben", profession: "Fighter", race: "Human" },
        { name: "Thranduil", profession: "Ranger", race: "Elf" },
    { name: "Throdin", profession: "Cleric", race: "Dwarf" }];

    $scope.professions = ["Fighter", "Ranger", "Cleric"];

    $scope.races = ["Elf", "Human", "Dwarf"];

    

    $scope.addItem = function () {
        $scope.characters.push({ name: $scope.addName, profession: $scope.selectedProf, race: $scope.selectedRace });
    }

    $scope.removeItem = function (x) {
        $scope.characters.splice(x, 1);
    }

    $scope.enemies = [{ title: "Brunk", monster: "Goblin" },
        { title: "Grakta", monster: "Orc" },
    { title: "Kel'Theas", monster: "Demon" }];

    $scope.monsters = ["Goblin", "Orc", "Demon"];

    
    $scope.battle = "no battle is going on";

    $scope.fight = function () {
        $scope.battlePoints = 0;
        $scope.monsterPoints = 0;

        $scope.combatant = "";
        $scope.target = "";

        if ($scope.selectedChar.toString() == "Cleric") {
            $scope.battlePoints = 2;
            $scope.combatant = "The Cleric";
        } else if ($scope.selectedChar.toString() == "Ranger") {
            $scope.battlePoints = 4;
            $scope.combatant = "The Ranger";
        } else if ($scope.selectedChar.toString() == "Fighter") {
            $scope.battlePoints = 6;
            $scope.combatant = "The Fighter";
        }


        

        if ($scope.selectedEnem.toString() == "Goblin") {
            $scope.monsterPoints = 2;
            $scope.target = "The Goblin";
        } else if ($scope.selectedEnem.toString() == "Orc") {
            $scope.monsterPoints = 4;
            $scope.target = "The Orc";
        } else if ($scope.selectedEnem.toString() == "Demon") {
            $scope.monsterPoints = 6;
            $scope.target = "The Demon";
        }

        $scope.battle = "";
        while($scope.battlePoints > 0 && $scope.monsterPoints > 0){
            $scope.monsterPoints -= 1;
            $scope.battle = ($scope.battle + ($scope.combatant + " Deals damage to " + $scope.target + "! \n"));
            if ($scope.monsterPoints <= 0) {
                $scope.battle = ($scope.battle + "And kills them! huzzah! \n");
            } else {
                $scope.battlePoints -= 1;
                $scope.battle = ($scope.battle + ($scope.target + " Deals damage to " + $scope.combatant + "! \n"));
                if ($scope.battlePoints <= 0) {
                    $scope.battle = ($scope.battle + "And kills them! oh no! \n");
                }
            }

        }
    }


    $scope.addEnem = function () {
        $scope.enemies.push({ name: $scope.addTitle, race: $scope.selectedMonster });
    }

    $scope.removeEnem = function (x) {
        $scope.enemies.splice(x, 1);
    }
});