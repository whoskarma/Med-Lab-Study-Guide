// ---------- Navigation ----------

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav");

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        navButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        pages.forEach(page => page.classList.remove("active"));

        document
            .getElementById(button.dataset.page)
            .classList.add("active");
    });
});

// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";

});

// ---------- Progress ----------

let progress = 0;

function updateProgress(){

    progress += 5;

    if(progress > 100) progress = 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("progressText").textContent =
        progress + "% Complete";

}

// ---------- Chapter Notes ----------

const chapter3Notes = [

"Cells are the basic unit of structure and function.",
"Cells become specialized through differentiation.",
"The plasma membrane is selectively permeable.",
"The cell membrane is mainly phospholipids and proteins.",
"Ribosomes make proteins.",
"Rough ER contains ribosomes.",
"Smooth ER synthesizes lipids.",
"Golgi apparatus modifies and packages proteins.",
"Mitochondria produce ATP.",
"Lysosomes digest waste and worn-out cell parts.",
"The cytoskeleton supports the cell.",
"Centrioles help during cell division.",
"Cilia move mucus or fluids across cell surfaces.",
"Flagella move the entire cell.",

"Diffusion moves substances from high to low concentration.",
"Facilitated diffusion uses transport proteins.",
"Osmosis is movement of water.",
"Active transport requires ATP.",
"Endocytosis brings material into the cell.",
"Exocytosis releases material from the cell.",

"Interphase prepares the cell for division.",
"Mitosis has four phases: Prophase, Metaphase, Anaphase, Telophase.",
"Cytokinesis divides the cytoplasm.",
"Stem cells can become specialized cells.",
"Apoptosis is programmed cell death.",
"Necrosis results from injury."

];

const chapter4Notes = [

"Metabolism includes all chemical reactions.",
"Anabolism builds molecules.",
"Catabolism breaks molecules.",
"ATP is the main energy source.",
"ATP becomes ADP after losing a phosphate.",
"Cellular respiration makes ATP.",
"Glycolysis is the first stage of respiration.",
"DNA stores genetic information.",
"Genes contain instructions for proteins.",
"DNA replication copies DNA.",
"Transcription makes mRNA.",
"Translation makes proteins.",
"Ribosomes are the site of protein synthesis.",
"tRNA carries amino acids.",
"Mutations change DNA sequences."

];

function loadNotes(){

    const ch3 = document.getElementById("chapter3Notes");
    const ch4 = document.getElementById("chapter4Notes");

    chapter3Notes.forEach(note=>{

        const div=document.createElement("div");

        div.className="note";

        div.textContent=note;

        ch3.appendChild(div);

    });

    chapter4Notes.forEach(note=>{

        const div=document.createElement("div");

        div.className="note";

        div.textContent=note;

        ch4.appendChild(div);

    });

}

loadNotes();

// ---------- Flashcards ----------

const flashcards=[

{
question:"Basic unit of life?",
answer:"Cell"
},

{
question:"Powerhouse of the cell?",
answer:"Mitochondria"
},

{
question:"Organelle that makes proteins?",
answer:"Ribosomes"
},

{
question:"Packages proteins?",
answer:"Golgi Apparatus"
},

{
question:"Movement of water?",
answer:"Osmosis"
},

{
question:"Transport requiring ATP?",
answer:"Active Transport"
},

{
question:"First stage of cellular respiration?",
answer:"Glycolysis"
},

{
question:"Genetic material?",
answer:"DNA"
},

{
question:"RNA carrying genetic code?",
answer:"mRNA"
},

{
question:"Programmed cell death?",
answer:"Apoptosis"
}

];

let currentCard=0;

const flashCard=document.getElementById("flashCard");
const front=document.getElementById("cardFront");
const back=document.getElementById("cardBack");

function showCard(){

    front.textContent=flashcards[currentCard].question;

    back.textContent=flashcards[currentCard].answer;

    flashCard.classList.remove("flip");

}

showCard();

document.getElementById("flipCard").onclick=()=>{

    flashCard.classList.toggle("flip");

    updateProgress();

};

document.getElementById("nextCard").onclick=()=>{

    currentCard++;

    if(currentCard>=flashcards.length)
        currentCard=0;

    showCard();

};

document.getElementById("prevCard").onclick=()=>{

    currentCard--;

    if(currentCard<0)
        currentCard=flashcards.length-1;

    showCard();

};
