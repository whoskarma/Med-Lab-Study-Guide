// ---------- Navigation ----------

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

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

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    darkBtn.textContent =
        document.body.classList.contains("dark")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";

});

// ---------- Progress ----------

let progress = 0;

function updateProgress(){

    progress += 5;

    if(progress > 100) progress = 100;

    document.getElementById("progressFill").style.width =
        progress + "%";

    document.getElementById("progressText").textContent =
        progress + "% Complete";

}

// ---------- Chapter Notes ----------

const chapter3 = [
"Cells are the basic unit of structure and function.",
"Cell membrane is selectively permeable.",
"Ribosomes make proteins.",
"Rough ER contains ribosomes.",
"Smooth ER makes lipids.",
"Golgi apparatus packages proteins.",
"Mitochondria produce ATP.",
"Lysosomes digest waste.",
"Diffusion moves high → low concentration.",
"Osmosis is movement of water.",
"Facilitated diffusion uses channels.",
"Active transport requires ATP.",
"Endocytosis moves material into a cell.",
"Exocytosis moves material out.",
"Interphase prepares the cell for division.",
"Mitosis produces two identical cells.",
"Prophase, Metaphase, Anaphase, Telophase.",
"Stem cells can become specialized cells.",
"Apoptosis is programmed cell death.",
"Necrosis is cell death from injury."
];

const chapter4 = [
"Metabolism is all chemical reactions.",
"Anabolism builds molecules.",
"Catabolism breaks molecules.",
"ATP is the cell's energy currency.",
"ATP becomes ADP after losing phosphate.",
"Glycolysis is anaerobic.",
"Cellular respiration needs oxygen.",
"DNA stores genetic information.",
"Genes code for proteins.",
"DNA replication occurs before cell division.",
"Transcription makes mRNA.",
"Translation makes proteins.",
"Ribosomes build proteins.",
"tRNA carries amino acids.",
"Mutations change DNA."
];

function loadNotes(){

    const ch3 = document.getElementById("chapter3Content");
    const ch4 = document.getElementById("chapter4Content");

    ch3.innerHTML = "";
    ch4.innerHTML = "";

    chapter3.forEach(note=>{
        ch3.innerHTML += `<div class="card"><p>${note}</p></div>`;
    });

    chapter4.forEach(note=>{
        ch4.innerHTML += `<div class="card"><p>${note}</p></div>`;
    });

}

loadNotes();

// ---------- Flashcards ----------

const flashcards = [
{
question:"What is the basic unit of structure and function in the body?",
answer:"The Cell"
},
{
question:"Which organelle produces ATP?",
answer:"Mitochondria"
},
{
question:"What organelle packages proteins?",
answer:"Golgi Apparatus"
},
{
question:"Which organelle makes proteins?",
answer:"Ribosomes"
},
{
question:"What transport requires ATP?",
answer:"Active Transport"
},
{
question:"Water moves across a membrane by what process?",
answer:"Osmosis"
},
{
question:"Movement from high to low concentration?",
answer:"Diffusion"
},
{
question:"Cell division of the nucleus?",
answer:"Mitosis"
},
{
question:"What is programmed cell death?",
answer:"Apoptosis"
},
{
question:"What molecule stores genetic information?",
answer:"DNA"
},
{
question:"Energy currency of the cell?",
answer:"ATP"
},
{
question:"RNA that carries genetic code?",
answer:"mRNA"
},
{
question:"Where are proteins made?",
answer:"Ribosomes"
},
{
question:"First stage of cellular respiration?",
answer:"Glycolysis"
},
{
question:"What process makes proteins?",
answer:"Translation"
}
];

let cardIndex = 0;
let flipped = false;

const front = document.querySelector(".flash-front");
const back = document.querySelector(".flash-back");
const inner = document.querySelector(".flashcard-inner");

function loadCard(){

    front.textContent = flashcards[cardIndex].question;
    back.textContent = flashcards[cardIndex].answer;

    inner.classList.remove("flipped");
    flipped = false;

}

document.getElementById("flipCard").onclick = ()=>{

    inner.classList.toggle("flipped");
    flipped = !flipped;
    updateProgress();

};

document.getElementById("nextCard").onclick = ()=>{

    cardIndex++;

    if(cardIndex>=flashcards.length)
        cardIndex=0;

    loadCard();

};

document.getElementById("prevCard").onclick = ()=>{

    cardIndex--;

    if(cardIndex<0)
        cardIndex=flashcards.length-1;

    loadCard();

};

loadCard();


// ---------- Quiz ----------

const quiz = [

{
question:"Which organelle is called the powerhouse of the cell?",
choices:["Golgi","Nucleus","Mitochondria","Lysosome"],
correct:2
},

{
question:"Which transport requires ATP?",
choices:["Diffusion","Osmosis","Facilitated Diffusion","Active Transport"],
correct:3
},

{
question:"What carries genetic information?",
choices:["Protein","DNA","ATP","Lipid"],
correct:1
},

{
question:"Which RNA carries the genetic code?",
choices:["tRNA","rRNA","mRNA","None"],
correct:2
},

{
question:"What is the first step of cellular respiration?",
choices:["Translation","Mitosis","Glycolysis","DNA Replication"],
correct:2
},

{
question:"Which organelle makes proteins?",
choices:["Golgi","Ribosomes","Lysosomes","Centrioles"],
correct:1
},

{
question:"Programmed cell death is called:",
choices:["Necrosis","Apoptosis","Diffusion","Metabolism"],
correct:1
},

{
question:"ATP stands for:",
choices:[
"Adenosine Triphosphate",
"Amino Transfer Protein",
"Active Transport Protein",
"Adenine Transfer Process"
],
correct:0
}

];

let q = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreBox = document.getElementById("score");

function loadQuestion(){

    question.innerHTML =
    `<h3>${quiz[q].question}</h3>`;

    answers.innerHTML="";

    quiz[q].choices.forEach((choice,index)=>{

        const btn=document.createElement("button");

        btn.textContent=choice;

        btn.onclick=()=>{

            if(index===quiz[q].correct){

                score++;

            }

            scoreBox.textContent="Score: "+score;

            updateProgress();

        };

        answers.appendChild(btn);

    });

}

document.getElementById("nextQuestion").onclick=()=>{

    q++;

    if(q>=quiz.length){

        question.innerHTML=
        `<h2>Quiz Finished!</h2>`;

        answers.innerHTML="";

        scoreBox.innerHTML=
        `Final Score: ${score}/${quiz.length}`;

        return;

    }

    loadQuestion();

};

loadQuestion();
