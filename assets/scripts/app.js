function changeVehicleType(vehicle_type) {
    const vehicle_input = document.getElementById("vehilce-input");
    vehicle_input.value = vehicle_type;
}

function hideTypeOfVehicle(isVisible) {
    var x = document.getElementById("have-vehicle-select").value;
    if(x == "yes")
        document.getElementById("vehicle-type-input").style.display = "block";
    else
        document.getElementById("vehicle-type-input").style.display = "none";
}