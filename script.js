const btn = document.getElementById('help')
const h2 = document.getElementById('result')
const sec = document.getElementById('wybor')

const gry = ["The Witcher 3: Wild Hunt", "Cyberpunk 2077", "Elden Ring", 
    "Red Dead Redemption 2", "Grand Theft Auto V", "Minecraft", 
    "God of War", "The Last of Us Part I", "Hades", 
    "Forza Horizon 5", "FIFA 24", "Spider-Man 2", 
    "Baldur's Gate 3", "Alan Wake 2", "Minecraft",
    "League of Legends", "Counter-Strike 2", "Valorant"]

const ksiazki = ["Wiedźmin: Ostatnie Życzenie", "Hobbit", "Harry Potter i Kamień Filozoficzny", 
    "Władca Pierścieni", "Diuna", "1984", 
    "Zanim się pojawiłeś", "Sherlock Holmes", "Gra o Tron", 
    "Kamienie na szaniec", "Pan Tadeusz", "Chłopi", 
    "Kod Leonarda da Vinci", "Morderstwo w Orient Expressie", "Marsjanin",
    "Metro 2033", "Cień wiatru", "Mały Książę"]

const film = ["Incepcja", "Interstellar", "Mroczny Rycerz", 
    "Shrek", "Władca Pierścieni: Drużyna Pierścienia", "Pulp Fiction", 
    "Skazani na Shawshank", "Zielona Mila", "Gwiezdne Wojny", 
    "Harry Potter", "Avatar", "Gladiator", 
    "Matrix", "Wilk z Wall Street", "Bękarty Wojny",
    "Top Gun: Maverick", "Oppenheimer", "Barbie"]


//Licznik Losowań
let punkty = 0;
const p = document.getElementById('counter');


//Reset Liczby Losowań
const reset = document.getElementById('resetBtn');


btn.addEventListener('click', function(){
    let s = document.getElementById('wybor').value;
    let coWybrano = sec.value;

    if(coWybrano === "gra"){
        let losowaGra = gry[Math.floor(Math.random() * gry.length)];
        h2.innerText = "Dziś grasz w " + losowaGra;
        document.body.style.backgroundColor = "Red";
    } else if (coWybrano === "film"){
        let losowyFilm =film[Math.floor(Math.random() * film.length )];
        h2.innerText = "Dziś leci " + losowyFilm;
        document.body.style.backgroundColor = "purple";
    } else if(coWybrano === "ksiazka"){
        let losowaKsiazka = ksiazki[Math.floor(Math.random() * ksiazki.length)];
        h2.innerText = "Cisza nocna i  czytamy " + losowaKsiazka;
        document.body.style.backgroundColor = "blue"
    }

    punkty = punkty + 1;
    p.innerText = "Liczba losowań " + punkty;
})

reset.addEventListener('click', function(){
    punkty = 0;
   p.innerText = "Liczba losowań: 0"
   h2.innerText = "";
   document.body.style.backgroundColor = "lightgrey"
})
