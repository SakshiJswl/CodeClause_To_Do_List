
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filters = document.querySelectorAll(".filters span");
const clearAll = document.querySelector(".clear-btn");


function addTask(){

    if(inputBox.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

filters.forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");

    })
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


