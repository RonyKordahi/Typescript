function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var result = add("Rony", "Kordahi");
// ============================================ //
// console.log("=================")
// ============================================ //
var fetchedUserData = {
    id: 1,
    name: "Rony",
    job: { title: "Web Developer", description: "Making websites" }
};
console.log(fetchedUserData.job.title);
var manager = {
    name: "Rony",
    priviledges: ["boss"],
    startDate: new Date(),
};
function printEmployeeInformation(employee) {
    console.log("Name: ".concat(employee.name));
    if ("priviledges" in employee) {
        console.log("Priviledges ".concat(employee.priviledges));
    }
    if ("startDate" in employee) {
        console.log("Start Date ".concat(employee.startDate));
    }
}
printEmployeeInformation({ name: "Test", startDate: new Date() });
// ============================================ //
console.log("=================");
// ============================================ //
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ".concat(amount));
    };
    return Truck;
}());
var vehicle1 = new Car();
var vehicle2 = new Truck();
var useVehicle = function (vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(vehicle1);
useVehicle(vehicle2);
// ============================================ //
console.log("=================");
var moveAnimal = function (animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed ".concat(speed));
};
moveAnimal({ type: "bird", flyingSpeed: 10 });
// ============================================ //
// console.log("=================")
// ============================================ //
// type casting (2 different methods)
var userInput1 = document.getElementById("user-input");
var userInput2 = document.getElementById("user-input");
userInput1.value = "Hello world!";
userInput2.value = "Hello world!";
var errorBag = {
    email: "Not a valid email!",
    username: "Not a valid username!",
};
