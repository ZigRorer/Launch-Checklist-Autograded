// Write your JavaScript code here!

const { formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pick = pickPlanet(listedPlanets);
        let pickName = pick.name;
        let pickDiameter = pick.diameter;
        let pickStart = pick.star;
        let pickDistance = pick.distance;
        let pickImage = pick.image;
        let pickMoons = pick.moons;
        addDestinationInfo(document, pickName, pickDiameter, pickStart, pickDistance, pickImage, pickMoons);
    })
    
 });