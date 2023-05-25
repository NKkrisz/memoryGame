const cardsContainer = document.querySelector("#cards");

const cards = {
    "React" : "./img/icons8-react.svg",
    "Vue" : "./img/icons8-vuejs.svg",
    "Angular" : "./img/icons8-angularjs.svg",
    "Svelte" : "./img/icons8-svelte.svg",
    "TailwindCSS" : "./img/icons8-tailwind-css.svg",
    "Bootstrap" : "./img/icons8-bootstrap.svg",
    "Javascript" : "./img/icons8-javascript.svg",
    "Java" : "./img/icons8-java.svg",
    "Python" : "./img/icons8-python.svg",
    "C++" : "./img/icons8-c++.svg",
    "Rust" : "./img/icons8-rust-96.png",
    "Golang" : "./img/icons8-golang.svg",
    "Firebase" : "./img/icons8-firebase.svg",
    "Github" : "./img/icons8-github.svg",
    "Visual Studio" : "./img/icons8-visual-studio.svg",
    "Unity" : "./img/icons8-unity.svg"
}

function randomize(){
    let cardPairs = 6;
    let alreadyChosen = [] 
    let rnd;
    
    for(let i = 0; i < cardPairs; i++){
        while (true){
            rnd = Math.floor(Math.random() * Object.keys(cards).length);
            if(!alreadyChosen.includes(rnd)){
                alreadyChosen.push(rnd)
                break;
            }
        }
        
        cardsContainer.innerHTML += `<div onclick=check(this) class="game${Object.keys(cards)[rnd]} cursor-pointer bg-slate-400 border border-slate-950 md:w-32 md:h-32 w-20 h-20 p-2 text-black rounded-xl flex justify-center"><img src="${cards[Object.keys(cards)[rnd]]}" alt=""></div>`
        cardsContainer.innerHTML += `<div onclick=check(this) class="game${Object.keys(cards)[rnd]} cursor-pointer bg-slate-400 border border-slate-950 md:w-32 md:h-32 w-20 h-20 p-2 text-black rounded-xl flex justify-center text-center">${Object.keys(cards)[rnd]}</div>`
    }
    
    alreadyChosen = [];
}

randomize()

let flipped = [];

function check(obj){
    flipped.push(obj.classList[0])
    if(flipped.length === 2){
        if(flipped[0]===flipped[1]){
            console.log("win");
        } else {
            console.log("lose");
        }
        flipped = [];
    }
}