// Create a function that tests the post route handler [2 pts]
async function funcPost(){
const response = await fetch("/create-potion")
const data = await response.json()
console.log(data)
}


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
funcPost()
