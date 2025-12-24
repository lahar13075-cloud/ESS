document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 ESS QUESTIONS ----------
const questions = [

{ q:"Environment refers to?", opts:["Surroundings of an organism","Only air","Only water","Only soil"], answer:"A" },
{ q:"Which of the following is a biotic component?", opts:["Plants","Air","Water","Soil"], answer:"A" },
{ q:"Which gas is most abundant in the atmosphere?", opts:["Nitrogen","Oxygen","Carbon dioxide","Hydrogen"], answer:"A" },
{ q:"Lithosphere mainly consists of?", opts:["Rocks","Water","Air","Living organisms"], answer:"A" },
{ q:"Hydrosphere includes?", opts:["Water bodies","Rocks","Soil","Atmosphere"], answer:"A" },

{ q:"Which is a renewable resource?", opts:["Solar energy","Coal","Petroleum","Natural gas"], answer:"A" },
{ q:"Non-renewable resources include?", opts:["Fossil fuels","Wind","Sunlight","Biomass"], answer:"A" },
{ q:"Forest is an example of?", opts:["Ecosystem","Population","Species","Community"], answer:"A" },
{ q:"Grassland ecosystem is dominated by?", opts:["Grasses","Trees","Algae","Shrubs"], answer:"A" },
{ q:"Producers in an ecosystem are?", opts:["Green plants","Animals","Fungi","Bacteria"], answer:"A" },

{ q:"Consumers depend on?", opts:["Producers","Decomposers","Abiotic factors","Sun"], answer:"A" },
{ q:"Primary consumers are?", opts:["Herbivores","Carnivores","Omnivores","Decomposers"], answer:"A" },
{ q:"Food chain starts with?", opts:["Producers","Consumers","Decomposers","Animals"], answer:"A" },
{ q:"Food web represents?", opts:["Interlinked food chains","Single food chain","Population","Habitat"], answer:"A" },
{ q:"Energy flow in ecosystem is?", opts:["Unidirectional","Bidirectional","Circular","Random"], answer:"A" },

{ q:"Which pyramid is always upright?", opts:["Energy pyramid","Biomass pyramid","Number pyramid","None"], answer:"A" },
{ q:"Decomposers include?", opts:["Bacteria and fungi","Plants","Herbivores","Carnivores"], answer:"A" },
{ q:"Biogeochemical cycles include?", opts:["Carbon cycle","Food chain","Energy flow","Population"], answer:"A" },
{ q:"Main reservoir of carbon is?", opts:["Atmosphere","Oceans","Forests","Soil"], answer:"A" },
{ q:"Nitrogen fixation converts nitrogen into?", opts:["Ammonia","Nitrate","Nitrite","Protein"], answer:"A" },

{ q:"Water cycle is driven by?", opts:["Solar energy","Wind","Gravity","Plants"], answer:"A" },
{ q:"Ozone layer is present in?", opts:["Stratosphere","Troposphere","Mesosphere","Thermosphere"], answer:"A" },
{ q:"Ozone depletion is caused by?", opts:["CFCs","CO2","SO2","NO2"], answer:"A" },
{ q:"Greenhouse effect is caused by?", opts:["Greenhouse gases","Oxygen","Nitrogen","Ozone"], answer:"A" },
{ q:"Major greenhouse gas is?", opts:["Carbon dioxide","Oxygen","Nitrogen","Helium"], answer:"A" },

{ q:"Global warming results in?", opts:["Rise in temperature","Earth cooling","More oxygen","More rainfall only"], answer:"A" },
{ q:"Climate change affects?", opts:["Ecosystems","Only humans","Only animals","Only plants"], answer:"A" },
{ q:"Biodiversity refers to?", opts:["Variety of life","Only animals","Only plants","Only microbes"], answer:"A" },
{ q:"Hotspots are areas of?", opts:["High biodiversity","Low population","High pollution","Low rainfall"], answer:"A" },
{ q:"India is rich in?", opts:["Biodiversity","Deserts","Tundra","Glaciers"], answer:"A" },

{ q:"Endangered species are those which?", opts:["Are at risk of extinction","Are extinct","Are invasive","Are domestic"], answer:"A" },
{ q:"Conservation of biodiversity means?", opts:["Protection of species","Killing predators","Deforestation","Urbanization"], answer:"A" },
{ q:"In-situ conservation includes?", opts:["National parks","Zoos","Botanical gardens","Aquariums"], answer:"A" },
{ q:"Ex-situ conservation includes?", opts:["Zoos","Biosphere reserves","Wildlife sanctuaries","National parks"], answer:"A" },
{ q:"Deforestation leads to?", opts:["Soil erosion","Rainfall increase","More oxygen","Less pollution"], answer:"A" },

{ q:"Soil erosion is caused by?", opts:["Deforestation","Afforestation","Crop rotation","Irrigation"], answer:"A" },
{ q:"Land degradation results in?", opts:["Loss of fertility","More yield","Better soil","More crops"], answer:"A" },
{ q:"Desertification means?", opts:["Conversion of land into desert","Forest growth","Urbanization","Flooding"], answer:"A" },
{ q:"Air pollution affects?", opts:["Respiratory system","Digestive system","Nervous system only","Muscles"], answer:"A" },
{ q:"Major air pollutant is?", opts:["Particulate matter","Oxygen","Nitrogen","Argon"], answer:"A" },

{ q:"Water pollution is caused by?", opts:["Industrial waste","Pure rain","Freshwater","Oxygen"], answer:"A" },
{ q:"Eutrophication occurs due to?", opts:["Excess nutrients","Lack of oxygen","Low temperature","Oil spills"], answer:"A" },
{ q:"Noise pollution affects?", opts:["Hearing","Vision","Taste","Smell"], answer:"A" },
{ q:"Solid waste includes?", opts:["Plastic","Water","Air","Gas"], answer:"A" },
{ q:"3R principle stands for?", opts:["Reduce Reuse Recycle","Remove Replace Repair","Reuse Reduce Recover","Recycle Remove Reduce"], answer:"A" },

{ q:"Plastic pollution mainly affects?", opts:["Marine life","Deserts","Mountains","Atmosphere"], answer:"A" },
{ q:"E-waste contains?", opts:["Toxic metals","Food waste","Plant waste","Paper"], answer:"A" },
{ q:"Sustainable development means?", opts:["Development without harming future","Fast development","Urban growth","Industrial growth"], answer:"A" },
{ q:"Renewable energy reduces?", opts:["Pollution","Energy","Electricity","Cost always"], answer:"A" },
{ q:"Solar energy source is?", opts:["Sun","Wind","Water","Coal"], answer:"A" },

{ q:"Wind energy is?", opts:["Renewable","Non-renewable","Exhaustible","Polluting"], answer:"A" },
{ q:"Hydropower uses?", opts:["Flowing water","Wind","Coal","Oil"], answer:"A" },
{ q:"Biogas is produced from?", opts:["Organic waste","Plastic","Metal","Glass"], answer:"A" },
{ q:"Environmental impact assessment evaluates?", opts:["Project impacts","Profits","Population","Weather"], answer:"A" },
{ q:"Public awareness helps in?", opts:["Environmental protection","Pollution increase","Deforestation","Resource depletion"], answer:"A" },
  
{ q:"Carrying capacity refers to?", opts:["Maximum population an environment can support","Total population","Birth rate","Death rate"], answer:"A" },
{ q:"Population explosion leads to?", opts:["Resource depletion","Resource conservation","Sustainability","Biodiversity increase"], answer:"A" },
{ q:"Urbanization mainly causes?", opts:["Environmental stress","Forest growth","Population control","Clean environment"], answer:"A" },
{ q:"Slums are associated with?", opts:["Poor sanitation","High income","Low population","Afforestation"], answer:"A" },
{ q:"Population pyramid shows?", opts:["Age distribution","Climate","Rainfall","Soil type"], answer:"A" },

{ q:"Human development index is based on?", opts:["Health education income","Population only","GDP only","Literacy only"], answer:"A" },
{ q:"Women empowerment leads to?", opts:["Population stabilization","Population explosion","More pollution","Resource loss"], answer:"A" },
{ q:"Value education promotes?", opts:["Environmental ethics","Pollution","Consumerism","Deforestation"], answer:"A" },
{ q:"Environmental ethics deals with?", opts:["Moral relationship with nature","Economic growth","Industrial profit","Urban planning"], answer:"A" },
{ q:"Anthropocentric view means?", opts:["Human-centered","Nature-centered","Animal-centered","Plant-centered"], answer:"A" },

{ q:"Ecocentric view focuses on?", opts:["Nature as whole","Only humans","Only animals","Only plants"], answer:"A" },
{ q:"Biocentric ethics emphasize?", opts:["All living beings","Only humans","Only plants","Only animals"], answer:"A" },
{ q:"Environmental movements aim to?", opts:["Protect environment","Increase pollution","Promote industries","Reduce biodiversity"], answer:"A" },
{ q:"Chipko movement is related to?", opts:["Forest conservation","Water conservation","Wildlife","Pollution control"], answer:"A" },
{ q:"Silent Valley movement protected?", opts:["Tropical forest","River","Wetland","Desert"], answer:"A" },

{ q:"Narmada Bachao Andolan is related to?", opts:["Dam construction","Forest fire","Mining","Urbanization"], answer:"A" },
{ q:"Environmental legislation helps in?", opts:["Pollution control","Pollution increase","Deforestation","Overexploitation"], answer:"A" },
{ q:"Air Act in India was enacted in?", opts:["1981","1972","1995","2001"], answer:"A" },
{ q:"Water Act in India was enacted in?", opts:["1974","1981","1990","2000"], answer:"A" },
{ q:"Wildlife Protection Act was enacted in?", opts:["1972","1980","1986","1991"], answer:"A" },

{ q:"Environment Protection Act was enacted in?", opts:["1986","1972","1991","2000"], answer:"A" },
{ q:"Polluter pays principle means?", opts:["Polluter bears cost","Government pays","Public pays","No one pays"], answer:"A" },
{ q:"Sustainable agriculture promotes?", opts:["Soil conservation","Soil erosion","Chemical use","Monoculture"], answer:"A" },
{ q:"Organic farming avoids?", opts:["Chemical fertilizers","Crop rotation","Manure","Compost"], answer:"A" },
{ q:"Integrated pest management reduces?", opts:["Chemical pesticides","Crop yield","Soil fertility","Food quality"], answer:"A" },

{ q:"Watershed management aims at?", opts:["Water conservation","Deforestation","Urbanization","Industrialization"], answer:"A" },
{ q:"Rainwater harvesting helps in?", opts:["Groundwater recharge","Flooding","Water wastage","Pollution"], answer:"A" },
{ q:"Climate mitigation focuses on?", opts:["Reducing emissions","Adapting only","Ignoring climate","Increasing emissions"], answer:"A" },
{ q:"Climate adaptation means?", opts:["Adjusting to climate change","Stopping climate","Increasing pollution","Ignoring impacts"], answer:"A" },
{ q:"Carbon footprint refers to?", opts:["Greenhouse gas emissions","Oxygen usage","Water usage","Soil erosion"], answer:"A" },

{ q:"Paris Agreement deals with?", opts:["Climate change","Biodiversity","Ozone depletion","Wildlife"], answer:"A" },
{ q:"Kyoto Protocol aims to reduce?", opts:["Greenhouse gases","Water pollution","Noise pollution","Solid waste"], answer:"A" },
{ q:"Earth Day is celebrated on?", opts:["April 22","June 5","March 21","May 1"], answer:"A" },
{ q:"World Environment Day is on?", opts:["June 5","April 22","July 11","March 22"], answer:"A" },
{ q:"Sustainable lifestyle promotes?", opts:["Resource conservation","Overconsumption","Waste generation","Pollution"], answer:"A" },
  
{ q:"Ozone hole was first discovered over?", opts:["Antarctica","Arctic","Asia","Africa"], answer:"A" },
{ q:"Montreal Protocol deals with?", opts:["Ozone depletion","Climate change","Biodiversity","Water pollution"], answer:"A" },
{ q:"Primary cause of acid rain is?", opts:["Sulphur dioxide","Carbon monoxide","Methane","Ozone"], answer:"A" },
{ q:"Acid rain affects?", opts:["Soil and water","Only air","Only humans","Only plants"], answer:"A" },
{ q:"Noise above safe limit causes?", opts:["Hearing loss","Better concentration","Sleep improvement","Energy gain"], answer:"A" },

{ q:"Thermal pollution mainly affects?", opts:["Aquatic life","Forests","Deserts","Mountains"], answer:"A" },
{ q:"Nuclear waste is?", opts:["Radioactive","Biodegradable","Harmless","Reusable"], answer:"A" },
{ q:"Radioactive pollution is caused by?", opts:["Nuclear reactions","Fossil fuels","Wind energy","Solar energy"], answer:"A" },
{ q:"Biomagnification occurs in?", opts:["Food chain","Water cycle","Carbon cycle","Nitrogen cycle"], answer:"A" },
{ q:"DDT accumulation is an example of?", opts:["Biomagnification","Biodegradation","Photosynthesis","Respiration"], answer:"A" },

];

let order = [];
let userAnswers = {};
let cur = 0;
let timerInterval = null;
let remainingSeconds = 0;
let animating = false;

const $ = id => document.getElementById(id);
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function pad(n){return n.toString().padStart(2,'0');}
function formatTime(s){return `${Math.floor(s/60)}:${pad(s%60)}`;}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

// THEME SWITCH
let light=false;
$("themeToggle").onclick=()=>{
  light=!light;
  if(light){
    document.body.style.background="#f4f4f4";
    document.body.style.color="#000";
    $("themeToggle").innerText="Dark Mode";
  } else {
    document.body.style.background="";
    document.body.style.color="";
    $("themeToggle").innerText="Light Mode";
  }
};

// START BUTTON
$("startBtn").onclick=()=>{
  const name = $("username").value.trim();
  if(!name){ alert("Enter name first"); return; }

  order = shuffle(Array.from(questions.keys()));
  $("totalCount").innerText = questions.length;

  $("startPage").style.display="none";
  $("quiz").style.display="block";

  remainingSeconds = 60 * 60;
  $("timerText").innerText = formatTime(remainingSeconds);

  timerInterval = setInterval(()=>{
    remainingSeconds--;
    if(remainingSeconds<=0){ clearInterval(timerInterval); submitTest(); }
    $("timerText").innerText = formatTime(remainingSeconds);
  },1000);

  renderStage();
  showQuestion(0);
};

// RENDER QUESTIONS
function renderStage(){
  const stage = $("qstage");
  stage.innerHTML="";

  questions.forEach((q,i)=>{
    const card = document.createElement("div");
    card.className="question-card";
    card.id="card"+i;
    card.style.display="none";

    let html = `<div class='qtext'><strong>Q${order.indexOf(i)+1}.</strong>
 ${q.q}</div><div class='options'>`;

    q.opts.forEach((o,j)=>{
      const letter = ["A","B","C","D"][j];
      html += `
        <label class="option">
          <input type="radio" name="q${i}" value="${letter}">
          <strong>${letter}.</strong> ${o}
        </label>`;
    });

    html += "</div>";
    card.innerHTML = html;
    stage.appendChild(card);
  });
}

// SHOW QUESTION
function showQuestion(pos){
  document.querySelectorAll(".question-card").forEach(c=>c.style.display="none");
  const card = $("card"+order[pos]);
  card.style.display="block";

  cur = pos;
  $("progressText").innerText = `Question ${cur+1} / ${questions.length}`;
 $("progressBar").style.width = ((cur + 1) / questions.length) * 100 + "%";
  $("prevBtn").style.display = cur>0 ? "inline-block" : "none";
  $("nextBtn").innerText = cur<questions.length-1 ? "Next" : "Submit";
}

$("nextBtn").onclick=()=>{
  saveCurrent();
  if(cur<questions.length-1) showQuestion(cur+1);
  else submitTest();
};

$("prevBtn").onclick=()=>{
  saveCurrent();
  showQuestion(cur-1);
};

function saveCurrent(){
  const sel = document.querySelector(`input[name="q${order[cur]}"]:checked`);
  if(sel) userAnswers[order[cur]] = sel.value;
  $("answeredCount").innerText = Object.keys(userAnswers).length;
}

// SUBMIT TEST
function submitTest(){
  if(timerInterval) clearInterval(timerInterval);
  saveCurrent();

  let score = 0;
  let wrongCount = 0;

  for(let i=0;i<questions.length;i++){
    if(userAnswers[i] === questions[i].answer){
      score++;
    } else {
      wrongCount++;
    }
  }

  $('qstage').style.display='none';
  document.querySelector('.controls').style.display='none';
  $('result').style.display='block';
  $('timerText').style.display='none';
  document.querySelector('.progress-wrap').style.display='none';

  const name = $('username').value.trim() || 'User';

 $('result').innerHTML = `
  <div style="font-size:22px;font-weight:700;margin-bottom:12px">
    ${capitalize(name)}, your score is ${score}/${questions.length}
  </div>

  <button class="btn ripple" style="margin-top:12px" onclick="finishTest()">
    Finish / Exit
  </button>
`;

  if(wrongCount > 0){
    const btn = document.createElement('button');
    btn.className = 'btn ripple';
    btn.style.marginTop = '12px';
    btn.innerText = 'Check Answers';
    btn.onclick = showAnswerPopup;
    $('result').appendChild(btn);
  }
}
function showAnswerPopup(){
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  const box = document.createElement('div');
  box.style.background = 'var(--card)';
  box.style.color = 'var(--text)';
  box.style.padding = '20px';
  box.style.borderRadius = '16px';
  box.style.width = '90%';
  box.style.maxWidth = '600px';
  box.style.maxHeight = '80vh';
  box.style.overflowY = 'auto';

  box.innerHTML = `<h3 style="margin-bottom:10px">Answer Review</h3>`;

  questions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const correct = q.answer;

    const row = document.createElement('div');
    row.style.padding = '8px';
    row.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

    if(!userAns){
      row.innerHTML = `Q${i+1} ⚠ Not Answered — <strong>Correct:</strong> ${correct}`;
    }
    else if(userAns === correct){
      row.innerHTML = `Q${i+1} ✔ Correct`;
      row.style.color = '#39ff14';
    }
    else{
      row.innerHTML = `Q${i+1} ❌ Wrong — <strong>Correct:</strong> ${correct}`;
      row.style.color = '#ff5c5c';
    }

    box.appendChild(row);
  });

  const close = document.createElement('button');
  close.className = 'btn';
  close.style.marginTop = '14px';
  close.innerText = 'Close';
  close.onclick = () => overlay.remove();

  box.appendChild(close);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
  });
function finishTest(){
  if(confirm("Are you sure you want to exit the test?")){
    window.location.reload(); // safest way to exit
  }
}
