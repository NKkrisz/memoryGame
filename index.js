const cardsContainer = document.querySelector("#cards");
const inputRange = document.querySelector("#cardPairs");
const inputRangeIndicator = document.querySelector("#cardPairsNumber");

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

inputRange.setAttribute("min", "1");
inputRange.setAttribute("max", Object.keys(cards).length);
inputRangeIndicator.value = inputRange.value;

function indicate(){
    inputRangeIndicator.value = inputRange.value;
}

const statusContainer = document.querySelector("#status");

function complete(){
    if(completed === Object.keys(cardsContainer.children).length/2){
        statusContainer.innerHTML = "Status: You Won, Congrats!";
        statusContainer.classList.add("rainbowText");
    }
}

function randomize(){
    cardsContainer.innerHTML = "";
    wrongGuesses = 0;
    completed = 0;
    wrongGuessesContainer.innerHTML = `Wrong Guesses: ${wrongGuesses}`;
    statusContainer.innerHTML = "Status: In Progress"
    statusContainer.classList.remove("rainbowText");;

    let cardPairs = inputRange.value;
    let alreadyChosen = [];
    let rnd;
    let randomizeList = [];

    if(cardPairs > 6){
        cardsContainer.classList.remove("overflow-hidden");
    } else {
        cardsContainer.classList.add("overflow-hidden");
    }

    for(let i = 0; i < cardPairs; i++){
        while (true){
            rnd = Math.floor(Math.random() * Object.keys(cards).length);
            if(!alreadyChosen.includes(rnd)){
                alreadyChosen.push(rnd);
                break;
            }
        }

        randomizeList.push(`<button onclick=check(this) style="transform-style: preserve-3d;" class="game${Object.keys(cards)[rnd]} card select-none cursor-pointer bg-slate-400 border border-slate-950 md:w-32 md:h-32 w-20 h-20 lg:w-44 lg:h-44 p-2 text-black rounded-xl flex justify-center"><img src="${cards[Object.keys(cards)[rnd]]}" alt=""><div style="transform: rotateY(180deg) translateZ(1px);" class="flex top-0 absolute w-full h-full bg-slate-400 rounded-xl"></div></button>`)
        randomizeList.push(`<button onclick=check(this) style="transform-style: preserve-3d;" class="game${Object.keys(cards)[rnd]} card select-none cursor-pointer bg-slate-400 border border-slate-950 md:w-32 md:h-32 w-20 h-20 lg:w-44 lg:h-44 p-2 text-black rounded-xl flex justify-center text-center items-center"><p class="text-xs md:text-xl">${Object.keys(cards)[rnd]}</p><div style="transform: rotateY(180deg) translateZ(1px);" class="flex top-0 absolute w-full h-full bg-slate-400 rounded-xl"></div></button>`)
    }

    randomizeList = randomizeList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
   

    for(item of randomizeList){
        cardsContainer.innerHTML += item;
    }

    alreadyChosen = [];
}

let flipped = "";
let wrongGuesses = 0;
let completed = 0;

const wrongGuessesContainer = document.querySelector("#wrongGuesses");

function check(obj){
    console.log(obj.disabled);

    obj.disabled = true;
    
    if(!flipped){
        flipped = obj;
    } else {
        if(flipped.classList[0] == obj.classList[0]){
            flipped = "";
            completed++;
        } else {
            setTimeout(()=>{
                flipped.disabled = false;
                obj.disabled = false;
                flipped = "";
            }, 750)
            wrongGuesses++;
            wrongGuessesContainer.innerHTML = `Wrong Guesses: ${wrongGuesses}`;
        }
    }
    complete();
}