// fetch information form api 
// pick the data to display from the api (word and definition)
// display data in html document (create id in html)
// link to submit button
// get user input
// link user input to api request

document.getElementById("submitButton").addEventListener("click", getDefinition);


async function getDefinition(){
    let textInput = document.getElementById("searchText").value ;
        console.log(textInput);
    let response = await fetch(`https://dicolink.p.rapidapi.com/mot/${textInput}/definitions`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dicolink.p.rapidapi.com",
            "x-rapidapi-key": "727e08c480msh9b9088d53e375bep189ddfjsn01220a09870a"
        }
    })
    let data = await response.json();
console.log(data);
document.getElementById("word").innerText = data[0].mot;
document.getElementById("definition").innerText = data[0].definition ;

}
getDefinition();

