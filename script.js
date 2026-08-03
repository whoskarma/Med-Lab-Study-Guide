const flashcards = [

{
question:"What is V1?",
answer:"4th intercostal space, right sternal border. Views the septal wall."
},

{
question:"What is V2?",
answer:"4th intercostal space, left sternal border. Views the septal wall."
},

{
question:"What is V3?",
answer:"Placed between V2 and V4. Views the anterior wall."
},

{
question:"What is V4?",
answer:"5th intercostal space, left midclavicular line. Views the anterior wall."
},

{
question:"What is V5?",
answer:"Same level as V4 at the anterior axillary line. Views the lateral wall."
},

{
question:"What is V6?",
answer:"Same level as V4 at the midaxillary line. Views the lateral wall."
},

{
question:"What does ECG stand for?",
answer:"Electrocardiogram — a recording of the heart's electrical activity."
},

{
question:"What do V1 and V2 represent?",
answer:"Septal leads."
},

{
question:"What do V3 and V4 represent?",
answer:"Anterior leads."
},

{
question:"What do V5 and V6 represent?",
answer:"Lateral leads."
}

];


const container = document.getElementById("cards");


flashcards.forEach(card => {

let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<div>
<strong>${card.question}</strong>
<p class="answer">${card.answer}</p>
</div>
`;

div.onclick=function(){
let answer=this.querySelector(".answer");
answer.style.display =
answer.style.display==="block" ? "none" : "block";
}

container.appendChild(div);

});
