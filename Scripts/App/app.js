var app = angular.module("apaApp", []); 

app.controller("apaController", function () {

    var vm = this;

    // Functions
    vm.startParking = startParking;
    vm.cancelParking = cancelParking;
    vm.engageBrakes = engageBrakes;
    vm.accelerate = accelerate
    vm.turnSteeringWheel = turnSteeringWheel;

    vm.normalEvent = normalEvent;
    vm.obstacleEvent = obstacleEvent;
    vm.collisionEvent = collisionEvent;
    vm.hardwareEvent = hardwareEvent;
    vm.securityEvent = securityEvent;

    // Variables
    vm.testing = "NOOOOOO!";
    vm.state = {
        name: "DEFAULT",
        description: "This is the default state. From here, the user can hit the 'start parking' button if the speed is below 5 mph to activate the system. The system is also monitoring for any external events.",
        accelerator: {
            input: "Yes",
            functional: "Yes",
            active: "Yes"
        },
        brakes: {
            input: "Yes",
            functional: "Yes",
            active: "Yes"
        },
        steeringWheel: {
            input: "Yes",
            functional: "Yes",
            active: "Yes"
        },
        ultrasonic: {
            input: "N/A",
            functional: "Yes",
            active: "Yes"
        },
        camera: {
            input: "N/A",
            functional: "Yes",
            active: "Yes"
        }
    }

    // Activate
    activate();

    function activate() {

    }

    function startParking() {
        console.log("Hit start parking button");
    }

    function cancelParking() {
        console.log("Hit cancel parking button");
    }

    function engageBrakes() {
        console.log("Hit engage brakes button")
    }

    function accelerate() {
        console.log("Hit accelerate button");
    }

    function turnSteeringWheel() {
        console.log("Hit turn steering wheel button");
    }

    function normalEvent() {
        console.log("Hit normal event");
    }

    function obstacleEvent() {
        console.log("Hit obstacle event");
    }

    function collisionEvent() {
        console.log("Hit collision event");
    }

    function hardwareEvent() {
        console.log("Hit hardware event");
    }

    function securityEvent() {
        console.log("Hit security event");
    }
});