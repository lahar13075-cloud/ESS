document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 ESS QUESTIONS ----------
const questions = [
  {
    q: "Environment refers to:",
    opts: [
      "Only living organisms",
      "Only physical surroundings",
      "Surroundings including biotic and abiotic components",
      "Only human-made structures"
    ],
    answer: "C"
  },
  {
    q: "Which is a non-renewable resource?",
    opts: [
      "Solar energy",
      "Wind energy",
      "Coal",
      "Biomass"
    ],
    answer: "C"
  },
  {
    q: "Which gas is mainly responsible for global warming?",
    opts: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: "B"
  },
  {
    q: "Biodiversity refers to:",
    opts: [
      "Variety of life forms on Earth",
      "Only plant diversity",
      "Only animal diversity",
      "Only microorganisms"
    ],
    answer: "A"
  },
  {
    q: "Which of the following is a renewable resource?",
    opts: [
      "Coal",
      "Petroleum",
      "Natural gas",
      "Wind energy"
    ],
    answer: "D"
  },
  {
    q: "Deforestation mainly leads to:",
    opts: [
      "Increase in rainfall",
      "Soil erosion",
      "Improved soil fertility",
      "Decrease in CO₂"
    ],
    answer: "B"
  },
  {
    q: "The ozone layer protects life on Earth by absorbing:",
    opts: [
      "Infrared radiation",
      "Visible light",
      "Ultraviolet radiation",
      "Gamma rays"
    ],
    answer: "C"
  },
  {
    q: "Which is an example of point source pollution?",
    opts: [
      "Vehicular emissions",
      "Industrial chimney",
      "Agricultural runoff",
      "Forest fires"
    ],
    answer: "B"
  },
  {
    q: "The main cause of acid rain is:",
    opts: [
      "CO₂ emissions",
      "SO₂ and NOx emissions",
      "Methane release",
      "Ozone depletion"
    ],
    answer: "B"
  },
  {
    q: "Which ecosystem has the highest biodiversity?",
    opts: [
      "Desert",
      "Grassland",
      "Tropical rainforest",
      "Tundra"
    ],
    answer: "C"
  },
  {
    q: "Noise pollution is measured in:",
    opts: [
      "Hertz",
      "Decibel",
      "Watt",
      "Pascal"
    ],
    answer: "B"
  },
  {
    q: "Which practice helps in conservation of water?",
    opts: [
      "Rainwater harvesting",
      "Deforestation",
      "Over-irrigation",
      "Industrial discharge"
    ],
    answer: "A"
  },
  {
    q: "Which of the following is a biodegradable waste?",
    opts: [
      "Plastic bottle",
      "Glass",
      "Aluminium can",
      "Vegetable waste"
    ],
    answer: "D"
  },
  {
    q: "Chipko movement is associated with:",
    opts: [
      "Water conservation",
      "Forest conservation",
      "Wildlife protection",
      "Air pollution control"
    ],
    answer: "B"
  },
  {
    q: "Which energy source causes minimum pollution?",
    opts: [
      "Coal",
      "Diesel",
      "Nuclear",
      "Solar"
    ],
    answer: "D"
  },
  {
    q: "Soil erosion can be prevented by:",
    opts: [
      "Afforestation",
      "Overgrazing",
      "Deforestation",
      "Mining"
    ],
    answer: "A"
  },
  {
    q: "Which gas causes depletion of ozone layer?",
    opts: [
      "Carbon dioxide",
      "Methane",
      "Chlorofluorocarbons",
      "Oxygen"
    ],
    answer: "C"
  },
  {
    q: "Which type of pollution affects water bodies?",
    opts: [
      "Thermal pollution",
      "Noise pollution",
      "Light pollution",
      "Soil pollution"
    ],
    answer: "A"
  },
  {
    q: "The full form of EIA is:",
    opts: [
      "Environmental Impact Assessment",
      "Ecological Industrial Act",
      "Environmental Information Analysis",
      "Energy Impact Authority"
    ],
    answer: "A"
  },
  {
    q: "Which practice reduces solid waste?",
    opts: [
      "Recycling",
      "Open dumping",
      "Incineration",
      "Landfilling"
    ],
    answer: "A"
  },
  {
    q: "Which is a primary consumer?",
    opts: [
      "Lion",
      "Deer",
      "Snake",
      "Eagle"
    ],
    answer: "B"
  },
  {
    q: "Greenhouse effect is caused by:",
    opts: [
      "Trapping of heat in atmosphere",
      "Reflection of sunlight",
      "Loss of oxygen",
      "Increase in wind speed"
    ],
    answer: "A"
  },
  {
    q: "Which of the following is a man-made disaster?",
    opts: [
      "Earthquake",
      "Flood",
      "Cyclone",
      "Industrial gas leak"
    ],
    answer: "D"
  },
  {
    q: "Which resource is inexhaustible?",
    opts: [
      "Coal",
      "Petroleum",
      "Solar energy",
      "Natural gas"
    ],
    answer: "C"
  },
  {
    q: "Wildlife Protection Act in India was enacted in:",
    opts: [
      "1952",
      "1972",
      "1985",
      "1991"
    ],
    answer: "B"
  },
{
  q: "The study of interaction between organisms and environment is called:",
  opts: [
    "Biology",
    "Ecology",
    "Geology",
    "Zoology"
  ],
  answer: "B"
},
{
  q: "Which of the following is a secondary consumer?",
  opts: [
    "Grass",
    "Deer",
    "Snake",
    "Phytoplankton"
  ],
  answer: "C"
},
{
  q: "Air pollution is mainly caused by:",
  opts: [
    "Volcanic eruptions",
    "Industrial emissions",
    "Earthquakes",
    "Ocean currents"
  ],
  answer: "B"
},
{
  q: "The main source of freshwater on Earth is:",
  opts: [
    "Oceans",
    "Rivers and lakes",
    "Ice caps and glaciers",
    "Groundwater only"
  ],
  answer: "C"
},
{
  q: "Which is NOT a greenhouse gas?",
  opts: [
    "Carbon dioxide",
    "Methane",
    "Nitrous oxide",
    "Nitrogen"
  ],
  answer: "D"
},
{
  q: "Which method helps in soil conservation?",
  opts: [
    "Terrace farming",
    "Over-irrigation",
    "Deforestation",
    "Shifting cultivation"
  ],
  answer: "A"
},
{
  q: "The main cause of water pollution is:",
  opts: [
    "Industrial effluents",
    "Rainfall",
    "Evaporation",
    "Condensation"
  ],
  answer: "A"
},
{
  q: "Which renewable energy source uses flowing water?",
  opts: [
    "Solar",
    "Wind",
    "Hydropower",
    "Biogas"
  ],
  answer: "C"
},
{
  q: "Which of the following is an abiotic component?",
  opts: [
    "Plants",
    "Animals",
    "Microorganisms",
    "Temperature"
  ],
  answer: "D"
},
{
  q: "The term ‘sustainable development’ was popularized by:",
  opts: [
    "Kyoto Protocol",
    "Brundtland Commission",
    "Rio Summit",
    "Montreal Protocol"
  ],
  answer: "B"
},
{
  q: "Which practice increases groundwater level?",
  opts: [
    "Rainwater harvesting",
    "Urbanization",
    "Deforestation",
    "Over-pumping"
  ],
  answer: "A"
},
{
  q: "Which pollutant causes smog?",
  opts: [
    "Sulphur dioxide",
    "Carbon monoxide",
    "Nitrogen oxides",
    "Chlorine"
  ],
  answer: "C"
},
{
  q: "Which type of waste can be composted?",
  opts: [
    "Plastic",
    "Organic waste",
    "Glass",
    "Metal"
  ],
  answer: "B"
},
{
  q: "Which act deals with prevention of air pollution in India?",
  opts: [
    "Water Act, 1974",
    "Environment Protection Act, 1986",
    "Air Act, 1981",
    "Wildlife Act, 1972"
  ],
  answer: "C"
},
{
  q: "The major source of marine pollution is:",
  opts: [
    "Oil spills",
    "Forest fires",
    "Volcanic eruptions",
    "Desert storms"
  ],
  answer: "A"
},
{
  q: "Which of the following is a fossil fuel?",
  opts: [
    "Wind energy",
    "Solar energy",
    "Coal",
    "Hydropower"
  ],
  answer: "C"
},
{
  q: "Eutrophication mainly affects:",
  opts: [
    "Air",
    "Soil",
    "Water bodies",
    "Forests"
  ],
  answer: "C"
},
{
  q: "Which is an example of non-point source pollution?",
  opts: [
    "Factory discharge pipe",
    "Sewage outlet",
    "Agricultural runoff",
    "Thermal power plant"
  ],
  answer: "C"
},
{
  q: "Which level of food chain has maximum energy?",
  opts: [
    "Primary producers",
    "Primary consumers",
    "Secondary consumers",
    "Tertiary consumers"
  ],
  answer: "A"
},
{
  q: "Which environmental problem is caused by excess fertilizers?",
  opts: [
    "Global warming",
    "Acid rain",
    "Eutrophication",
    "Ozone depletion"
  ],
  answer: "C"
},
{
  q: "Which of the following conserves biodiversity?",
  opts: [
    "Poaching",
    "Habitat destruction",
    "Wildlife sanctuaries",
    "Urbanization"
  ],
  answer: "C"
},
{
  q: "Which gas is released during decomposition of organic waste?",
  opts: [
    "Oxygen",
    "Methane",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "B"
},
{
  q: "Which one is a natural disaster?",
  opts: [
    "Industrial explosion",
    "Nuclear accident",
    "Earthquake",
    "Oil spill"
  ],
  answer: "C"
},
{
  q: "The main objective of wildlife conservation is:",
  opts: [
    "Tourism development",
    "Economic growth",
    "Protection of species",
    "Urban expansion"
  ],
  answer: "C"
},
{
  q: "Which practice reduces air pollution?",
  opts: [
    "Use of public transport",
    "Burning fossil fuels",
    "Deforestation",
    "Open waste burning"
  ],
  answer: "A"
},
{
  q: "Which of the following is a biotic component of ecosystem?",
  opts: [
    "Water",
    "Soil",
    "Plants",
    "Temperature"
  ],
  answer: "C"
},
{
  q: "Which renewable resource is derived from plant and animal waste?",
  opts: [
    "Solar energy",
    "Wind energy",
    "Biogas",
    "Hydropower"
  ],
  answer: "C"
},
{
  q: "Deforestation mainly results in:",
  opts: [
    "Increase in rainfall",
    "Loss of biodiversity",
    "Improved soil fertility",
    "Lower temperature"
  ],
  answer: "B"
},
{
  q: "Which layer of atmosphere contains ozone?",
  opts: [
    "Troposphere",
    "Mesosphere",
    "Stratosphere",
    "Thermosphere"
  ],
  answer: "C"
},
{
  q: "Which one is an example of renewable energy?",
  opts: [
    "Coal",
    "Petroleum",
    "Natural gas",
    "Solar energy"
  ],
  answer: "D"
},
{
  q: "Noise pollution is measured in:",
  opts: [
    "Hertz",
    "Decibel",
    "Pascal",
    "Watt"
  ],
  answer: "B"
},
{
  q: "Which of the following causes ozone layer depletion?",
  opts: [
    "Carbon dioxide",
    "Sulphur dioxide",
    "Chlorofluorocarbons",
    "Nitrogen"
  ],
  answer: "C"
},
{
  q: "Which practice helps in reducing solid waste?",
  opts: [
    "Recycling",
    "Landfilling",
    "Incineration",
    "Dumping"
  ],
  answer: "A"
},
{
  q: "Which ecosystem has the highest biodiversity?",
  opts: [
    "Desert",
    "Tundra",
    "Tropical rainforest",
    "Grassland"
  ],
  answer: "C"
},
{
  q: "Which gas is mainly responsible for global warming?",
  opts: [
    "Oxygen",
    "Carbon dioxide",
    "Nitrogen",
    "Helium"
  ],
  answer: "B"
},
{
  q: "Which one is a primary consumer?",
  opts: [
    "Grass",
    "Tiger",
    "Deer",
    "Eagle"
  ],
  answer: "C"
},
{
  q: "The main source of energy in an ecosystem is:",
  opts: [
    "Wind",
    "Sun",
    "Water",
    "Soil"
  ],
  answer: "B"
},
{
  q: "Which of the following is a non-renewable resource?",
  opts: [
    "Wind",
    "Solar",
    "Coal",
    "Biomass"
  ],
  answer: "C"
},
{
  q: "Which phenomenon leads to rise in sea level?",
  opts: [
    "Deforestation",
    "Glacial melting",
    "Earthquake",
    "Volcanic eruption"
  ],
  answer: "B"
},
{
  q: "Which type of pollution affects hearing ability?",
  opts: [
    "Water pollution",
    "Soil pollution",
    "Noise pollution",
    "Air pollution"
  ],
  answer: "C"
},
{
  q: "Which of the following is a biodegradable waste?",
  opts: [
    "Plastic bag",
    "Glass bottle",
    "Vegetable waste",
    "Metal can"
  ],
  answer: "C"
},
{
  q: "Which international agreement deals with climate change?",
  opts: [
    "Montreal Protocol",
    "Kyoto Protocol",
    "Basel Convention",
    "Stockholm Convention"
  ],
  answer: "B"
},
{
  q: "Which activity increases carbon footprint?",
  opts: [
    "Cycling",
    "Planting trees",
    "Using fossil fuels",
    "Rainwater harvesting"
  ],
  answer: "C"
},
{
  q: "Which is an example of in-situ conservation?",
  opts: [
    "Zoo",
    "Botanical garden",
    "National park",
    "Seed bank"
  ],
  answer: "C"
},
{
  q: "Which pollutant causes acid rain?",
  opts: [
    "Carbon monoxide",
    "Sulphur dioxide",
    "Methane",
    "Ozone"
  ],
  answer: "B"
},
{
  q: "Which of the following is a man-made disaster?",
  opts: [
    "Flood",
    "Cyclone",
    "Earthquake",
    "Nuclear accident"
  ],
  answer: "D"
},
{
  q: "Which resource is conserved by using LED bulbs?",
  opts: [
    "Water",
    "Electricity",
    "Soil",
    "Air"
  ],
  answer: "B"
},
{
  q: "Which environmental issue is caused by excessive mining?",
  opts: [
    "Soil erosion",
    "Ozone depletion",
    "Global cooling",
    "Eutrophication"
  ],
  answer: "A"
},
{
  q: "Which practice promotes sustainable agriculture?",
  opts: [
    "Crop rotation",
    "Monocropping",
    "Overgrazing",
    "Excess fertilizer use"
  ],
  answer: "A"
},
{
  q: "Which of the following reduces water pollution?",
  opts: [
    "Untreated sewage discharge",
    "Industrial dumping",
    "Wastewater treatment",
    "Oil spill"
  ],
  answer: "C"
},
{
  q: "Which of the following is a secondary consumer?",
  opts: [
    "Grass",
    "Goat",
    "Snake",
    "Phytoplankton"
  ],
  answer: "C"
},
{
  q: "Which method helps conserve groundwater?",
  opts: [
    "Deforestation",
    "Rainwater harvesting",
    "Over-irrigation",
    "Sand mining"
  ],
  answer: "B"
},
{
  q: "Which gas is released during decomposition of organic waste?",
  opts: [
    "Oxygen",
    "Nitrogen",
    "Methane",
    "Hydrogen"
  ],
  answer: "C"
},
{
  q: "Which resource takes millions of years to form?",
  opts: [
    "Solar energy",
    "Wind energy",
    "Coal",
    "Tidal energy"
  ],
  answer: "C"
},
{
  q: "Which environmental movement started in India to protect trees?",
  opts: [
    "Narmada Bachao Andolan",
    "Chipko Movement",
    "Greenpeace",
    "Silent Valley Movement"
  ],
  answer: "B"
},
{
  q: "Which type of waste is hospital waste?",
  opts: [
    "Domestic waste",
    "Industrial waste",
    "Biomedical waste",
    "Agricultural waste"
  ],
  answer: "C"
},
{
  q: "Which one is a fossil fuel?",
  opts: [
    "Biogas",
    "Coal",
    "Solar",
    "Wind"
  ],
  answer: "B"
},
{
  q: "Which practice causes land degradation?",
  opts: [
    "Afforestation",
    "Crop rotation",
    "Overgrazing",
    "Organic farming"
  ],
  answer: "C"
},
{
  q: "Which environmental factor affects climate?",
  opts: [
    "Latitude",
    "Longitude",
    "Altitude",
    "All of the above"
  ],
  answer: "D"
},
{
  q: "Which sector consumes the maximum freshwater globally?",
  opts: [
    "Domestic",
    "Industrial",
    "Agricultural",
    "Recreational"
  ],
  answer: "C"
},
{
  q: "Which of the following causes eutrophication?",
  opts: [
    "Oil spills",
    "Excess fertilizers",
    "Plastic waste",
    "Thermal pollution"
  ],
  answer: "B"
},
{
  q: "Which species is at highest risk of extinction?",
  opts: [
    "Endangered species",
    "Dominant species",
    "Invasive species",
    "Keystone species"
  ],
  answer: "A"
},
{
  q: "Which device is used to control air pollution in industries?",
  opts: [
    "Electrostatic precipitator",
    "Incinerator",
    "Composter",
    "Sedimentation tank"
  ],
  answer: "A"
},
{
  q: "Which type of farming reduces soil erosion?",
  opts: [
    "Shifting cultivation",
    "Contour farming",
    "Monoculture",
    "Slash and burn"
  ],
  answer: "B"
},
{
  q: "Which international day is celebrated as World Environment Day?",
  opts: [
    "June 5",
    "April 22",
    "March 21",
    "May 1"
  ],
  answer: "A"
},
{
  q: "Which renewable energy source uses flowing water?",
  opts: [
    "Wind energy",
    "Solar energy",
    "Hydroelectric power",
    "Geothermal energy"
  ],
  answer: "C"
},
{
  q: "Which of the following is a point source of pollution?",
  opts: [
    "Automobile exhaust",
    "Factory chimney",
    "Agricultural runoff",
    "Forest fire"
  ],
  answer: "B"
},
{
  q: "Which environmental problem results from excessive pesticide use?",
  opts: [
    "Biomagnification",
    "Ozone depletion",
    "Global cooling",
    "Acid rain"
  ],
  answer: "A"
},
{
  q: "Which process converts waste into energy?",
  opts: [
    "Landfilling",
    "Recycling",
    "Waste-to-energy",
    "Composting"
  ],
  answer: "C"
},
{
  q: "Which of the following is a natural disaster?",
  opts: [
    "Chemical spill",
    "Nuclear leakage",
    "Earthquake",
    "Industrial explosion"
  ],
  answer: "C"
},
{
  q: "Which ecosystem is found in coastal regions?",
  opts: [
    "Desert",
    "Grassland",
    "Mangrove",
    "Tundra"
  ],
  answer: "C"
},
{
  q: "Which gas is essential for respiration?",
  opts: [
    "Carbon dioxide",
    "Oxygen",
    "Nitrogen",
    "Ozone"
  ],
  answer: "B"
},
{
  q: "Which practice helps reduce air pollution?",
  opts: [
    "Using public transport",
    "Burning waste",
    "Deforestation",
    "Using diesel generators"
  ],
  answer: "A"
},
{
  q: "Which of the following is an abiotic factor?",
  opts: [
    "Bacteria",
    "Plants",
    "Animals",
    "Temperature"
  ],
  answer: "D"
},
{
  q: "Which law aims to protect wildlife in India?",
  opts: [
    "Forest Conservation Act",
    "Environment Protection Act",
    "Wildlife Protection Act",
    "Water Act"
  ],
  answer: "C"
}

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
