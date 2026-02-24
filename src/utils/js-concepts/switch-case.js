function switchCase(action){
    switch(action){
        case "1":
            console.log("Hello! Sundeeep Dasari")
            return "hello"
            
        case "good-morning":
            console.log("Good Morning! Sundeeep Dasari")
            return "good-morning"

        case 1:
            console.log("sundeeep is 1")
            return 1

        default:
            console.log("Hi, Sundeeep Dasari")
            return "hi"
    }
}

const returnedValue = switchCase(1);
console.log("Returned value from the function: ", returnedValue);
// switchCase("good-morning");
// switchCase("hi");