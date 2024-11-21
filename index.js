const rozpocznijBtn = document.querySelector(".rozpocznij-btn")
const rozpocznij = document.querySelector(".rozpocznij")
const test = document.querySelector(".test")

let indexPytania = 0;

let pytania = []

rozpocznijBtn.addEventListener("click", ()=> {

    rozpocznij.style.display = "none";
    test.style.display = "block";
    document.body.style = "justify-content: start;"
    generowanie()
    row.innerHTML = pytania[indexPytania].pytanie
    ab.innerHTML = `${indexPytania + 1} / 10`
})


const row = document.querySelector(".row")
const ab = document.querySelector(".ab")
const submit = document.querySelector(".submit")
const inp = document.querySelector(".inp")

const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!inp.value) return

    pytania[indexPytania].odpowiedzGracza = inp.value

    inp.value = false

    indexPytania++
    if (indexPytania === 10) return generujWynik()

    inp.focus()

    row.innerHTML = pytania[indexPytania].pytanie
    ab.innerHTML = `${indexPytania + 1} / 10`
})


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generowanie() {

    const liczby = []

    const start = 10; // początek
    const end = 1000; // koniec
    const step = 5; // krok

    for (let i = start; i <= end; i += step) liczby.push(i);
    


        

    if (liczby.length === 0) {
        return
    }

    while (pytania.length < 10) {

        // Losuj dwa mnożniki z zakresu 2-10
        const mnoznik2 =  getRandomArbitrary(0, liczby.length)
        const mnoznik1 = 1.5

        // Oblicz odpowiedź
        const odpowiedz = mnoznik1 * liczby[mnoznik2];

        // Dodaj pytanie do tablicy
        pytania.push({
            pytanie: `${mnoznik1} x ${liczby[mnoznik2]}`,
            odpowiedz: odpowiedz,
            odpowiedzGracza: false,
        });
    }

}

const wynik = document.querySelector(".wynik")

function generujWynik() {
    test.style.display = "none";
    wynik.style.display = "flex"

    const p = wynik.querySelector("p")

    const www = document.querySelector(".www")
    www.innerHTML = ""

    let zmienna = 0;
   
    for (const pytanie of pytania) {
        const div = document.createElement("div")
        div.classList.add("pelo")

        console.log(pytanie.odpowiedz, Number(pytanie.odpowiedzGracza));
        


        if (pytanie.odpowiedz === Number(pytanie.odpowiedzGracza)) {
            div.classList.add("green")
            div.innerHTML = `${pytanie.pytanie} = ${pytanie.odpowiedzGracza}`
            zmienna++;
            console.log(zmienna);
            
        } else {
            div.classList.add("red")
            div.innerHTML = `<span class="wb">${pytanie.pytanie} = ${pytanie.odpowiedz}</span> <span class="wb"> ${pytanie.odpowiedzGracza} </span>`
        }
       
        www.appendChild(div)

    }

    console.log(zmienna);
    p.innerText = `Wynik: ${zmienna} / 10`

}


const ppp = document.querySelector(".ppp")

ppp.addEventListener("click", () => {
    koniec()
})

function koniec() {
    document.body.style = "";
    wynik.style.display = "none"
    rozpocznij.style.display = "grid";

    pytania = []
    indexPytania = 0;
}
