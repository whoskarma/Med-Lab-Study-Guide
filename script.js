// ---------- Quiz ----------

const quiz = [

{
question:"What is the basic unit of structure and function in the body?",
answers:["Organ","Cell","Tissue","Organism"],
correct:1
},

{
question:"Which organelle produces ATP?",
answers:["Golgi Apparatus","Ribosome","Lysosome","Mitochondria"],
correct:3
},

{
question:"Which transport process requires ATP?",
answers:["Diffusion","Osmosis","Facilitated Diffusion","Active Transport"],
correct:3
},

{
question:"What is the movement of water across a membrane called?",
answers:["Diffusion","Osmosis","Filtration","Endocytosis"],
correct:1
},

{
question:"Which organelle packages proteins?",
answers:["Golgi Apparatus","Nucleus","Centrioles","Lysosome"],
correct:0
},

{
question:"What stage prepares the cell for division?",
answers:["Metaphase","Anaphase","Interphase","Telophase"],
correct:2
},

{
question:"Programmed cell death is called:",
answers:["Necrosis","Apoptosis","Mutation","Mitosis"],
correct:1
},

{
question:"ATP stands for:",
answers:[
"Adenosine Triphosphate",
"Active Transfer Protein",
"Amino Transport Process",
"Adenine Tissue Protein"
],
correct:0
},

{
question:"The first stage of cellular respiration is:",
answers:[
"Translation",
"DNA Replication",
"Glycolysis",
"Electron Transport"
],
correct:2
},

{
question:"DNA stores:",
answers:[
"Energy",
"Genetic Information",
"Proteins",
"Lipids"
],
correct:1
},

{
question:"Which RNA carries the genetic code to the ribosome?",
answers:[
"tRNA",
"mRNA",
"rRNA",
"DNA"
],
correct:1
},

{
question:"Translation produces:",
answers:[
"DNA",
"ATP",
"Proteins",
"Lipids"
],
correct:2
}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionBox = document.getElementById("question");
const answersBox = document.getElementById("answers");
const scoreBox = document.getElementById("score");

function loadQuestion(){

answered = false;

const q = quiz[currentQuestion];

questionBox.innerHTML =
`<h2>${currentQuestion+1}. ${q.question}</h2>`;

answersBox.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.textContent=answer;

btn.onclick=()=>{

if(answered) return;

answered=true;

if(index===q.correct){

btn.style.background="#4CAF50";
score++;

}else{

btn.style.background="#E53935";

answersBox.children[q.correct].style.background="#4CAF50";

}

scoreBox.textContent=`Score: ${score}`;

updateProgress();

};

answersBox.appendChild(btn);

});

}

loadQuestion();

document.getElementById("nextQuestion").addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion>=quiz.length){

questionBox.innerHTML=`
<h2>🎉 Quiz Complete!</h2>
<p>You scored <strong>${score}/${quiz.length}</strong></p>
`;

answersBox.innerHTML="";

scoreBox.innerHTML=
score===quiz.length
?"🏆 Perfect Score!"
:score>=9
?"⭐ Excellent!"
:score>=7
?"👍 Great Job!"
:"📚 Keep Studying!";

document.getElementById("nextQuestion").style.display="none";

return;

}

loadQuestion();

});

// ---------- Initialize ----------

updateProgress();
