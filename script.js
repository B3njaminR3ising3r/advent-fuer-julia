/* Die Botschaften sind bewusst einzeln lesbar. Am 24. Dezember erscheinen sie gemeinsam als Brief. */
const messages = [
  "Manchmal schaue ich dich einfach nur an und denke mir, was für ein unglaubliches Glück ich habe, dass ausgerechnet du die Frau an meiner Seite bist. ❤️",
  "Du bist das Beste, was mir je passiert ist. Ich würde mich jederzeit wieder für dich entscheiden, ohne auch nur eine Sekunde zu überlegen.",
  "Es gibt so viele kleine Dinge an dir, die ich liebe. Manche fallen dir selbst wahrscheinlich gar nicht auf, aber genau sie machen dich für mich so besonders.",
  "Dein Lächeln ist eines meiner absoluten Lieblingsdinge auf dieser Welt. Wenn du mich anlächelst, kann mein Tag noch so anstrengend gewesen sein. Plötzlich ist alles wieder gut.",
  "Eine Umarmung von dir ist oft genau das, was ich brauche. Kein großes Reden, kein besonderer Anlass. Einfach nur du und ich. ❤️",
  "Ich liebe es, dass wir nicht nur ein Ehepaar, sondern auch beste Freunde sind. Wir lachen zusammen, blödeln herum und sind einfach ein richtig gutes Team.",
  "Mit dir kann ich so sein, wie ich wirklich bin. Ich muss mich nicht verstellen und kann einfach loslassen. Das ist ein unglaublich schönes Gefühl.",
  "Eigentlich ist es schon ein bisschen verrückt, wie sehr ich dich vermisse, wenn wir einmal nicht zusammen schlafen. Selbst eine einzige Nacht fühlt sich irgendwie komisch an.",
  "Vielleicht erinnerst du dich noch daran, als ich dieses Jahr beim Stockschussturnier war und du bei deiner Mama geschlafen hast. Dort habe ich mal wieder gemerkt, wie sehr ich mich daran gewöhnt habe, dich jeden Abend neben mir zu haben. Und wie schön das eigentlich ist. 😘",
  "Ich liebe es, wenn wir nach einem langen Tag endlich wieder zusammen sind und wir einfach nur Zeit zusammen verbringen können.",
  "Ein Highlight in diesem Jahr waren unsere kleinen Wanderungen. Diese gehören für mich definitiv zu den schönsten Erinnerungen. Es tut einfach unglaublich gut, mit dir unterwegs zu sein und gemeinsam neue Orte zu entdecken.",
  "Es macht einfach immer wieder Spaß, mit dir neue Orte zu entdecken. Ich bin so froh, dass du genauso gerne wie ich die Welt erkunden möchtest.",
  "Mit dir durch die Natur zu wandern, die Aussicht zu genießen und einfach mal alles andere zu vergessen, macht mich glücklich. Ich hoffe, dass wir noch ganz viele solcher Tage erleben.",
  "Du bist für mich der Mensch, bei dem ich am besten abschalten kann. Mit dir wird aus einem ganz normalen Ausflug eine kleine Auszeit, die mir unglaublich viel Kraft gibt.",
  "Ich liebe unsere gemütlichen Abende auf der Couch. Einfach nebeneinander liegen, etwas anschauen, kuscheln und den Tag gemeinsam ausklingen lassen. Mehr brauche ich oft gar nicht.",
  "Manchmal sind es gerade die unscheinbaren Momente, die mir am meisten bedeuten. Ein gemeinsames Lachen, ein Kuss zwischendurch oder einfach deine Hand in meiner.",
  "Ich möchte noch so viel mit dir erleben, so viele Orte entdecken und so viele Erinnerungen sammeln. Aber selbst wenn wir einfach nur zu Hause sind, bin ich glücklich, solange du bei mir bist.",
  "Wenn ich an unsere Hochzeit zurückdenke, bekomme ich immer noch dieses besondere Gefühl. Dich zu heiraten war eine der schönsten Entscheidungen meines Lebens. ❤️",
  "Ich freue mich darauf, mit dir alt zu werden. Auf all die Geschichten, die wir irgendwann erzählen können, und auf die vielen schönen Erinnerungen, die bis dahin noch dazukommen.",
  "Ich bin unglaublich stolz auf uns. Darauf, wie wir zusammenhalten, uns gegenseitig unterstützen und als Team durchs Leben gehen. Ich könnte mir keine bessere Partnerin wünschen.",
  "Am liebsten würde ich dir jeden Wunsch erfüllen und dir jeden Tag eine kleine Freude machen. Aber ich hoffe, du weißt, dass hinter jeder noch so kleinen Aufmerksamkeit ganz viel Liebe steckt.",
  "Ich freue mich riesig auf unsere nächsten gemeinsamen Abenteuer. Auf spontane Ausflüge, neue Lieblingsorte, schöne Abende und all die kleinen Überraschungen, die das Leben für uns bereithält.",
  "Ich habe ein richtig gutes Gefühl, wenn ich an unser nächstes gemeinsames Jahr denke. Vielleicht wird es ja unser Jahr, mit vielen wunderschönen Momenten, an die wir uns noch lange erinnern werden. ❤️",
  "Mein größtes Glück bist und bleibst du, meine Bellezza. Danke, dass du mein Leben jeden Tag so viel schöner machst. Ich liebe dich von ganzem Herzen und freue mich auf alles, was noch vor uns liegt. ❤️"
];
const year = 2026;
const params = new URLSearchParams(location.search);
// Vorschau nur für den Ersteller: ?preview=1 ; nicht an Julia weitergeben.
const preview = params.get('preview') === '1';
const previewDay = Math.min(24, Math.max(1, Number(params.get('day')) || 24));
const now = new Date();
const today = preview ? previewDay : (now.getFullYear() > year ? 24 : now.getFullYear() < year ? 0 : now.getMonth() === 11 ? Math.min(24,now.getDate()) : now.getMonth() < 11 ? 0 : 24);
const storageKey = 'bellezza-advent-2026-opened';
let opened = [];
try { opened = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(opened)) opened=[]; } catch { opened=[]; }
const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const flipCard = document.getElementById('flipCard');
const letterOverlay = document.getElementById('letterOverlay');
let activeDoor = null;
function render(){
 calendar.replaceChildren();
 for(let day=1;day<=24;day++){
  const button=document.createElement('button');
  button.className='door'+(day>today?' locked':'')+(opened.includes(day)?' opened':'')+(day===24?' special':'');
  button.type='button'; button.setAttribute('aria-label',`Türchen ${day}${day>today?', noch verschlossen':''}`);
  button.innerHTML=`<span class="bow">✧</span><span class="day">${day}</span><span class="door-bottom">${opened.includes(day)?'♥':'✦'}</span>`;
  button.addEventListener('click',()=>{if(day>today){button.classList.add('shake');setTimeout(()=>button.classList.remove('shake'),400);return;}openDoor(day);});
  calendar.append(button);
 }
}
function openDoor(day){
 activeDoor=day; document.getElementById('frontNumber').textContent=day;
 document.getElementById('cardTitle').textContent=`${day}. Dezember ♥`;
 document.getElementById('cardMessage').textContent=messages[day-1];
 document.getElementById('letterButton').hidden=day!==24;
 flipCard.classList.remove('flipped'); overlay.hidden=false; document.body.classList.add('modal-open');
 requestAnimationFrame(()=>requestAnimationFrame(()=>flipCard.classList.add('flipped')));
 if(!opened.includes(day)){opened.push(day);try{localStorage.setItem(storageKey,JSON.stringify(opened));}catch{}render();}
 document.getElementById('close').focus();
}
function closeDoor(){overlay.hidden=true;flipCard.classList.remove('flipped');document.body.classList.remove('modal-open');if(activeDoor)calendar.children[activeDoor-1]?.focus();}
function openLetter(){closeDoor();const target=document.getElementById('letterText');target.replaceChildren();messages.forEach(m=>{const p=document.createElement('p');p.textContent=m;target.append(p);});letterOverlay.hidden=false;document.body.classList.add('modal-open');document.getElementById('closeLetter').focus();}
function closeLetter(){letterOverlay.hidden=true;document.body.classList.remove('modal-open');}
document.getElementById('close').addEventListener('click',closeDoor);
document.getElementById('shade').addEventListener('click',closeDoor);
document.getElementById('letterButton').addEventListener('click',openLetter);
document.getElementById('closeLetter').addEventListener('click',closeLetter);
letterOverlay.addEventListener('click',e=>{if(e.target===letterOverlay)closeLetter();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!letterOverlay.hidden)closeLetter();else if(!overlay.hidden)closeDoor();}});
const countdown=document.getElementById('countdown');
if(preview) countdown.textContent=`Vorschau · Stand  ${previewDay}. Dezember`;
else if(today===0)countdown.textContent='Ab dem 1. Dezember wartet jeden Tag eine kleine Überraschung auf dich ✨';
else if(today<24)countdown.textContent=`Noch ${24-today} ${24-today===1?'Tag':'Tage'} bis Heiligabend ♥`;
else countdown.textContent='Frohe Weihnachten, meine Bellezza! ♥';
render();
