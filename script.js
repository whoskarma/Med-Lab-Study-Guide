function showSection(id){
 document.getElementById('flashcards').style.display='none';
 document.getElementById('test').style.display='none';
 document.getElementById(id).style.display='block';
}

const flashcards=[
{question:'What is V1?',answer:'4th intercostal space, right sternal border. Views the septal wall.'},
{question:'What is V2?',answer:'4th intercostal space, left sternal border. Views the septal wall.'},
{question:'What is V3?',answer:'Between V2 and V4. Views the anterior wall.'},
{question:'What is V4?',answer:'5th intercostal space, left midclavicular line. Views the anterior wall.'},
{question:'What is V5?',answer:'Anterior axillary line. Views the lateral wall.'},
{question:'What is V6?',answer:'Midaxillary line. Views the lateral wall.'},
{question:'Which leads are septal?',answer:'V1-V2'},
{question:'Which leads are anterior?',answer:'V3-V4'},
{question:'Which leads are lateral?',answer:'V5-V6'},
{question:'What is the QRS complex?',answer:'Ventricular depolarization.'},
{question:'What is the T wave?',answer:'Ventricular repolarization.'}
];

const cards=document.getElementById('cards');
flashcards.forEach(c=>{
 let div=document.createElement('div');
 div.className='card';
 div.innerHTML=`<strong>${c.question}</strong><p class="answer">${c.answer}</p>`;
 div.onclick=()=>{let a=div.querySelector('.answer');a.style.display=a.style.display==='block'?'none':'block';};
 cards.appendChild(div);
});

const questions=[
['V1 is placed where?',['4th ICS right sternal border','5th ICS left midclavicular','Midaxillary line'],'4th ICS right sternal border'],
['Which leads view the septal wall?',['V1-V2','V3-V4','V5-V6'],'V1-V2'],
['Which leads view the anterior wall?',['V1-V2','V3-V4','V5-V6'],'V3-V4'],
['Which leads view the lateral wall?',['V1-V2','V3-V4','V5-V6'],'V5-V6'],
['V4 is placed at?',['5th ICS left midclavicular','Right sternal border','Midaxillary line'],'5th ICS left midclavicular'],
['V5 is placed at?',['Anterior axillary line','Sternal border','Between V2 and V4'],'Anterior axillary line'],
['V6 is placed at?',['Midaxillary line','Right chest','Midclavicular right'],'Midaxillary line'],
['V3 is located?',['Between V2 and V4','At V6','At sternum'],'Between V2 and V4'],
['QRS represents?',['Ventricular depolarization','Atrial contraction','Ventricular filling'],'Ventricular depolarization'],
['T wave represents?',['Ventricular repolarization','Atrial depolarization','Heart rate'],'Ventricular repolarization']
];

const quiz=document.getElementById('quiz');
questions.forEach((q,i)=>{
 quiz.innerHTML+=`<div class="card"><h3>${i+1}. ${q[0]}</h3>${q[1].map(x=>`<label><input type="radio" name="q${i}" value="${x}">${x}</label><br>`).join('')}</div>`;
});

function submitQuiz(){
 let score=0;
 questions.forEach((q,i)=>{
  let answer=document.querySelector(`input[name="q${i}"]:checked`);
  if(answer && answer.value===q[2]) score++;
 });
 document.getElementById('score').innerHTML=`Score: ${score}/10 (${score*10}%)`;
}
