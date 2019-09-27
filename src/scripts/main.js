// / Define a factory function that is responsible for making a piece of pottery.
// The function should output an object that represents a piece of pottery.
// The object should describe its shape, weight, and height.
// The function should take all three of those properties as input to generate the object.
// The function should also add an id property to the object whose value is an integer, and each object should have a unique id value. Use a globally-scoped variable and increment it each time an object is created.



// function potteryFactory (shape , weight , height) {

//         shape;
//         weight;
//         height;
// }

// const grecianUrn = potteryFactory(33,233,44)
// console.log(grecianUrn)

let potteryID = 0;
allPottery = [];

function potteryFactory(name, shape, weight, height)
{
    this.name = name;
    this.shape = shape;
    this.weight = weight;
    this.height = height;
    this.fired = false;
    this.cracked = false;
    this.price = 20;
    this.id = potteryID++
    allPottery.push(this);
    return this;
}


const yorba = new potteryFactory("yorba", "circle", 4, 5);
// console.log("yorba", potteryID)


const melvin = new potteryFactory("melvin", "cube", 11, 55);
// console.log("melvin", potteryID)



const fred = new potteryFactory("fred", "oval", 2, 55);
// console.log("fred", potteryID)



const chuck = new potteryFactory("chuck", "ring", 21, 55);
// console.log("chuck", potteryID)



const herman = new potteryFactory("herman", "triangle", 1, 55);
// console.log("herman", potteryID)
// console.log(`this be all pottery 5`,JSON.stringify(window.allPottery))


// Define a function that is responsible for acting as a kiln. It should take a pottery object as input and also the temperature of the kiln as input. It should add a new property of fired with the value of true to the object. It should output the pottery object.
// If the temperature of the kiln is above 2200 degrees then the pottery object should have a new property of cracked added to it, with a value of true.
// If the temperature of the kiln is below, or equal to, 2200 degrees then the pottery object should have a new property of cracked added to it, with a value of false.

potteryToSell = []
crapPottery = []

function kiln(potteryObject, temperature)
{
    potteryObject.fired === true
    // bake the pottery!

    if (temperature > 2200) {
        potteryObject.cracked === true
        crapPottery.push(potteryObject)
    } else{
        potteryObject.cracked ===false;
        potteryToSell.push(potteryObject)
    }

}
kiln(melvin, 2500);
kiln(yorba, 1900);
kiln(herman, 2200);
kiln(chuck, 3000);
kiln(fred, 1300)
console.log(`lookie here, it's all pottery!` ,JSON.stringify(window.allPottery))



// Define a function that is responsible for determining if a piece of pottery should be sold. Cracked pottery should not be sold, and non-cracked pottery should be sold.
// If the weight of the piece of pottery is over 3, then it should get a price property with a value of 40.
// If the weight is under 3, its price should be 20.
function priceSetter(potteryObject){
    if (potteryObject.weight > 3){
        potteryObject.price = 40
        
    }
    console.log(`price`,potteryObject.name, potteryObject.price)
}

console.log(`all pottery: `, JSON.stringify(window.allPottery))
console.log('These pots are total crap because they are cracked!', JSON.stringify(window.crapPottery))
console.log(`Pottery to Sell`, JSON.stringify(potteryToSell))

potteryToSell.forEach(element => {
    priceSetter(element)
    
});
console.log(`Pottery to Sell`, potteryToSell)

// The Hairy Potter - Part III
// In this exercise, you are going to use json-server to expose an API containing JSON representations of pottery items, and then write JavaScript to get data from the API.

// Create an api sub-directory in your project directory.
// In that directory, create a pottery.json file.
// In that file, create a pottery resource array and create 5 pottery JSON representations in that array. Each one should have all of the properties listed in Part 1 of this exercise.
// Start json-server.
// Instead of building your array from the 3 functions you defined in Part 1, use fetch to get the data from your API.
// Once you have the data, use it for Part 2 of this exercise.

fetch("http://localhost:3000/pottery")
    .then(pottery => pottery.json())
    .then(pottery => {
        console.table(pottery)
        pottery.forEach(pottery => {
            const createHTML = (pottery) =>
                                      `
                                    <div class="pottery">
 
                                    <p>I sold a  ${pottery.shape} for ${pottery.price}</p>
                                    </div>
                                        ` 
                                        const inventoryContainer = document.querySelector("#inventory")
                                        inventoryContainer.innerHTML += createHTML(pottery); 
    })

            
        });