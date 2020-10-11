function validateForm(){
    let nameData = document.getElementById("inputName").value;
    if( nameData != '' && (checkMinimumLenght(nameData.length) && checkFirstCharacter(nameData[0]) )){
        window.location.href = "file:///C:/Users/Martin96/Desktop/Polarcape/task2/cards.html"; 
        localStorage["name"] = nameData;
    }
    else{
        if(!checkMinimumLenght(nameData.length)){
            if(checkFirstCharacter(nameData[0])){
                let errMessage2 =  document.getElementById("errMessage2");
                errMessage2.style.display = "none";
            }
            let errMessage1 =  document.getElementById("errMessage1");
            errMessage1.style.display = "inline";
            makeInputRed();
        }
        if(!checkFirstCharacter(nameData[0])){
            if(checkMinimumLenght(nameData.length)){
                let errMessage1 =  document.getElementById("errMessage1");
                errMessage1.style.display = "none";
            }
            let errMessage2 =  document.getElementById("errMessage2");
            errMessage2.style.display = "inline";
            makeInputRed();
        }
    }

}
function makeInputRed(){
    let nameInput = document.getElementById("inputName");
    nameInput.style.border = "1px solid red";
    nameInput.style.boxShadow = "3px 3px #888888";
}
function checkMinimumLenght(nameLenght){
    return nameLenght >=3  ? true : false;
}
function checkFirstCharacter(firstCharacter){
    if( firstCharacter != undefined ){
        return firstCharacter == firstCharacter.toUpperCase() ? true :false;
    }
} 