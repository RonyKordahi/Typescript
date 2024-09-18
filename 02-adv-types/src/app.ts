// Intersection type used with union types
type StrNum = string | number;
type BoolNum = boolean | number;

type Universal = StrNum & BoolNum;

// function overload
// ↪ can dictate what the function returns
// ↪ basically type casting for function returns
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: number, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: StrNum, n2: StrNum) {

    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }

    return n1 + n2
}

const result = add("Rony", "Kordahi");

// ============================================ //
// console.log("=================")
// ============================================ //

const fetchedUserData = {
    id: 1,
    name: "Rony",
    job: { title: "Web Developer", description: "Making websites" },
}

console.log(fetchedUserData?.job.title);

// ============================================ //
console.log("=================")
// ============================================ //

// Custom type declaration
type Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// Intersection type
// ↪ based off both types above
// ↪ must have all the properties of the types it's based on
type Manager = Admin & Employee

const manager: Manager = {
    name: "Rony",
    priviledges: ["boss"],
    startDate: new Date(),
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
    console.log(`Name: ${employee.name}`);

    if ("priviledges" in employee) {
        console.log(`Priviledges ${employee.priviledges}`)
    }

    if ("startDate" in employee) {
        console.log(`Start Date ${employee.startDate}`)
    }
}

printEmployeeInformation({ name: "Test", startDate: new Date() });

// ============================================ //
console.log("=================")
// ============================================ //

class Car {
    drive() {
        console.log("Driving");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck");
    }

    loadCargo(amount: number) {
        console.log(`Loading cargo ${amount}`);
    }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

// ============================================ //
console.log("=================")
// ============================================ //

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

// Discriminated union
// ↪ Each type has a unique literal type under the "type" property
type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {

    let speed;

    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;

        case "horse":
            speed = animal.runningSpeed;
            break;
    }

    console.log(`Moving at speed ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// ============================================ //
// console.log("=================")
// ============================================ //

// type casting (2 different methods)
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;

userInput1.value = "Hello world!";
userInput2.value = "Hello world!";

// ============================================ //
// console.log("=================")
// ============================================ //

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username: "Not a valid username!",
}