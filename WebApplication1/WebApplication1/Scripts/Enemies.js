var app = angular.module("Enemies", []);
app.controller("enCtrl", function ($scope) {
    $scope.enemies = [{ title: "Brunk", monster: "Goblin" },
        { title: "Grakta", monster: "Orc" },
    { title: "Kel'Theas", monster: "Demon" }];

    $scope.monsters = ["Goblin", "Orc", "Demon"];





    $scope.addEnem = function () {
        $scope.enemies.push({ name: $scope.addTitle, race: $scope.selectedMonster });
    }

    $scope.removeEnem = function (x) {
        $scope.enemies.splice(x, 1);
    }
});