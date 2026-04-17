speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices();
};
const hiMap = {
  "daily": "हर दिन",
  "focus": "ध्यान दो",
  "practice": "अभ्यास",
  "discipline": "अनुशासन",
  "control": "नियंत्रण",
  "future": "भविष्य",
  "start": "शुरू करो",
  "stop": "रुको",
  "learn": "सीखो",
  "work": "काम करो",
  "improve": "सुधारो",
  "build": "बनाओ",
  "move forward": "आगे बढ़ो"
};
function cleanText(text, lang) {
  let map = hiMap;
  Object.keys(map).forEach(word => {
    const regex = new RegExp(word, "gi");
    text = text.replace(regex, map[word]);
  });
  // remaining English words remove
  text = text.replace(/[A-Za-z]/g, "");
  return text;
}
const scenarios = [
{
title: "BROKE AGAIN",
en: `You are broke again,No money,No backup.
Reality hit hard,Stop blaming luck,Track your spending.
Cut useless expenses,Learn one income skill,Work daily without excuse.
Focus on survival first,Avoid comparison,Stay disciplined.
Build slowly,Money comes to control, not chaos.`,
hi: `तुम फिर से पैसे के बिना हो।
यह सच्चाई है।
किस्मत को दोष मत दो,खर्च track करो,फालतू चीजें हटाओ।
income skill सीखो,daily काम करो,comparison बंद करो।
discipline बनाओ,धीरे आगे बढ़ो,पैसा discipline को follow करता है।`
},
{
title: "EXAM FAILURE",
en: `You failed.
It hurts,But failure shows gaps,Find mistakes.
Fix weak areas,Study smart,Revise daily.
Practice more,Avoid distractions,Stay consistent.
Next attempt must be stronger.`,
hi: `तुम फेल हो गए।
दर्द होता है।
यह lesson है,गलती ढूंढो,weak areas सुधारो,smart पढ़ो।
daily revise करो,practice बढ़ाओ,consistent रहो।
अगला attempt strong होना चाहिए।`
},
{
title: "NO JOB",
en: `You don't have a job.
But you have time.
Use it,Learn skills.
Build projects,Apply daily.
Improve resume,Stay patient,Avoid laziness.
Work daily.
This phase builds your future.`,
hi: `तुम्हारे पास job नहीं है।
लेकिन समय है।
use करो।
skills सीखो।
projects बनाओ।
daily apply करो।
resume सुधारो।
lazy मत बनो।
daily काम करो।
यह phase future बनाता है।`
},
{
title: "BREAKUP",
en: `You lost someone.
Pain is real,But don't lose yourself.
Accept it,Stop chasing.
Focus on healing.
Improve yourself,Build strength.
Move forward.
You are rebuilding.`,
hi: `तुमने किसी को खो दिया।
दर्द असली है।
खुद को मत खोओ।
accept करो।
chasing बंद करो।
heal करो।
self improve करो,strong बनो।
आगे बढ़ो।
तुम rebuild हो रहे हो।`
},
{
title: "OVERTHINKING",
en: `Too many thoughts.
No action,Stop.
Take one step,Start small.
Act fast,Adjust later.
Keep moving.
Clarity comes from action.`,
hi: `बहुत सोच।
कोई action नहीं।
रुको।
एक step लो।
छोटा शुरू करो।
जल्दी act करो।
बाद में सुधारो।
आगे बढ़ो।
clarity action से आती है।`
},
{
title: "EXAM FAILURE",
en: `You failed your exam.
Everyone expected more.
You feel ashamed,But one result doesn't define you.
Analyze mistakes.
Study smarter,Stay disciplined.
Remove distractions,Try again.
Your future is still in your hands.`,
hi: `तुम परीक्षा में फेल हो गए।
सबको तुमसे उम्मीद थी।
तुम शर्म महसूस कर रहे हो।
लेकिन एक result तुम्हें define नहीं करता।
गलतियाँ समझो।
अच्छा पढ़ो।
discipline रखो।
distractions हटाओ।
फिर कोशिश करो।
तुम्हारा future अभी भी तुम्हारे हाथ में है।`
},
{
title: "BREAKUP PAIN",
en: `You lost someone you loved.
It hurts deeply.
You feel empty,But don't lose yourself.
Focus on healing,Take time,Build your life.
Grow stronger.
Move forward,Right person will come at right time.`,
hi: `तुमने अपने किसी खास को खो दिया।
बहुत दर्द हो रहा है।
अंदर खालीपन है।
लेकिन खुद को मत खोओ,healing पर ध्यान दो।
समय लो,अपनी जिंदगी बनाओ।
strong बनो।
आगे बढ़ो।
सही इंसान सही समय पर आएगा।`
},
{
title: "NO JOB",
en: `You are unemployed.
Days feel heavy,Pressure is building.
But don't panic,Learn new skills,Apply daily.
Stay consistent,Improve resume.
Stay patient,Opportunities will come.`,
hi: `तुम बेरोजगार हो।
दिन भारी लगते हैं।
pressure बढ़ रहा है।
लेकिन घबराओ मत,नई skills सीखो।
daily apply करो,consistent रहो।
resume improve करो।
patience रखो।
opportunities आएंगी।`
},
{
title: "LAZY HABITS",
en: `You waste time daily.
No progress.
You feel guilty,Time to change.
Wake up early,Plan your day.
Limit distractions,Stay disciplined.
Take action,Small habits change life.`,
hi: `तुम रोज समय बर्बाद करते हो।
कोई progress नहीं।
guilty feel करते हो।
अब बदलने का समय है।
जल्दी उठो।
दिन plan करो।
distractions कम करो,discipline रखो,action लो,
छोटी आदतें जिंदगी बदलती हैं।`
},
{
title: "COMPARING YOURSELF",
en: `You compare with others.
You feel behind,
Stop,
Everyone has different timing,
Focus on your journey,Improve daily,Ignore comparison.
Stay consistent,Trust yourself.
Your path is unique.`,
hi: `तुम दूसरों से compare करते हो।
तुम पीछे महसूस करते हो।
रुको।
हर किसी का timing अलग होता है।
अपने सफर पर ध्यान दो।
daily improve करो।
comparison छोड़ो।
consistent रहो।
खुद पर भरोसा रखो।
तुम्हारा रास्ता अलग है।`
}
,
{
title: "EXAM FAILURE",
en: `You failed your exam.
Everyone expected more.
You feel ashamed.
But one result doesn't define you.
Analyze mistakes,Study smarter.
Stay disciplined.
Remove distractions.
Try again.
Your future is still in your hands.`,
hi: `तुम परीक्षा में फेल हो गए।
सबको तुमसे उम्मीद थी।
तुम शर्म महसूस कर रहे हो।
लेकिन एक result तुम्हें define नहीं करता।
गलतियाँ समझो।
अच्छा पढ़ो।
discipline रखो।
distractions हटाओ।
फिर कोशिश करो।
तुम्हारा future अभी भी तुम्हारे हाथ में है।`
},
{
title: "BREAKUP PAIN",
en: `You lost someone you loved.
It hurts deeply.
You feel empty,But don't lose yourself.
Focus on healing.
Take time,Build your life.
Grow stronger.
Move forward.
Right person will come at right time.`,
hi: `तुमने अपने किसी खास को खो दिया।
बहुत दर्द हो रहा है।
अंदर खालीपन है।
लेकिन खुद को मत खोओ।
healing पर ध्यान दो।
समय लो।
अपनी जिंदगी बनाओ।
strong बनो।
आगे बढ़ो।
सही इंसान सही समय पर आएगा।`
},
{
title: "NO JOB",
en: `You are unemployed.
Days feel heavy,Pressure is building.
But don't panic.
Learn new skills.
Apply daily,Stay consistent.
Improve resume.
Stay patient.
Opportunities will come.`,
hi: `तुम बेरोजगार हो।
दिन भारी लगते हैं।
pressure बढ़ रहा है।
लेकिन घबराओ मत।
नई skills सीखो।
daily apply करो।
consistent रहो।
resume improve करो।
patience रखो।
opportunities आएंगी।`
}
//(UNIQUE LOGIC)
];
const extraTitles = [
"lazy","phone addiction","comparison","fear","discipline start",
"rejection","low confidence","late start","no skills","distraction",
"family pressure","regret","consistency","first success","comfort zone",
"time waste","anger","no focus","learning phase","hard days",
"routine break","doubt","no motivation","slow progress","discipline win",
"missed chance","fear of judgement","burnout","jealousy","second chance",
"focus mode","growth phase","final push","success peak","new beginning",
"career confusion","financial struggle","self doubt","lonely phase","failure streak",
"no clarity","procrastination","weak mindset","restart life","purpose search"
];
extraTitles.forEach(t => {
scenarios.push({
title: t.toUpperCase(),
en: `You are facing ${t}.
Life feels difficult.
But this is temporary,Accept reality.
Take control,Start small.
Stay consistent,Avoid distractions,Improve daily.
Build discipline,Focus deeply,Move forward.
Your future depends on what you do now.`,
hi: `तुम ${t} का सामना कर रहे हो।
यह मुश्किल है।
लेकिन temporary है।
accept करो,control लो।
छोटा शुरू करो।
consistent रहो।
distractions हटाओ,daily improve करो।
discipline बनाओ,focus रखो।
आगे बढ़ो।
तुम्हारा future अभी तय हो रहा है।`
});
});
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const indexList = document.getElementById("indexList");
const searchInput = document.getElementById("search");
let currentIndex = 0;
let currentLang = "en";
function showScenario(i) {
  stopVoice(); 
  currentIndex = i;
  const s = scenarios[i];
  titleEl.innerText = s.title;
  contentEl.innerText=s[currentLang];
  contentEl.className = " ";
 if (currentLang === "hi") {
  contentEl.classList.add("hindi");
}
  contentEl.innerText = s[currentLang];
  document.getElementById("scenarioBox");
  document.scrollIntoView({behavior:"smooth"});
}
function goToScenarios() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("scenarioPage").style.display = "block";
}
function goBack() {
  scenarioPage.style.display = "none";
  indexPage.style.display = "block";
}
function nextScenario() {
  const i = Math.floor(Math.random() * scenarios.length);
  showScenario(i);
}
document.getElementById("lang").addEventListener("change", e => {
  currentLang = e.target.value;
  showScenario(currentIndex);
});
function loadIndex(list) {
  indexList.innerHTML = "";
  list.forEach((s, i) => {
    const div = document.createElement("div");
    div.innerText = s.title;
    div.onclick = () => showScenario(i);
    indexList.appendChild(div);
  });
}
function showScenario(index) {
  currentIndex = index;
  const s = scenarios[index];
  document.getElementById("scenarioTitle").innerText = s.title;
  document.getElementById("scenarioText").innerText =s[currentLang].replace(/,/g, ", ");
  document.querySelectorAll("#indexList div").forEach(el => {
  el.classList.remove("active-item");
});
document.querySelectorAll("#indexList div")[index]?.classList.add("active-item");
  document.getElementById("scenarioBox").scrollIntoView({
    behavior: "smooth"
  });
}
function onScenarioChange(e) {
  const index = e.target.selectedIndex - 1;
  if (index < 0) return;
  console.log("Selected index:", index);
  console.log("Scenario:", scenarios[index]);
  showScenario(index);
}
searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = scenarios.filter(s =>
    s.title.toLowerCase().includes(val)
  );
  loadIndex(filtered);
});
function saveFavorite() {
  let fav = JSON.parse(localStorage.getItem("fav") || "[]");
  fav.push(scenarios[currentIndex]);
  localStorage.setItem("fav", JSON.stringify(fav));
  alert("Saved ❤️");
}
let currentSpeech = null;
function playVoice() {
  stopVoice();
  let text = scenarios[currentIndex][currentLang];
// remove English words for hindi
if (currentLang === "hi") {
  text=cleanText(text,currentLang);
  text = text.replace(/[A-Za-z]/g, "");
}
  const speech = new SpeechSynthesisUtterance(text);
  const lang = document.getElementById("lang").value;
if (lang === "hi") {
  speech.lang = "hi-IN";
} else {
  speech.lang = "en-US";
}
  const voices = speechSynthesis.getVoices();
  if (currentLang === "hi") {
    speech.lang = "hi-IN";
    speech.rate = 0.9;   // slower (more natural)
    speech.pitch = 1;    // normal tone
    speech.volume = 1;
    const hiVoice = voices.find(v => v.lang.includes("hi"));
    if (hiVoice) speech.voice = hiVoice;
  }
  else {
    speech.lang = "en-US";
    speech.rate = 0.9;   // slower (more natural)
    speech.pitch = 1;    // normal tone
    speech.volume = 1;
  }
  currentSpeech = speech;
  speechSynthesis.speak(speech);
}
function pauseVoice() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}
function resumeVoice() {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }
}
function stopVoice() {
  speechSynthesis.cancel();
}
function toggleVoiceMenu() {
  const menu = document.getElementById("voiceMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// REMOVE DUPLICATES BASED ON TITLE
const uniqueScenarios = [];
const seenTitles = new Set();
scenarios.forEach(s => {
  if (!seenTitles.has(s.title.toLowerCase())) {
    uniqueScenarios.push(s);
    seenTitles.add(s.title.toLowerCase());
  }
});
// Replace original array
scenarios.length = 0;
scenarios.push(...uniqueScenarios);
// INIT
loadIndex(scenarios);
console.log(scenarios.length);
/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
/* THEMES */
function changeTheme(theme) {
  document.body.classList.remove("sunset", "ocean");
  if (theme === "sunset") {
    document.body.classList.add("sunset");
  } else if (theme === "ocean") {
    document.body.classList.add("ocean");
  }
}
function speakMixed(text, lang) {
  const words = text.split(" ");
  words.forEach((word, index) => {
    let utter = new SpeechSynthesisUtterance(word);
    // Check Hindi or English
    if (/[\u0900-\u097F]/.test(word)) {
      utter.lang = "hi-IN"; // Hindi
    } else {
      utter.lang = "en-US"; // English
    }
    // small delay so words don't overlap
    setTimeout(() => {
      speechSynthesis.speak(utter);
    }, index * 400);
  });
}
function scrollToAbout(){
  document.getElementById("aboutSection").scrollIntoView({behavior:"smooth"});
}
function scrollToScenarios(){
  document.getElementById("scenarioSection").scrollIntoView({behavior:"smooth"});
  document.getElementById("indexPage").scrollIntoView({behavior:"smooth"});
}