 

function takeCardsData() {
    const api_url = "https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English";
    const loader = document.getElementById("loader");
    name = localStorage["name"];
    takeHeaderData(name);
    async function getapi(url) {
        loader.style.display = 'block';
        const response = await fetch(url);
        loader.style.display = 'none';
        let data = await response.json();
        return data;
    }
    getapi(api_url).then(data => {
        showCards(data.cards);
    });
    takeDataForTypes();
}
function takeDataForTypes(){
    const api_url = "https://api.magicthegathering.io/v1/types";
    async function getTypes(url) {
        const response = await fetch(url);
        let data = await response.json();
        return data;
    }
    getTypes(api_url).then(data => {
       console.log(data);
       let type = [];
       var filter = document.getElementById("filters");
       var select = document.getElementById("types");
       data.types.forEach(element => {
        console.log(element);
        var option = document.createElement("option");
        option.text = element;
        select.appendChild(option);
       });
       filter.appendChild(select);
    });
}
function takeHeaderData(name){
    let header = document.getElementById("header");
    header.innerHTML += name;
}
function showCards(data){
    let allCards =  document.getElementById("allCards");
    data.forEach(element => {
        let newCard = document.createElement("li");
        let types = '';
        element.types.forEach(element =>{
            types += element;
        });
        let colors = '';
        element.colors.forEach(element =>{
            colors += element + " ";
        });
        let imageUrl = element.imageUrl != undefined ? element.imageUrl : 'https://lh3.googleusercontent.com/proxy/bUpiCKp_F2jhritiWIr3X-5WG1Y9Hz15swRh9pa0WRjUdAq5HCoO9cz1EjoqYWYLtZJDMTpWNWNU4nAhTolev9_o30RHFgoLdCvihiw'; 
        newCard.innerHTML =
        "<img class='left' src="+imageUrl+">"
        +"<br><h2 class='right'>"+element.artist+"</h2><div class='right'>Name: " + element.name + "<br>"
        +"Types: "+ types +"</div>"
        +"<div class='right'>Name of the set: " + element.setName 
        +"<br><div> Colors: "+ colors +"</div></div>";
        allCards.appendChild(newCard);
    });
}

function sortyByName() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("allCards");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function ascendingSort(data){
    let sortAccending = [];
    for(let i=0;i<data.length;i++){
        sortAccending[i] = data[i].innerHTML;
    }
    sortAccending = sortAccending.sort();
    let allCards =  document.getElementById("allCards");
    allCards.innerHTML= '';
    sortAccending.forEach(element => {
        let newCard = document.createElement("li");
        newCard.innerHTML = element;
        allCards.appendChild(newCard);
    });
}
function decendingSort(data){
    let decendingSort = [];
    for(let i=0;i<data.length;i++){
        decendingSort[i] = data[i].innerHTML;
    }
    decendingSort = decendingSort.sort().reverse();
    let allCards =  document.getElementById("allCards");
    allCards.innerHTML= '';
    decendingSort.forEach(element => {
        let newCard = document.createElement("li");
        newCard.innerHTML = element;
        allCards.appendChild(newCard);
    });
}
// function filterByColor(){
//     let select = document.getElementById("filterColor");
//     let selectedColor = select.options[select.selectedIndex].textContent;
//     ul = document.getElementById("allCards");
//     li = ul.getElementsByTagName("li");
//     let allCards =  document.getElementById("allCards");
//     for (i = 0; i < li.length; i++) {
//         console.log(li[i]);
//         let length = li[i].childNodes[4].childNodes[2].innerText.length;
//         color = li[i].childNodes[4].childNodes[2].innerText.substring(7,length);
//         if(color == selectedColor){
//             li[i].style.display = '';
//         }
//         else{
//             li[i].style.display = 'none';

//         }
//     }
// }



