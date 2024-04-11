let recipes = [];

async function getRecipes(){
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=450';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7018175312msh105ca654b44bdcfp181048jsna157a988aa29',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

function drawCard(record, id){
    let result = document.querySelector(`#${id}`);
    let html = '';
    for(let rec of record){
        html += `<div onclick="navigate('recipeInfo.html?id=${rec.id}')" class="food-container">
                    <div class="food-image">
                        <img src="${rec.thumbnail_url}" alt="">
                    </div>
                    <div class="food-info" id="listing">
                        <a href="recipeInfo.html?id=${rec.id}" data-id= ${rec.id}> ${rec.name} </a>
                        <p>${rec.description}</p>
                    </div>
                </div>`;
    }
    result.innerHTML = html;
}

async function loadRecipes(){
    let result = document.querySelector('#main-display');
    let html = `<h1 style="width:100%;margin-left: 0;font-size: 50px;">Popular Recipes</h1>
    <section class="category" id="popular"></section>

    <h1 style="width:100%;margin-left:0;font-size: 50px;">Healthy Recipes</h1>
    <section class="category" id="healthy"></section>

    <h1 style="width:100%;margin-left:0;font-size: 50px;">Quick Recipes</h1>
    <section class="category" id="snack"></section>

    <h1 style="width:100%;margin-left:0;font-size: 50px;">Vegan Recipes</h1>
    <section class="category" id="vegan"></section>`;
    result.innerHTML = html;

    let popular=[];
    let healthy=[];
    let vegan = [];
    let snacks = [];
    let healthyCount=0, popularCount=0, veganCount=0, snacksCount=0;
    recipes = await getRecipes();
    for(let rec of recipes){
        let topics = Object.keys(rec.topics);
        for(let topic of topics){
            if(rec.topics[topic].slug === "romantic-dinners"){
                popularCount++;
                if(popularCount > 8)
                    break;
                popular.push(rec);
            }
            if(rec.topics[topic].slug === "healthy"){
                healthyCount++;
                if(healthyCount > 8)
                    break;
                healthy.push(rec);
            }
            if(rec.topics[topic].slug === "snacks"){
                snacksCount++;
                if(snacksCount > 8)
                    break;
                snacks.push(rec);
            }
            if(rec.topics[topic].slug === "vegan"){
                veganCount++;
                if(veganCount > 8)
                    break;
                vegan.push(rec);
            }
        }
    }
    drawCard(popular, "popular");
    drawCard(healthy, "healthy");
    drawCard(snacks, "snack");
    drawCard(vegan, "vegan");
}
loadRecipes();

function filter(category){
    let result=document.querySelector('#main-display');
    let html = "";
    result.innerHTML = html;
    let filtered = [];
    let count=0;
    for(let rec of recipes){
        let tags = Object.keys(rec.tags);
        for(let tag of tags){
            if(rec.tags[tag].name === category){
                filtered.push(rec);
    }
        }
    }
    drawCard(filtered, "main-display");
}
  
  function search() {
    const searchKey = document.querySelector('#searchKey').value;
    window.location.href = 'search.html?search=' + encodeURIComponent(searchKey);
}

function quickSearch(searchKey) {
    window.location.href = 'search.html?search=' + encodeURIComponent(searchKey);
}

function navigate(link) {
    window.location.href = `${link}`;
}

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".topnav a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            links.forEach(function(l) {
                l.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
});