
function showSection(section){

document.getElementById("flashcards").style.display="none";
document.getElementById("test").style.display="none";

document.getElementById(section).style.display="block";

}



const cards=[

["V1","4th intercostal space, right sternal border. Views septal wall."],

["V2","4th intercostal space, left sternal border. Views septal wall."],

["V3","Placed between V2 and V4. Views anterior wall."],

["V4","5th intercostal space, left midclavicular line. Views anterior wall."],

["V5","Same level as V4, anterior axillary line. Views lateral wall."],

["V6","Same level as V4, midaxillary line. Views lateral wall."]

];


let cardBox=document.getElementById("cards");


cards.forEach(c=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=
`
<h2>${c[0]}</h2>
<p class="answer">${c[1]}</p>
`;

div.onclick=()=>{

let answer=div.querySelector(".answer");

answer.style.display=
answer.style.display=="block"
?"none"
:"block";

};


cardBox.appendChild(div);

});





const questions=[

{
q:"Where is V1 placed?",
a:["Right sternal border","Midaxillary line","Between V2 and V4"],
correct:0
},

{
q:"Where is V2 placed?",
a:["Left sternal border","Anterior axillary line","Clavicle"],
correct:0
},

{
q:"V3 is placed between:",
a:["V1 and V2","V2 and V4","V5 and V6"],
correct:1
},

{
q:"Which lead views the anterior wall?",
a:["V3-V4","V1-V2","V5-V6"],
correct:0
},

{
q:"V5 is located at:",
a:["Anterior axillary line","Right sternal border","Midclavicular right"],
correct:0
},

{
q:"V6 is located at:",
a:["Midaxillary line","Sternum","Clavicle"],
correct:0
}

];


let quiz=document.getElementById("quiz");


questions.forEach((q,i)=>{

quiz.innerHTML+=`

<div class="question">

<h3>${i+1}. ${q.q}</h3>

${q.a.map((x,j)=>
`
<label>
<input type="radio" name="q${i}" value="${j}">
${x}
</label><br>
`
).join("")}

</div>

`;

});




function gradeTest(){

let score=0;


questions.forEach((q,i)=>{

let answer=document.querySelector(
`input[name="q${i}"]:checked`
);


if(answer && Number(answer.value)==q.correct){
score++;
}

});


document.getElementById("score").innerHTML=
"You scored "+score+"/"+questions.length;

}
