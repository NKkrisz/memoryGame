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

for(let item in cards){
    console.log(item, cards[item]);
    cardsContainer.innerHTML += `<div class="bg-slate-400 border border-slate-950 md:w-32 md:h-32 w-20 h-20 p-2 text-black rounded-xl flex justify-center"><img src="${cards[item]}" alt=""></div>`
}