const themes = {
  galaxy: {
    name: "Galaxy Quest",
    short: "Make new friends among the stars.",
    color: "galaxy",
    start: "landing",
    items: {
      translator: "Star translator",
      berry: "Glow berry",
      map: "Comet map",
    },
    scenes: {
      landing: {
        title: "Moon Landing",
        art: "galaxy",
        text: "Your tiny rocket lands on a sparkly moon. A friendly beep comes from two paths.",
        choices: [
          { label: "Follow the beeps to a shiny console", next: "console" },
          { label: "Pick a glowing berry from the moon garden", item: "berry", next: "moonPath" },
        ],
      },
      console: {
        title: "The Helpful Console",
        art: "galaxy",
        text: "The console says, “HELLO, EXPLORER!” It gives you a gadget for understanding space words.",
        choices: [{ label: "Pack the star translator and find the beeps", item: "translator", next: "alienGate" }],
      },
      moonPath: {
        title: "A Twinkly Trail",
        art: "galaxy",
        text: "The berry glows in your backpack. The beeps lead to a round silver door.",
        choices: [{ label: "Knock three friendly times", next: "alienGate" }],
      },
      alienGate: {
        title: "The Silver Door",
        art: "galaxy",
        text: "A small alien pops out. Its antennae wiggle! It looks curious, not scary.",
        choices: [
          { label: "Use the star translator to say hello", needs: "translator", next: "alienFriend" },
          { label: "Draw a smiley face in moon dust", next: "alienFriend" },
          { label: "Go back for the helpful console", next: "console" },
        ],
      },
      alienFriend: {
        title: "New Space Friend",
        art: "galaxy",
        text: "“Welcome!” chirps Zib. Zib lost the route to the captain’s picnic. Your kind hello makes Zib smile.",
        choices: [
          { label: "Share your glow berry and ask about the route", needs: "berry", item: "map", next: "captain" },
          { label: "Help Zib remember the star shapes", item: "map", next: "captain" },
        ],
      },
      captain: {
        title: "Comet Picnic",
        art: "galaxy",
        text: "You use the comet map to find the captain. Everyone cheers for peaceful explorers!",
        choices: [{ label: "Ride the rainbow portal home", next: "win", final: true }],
      },
      win: {
        title: "Galaxy Hero!",
        art: "galaxy",
        text: "You made a new friend and solved the space puzzle with kindness. Your next mission will be even brighter!",
        choices: [{ label: "Choose another adventure", action: "home", final: true }],
      },
    },
  },
  jungle: {
    name: "Jungle Expedition",
    short: "Outsmart a speedy dinosaur.",
    color: "jungle",
    start: "river",
    items: {
      water: "Water canteen",
      whistle: "Bird whistle",
      compass: "Leaf compass",
    },
    scenes: {
      river: {
        title: "Jungle River",
        art: "jungle",
        text: "You find a bright jungle river. A trail of giant footprints crosses the mud.",
        choices: [
          { label: "Fill your canteen with fresh water", item: "water", next: "footprints" },
          { label: "Follow the giant footprints right away", next: "footprints" },
        ],
      },
      footprints: {
        title: "Giant Footprints",
        art: "jungle",
        text: "A young green dinosaur is blocking the trail. It sniffs the warm air and starts to chase you—quick, but not too close!",
        choices: [
          { label: "Offer it a cool drink of water", needs: "water", next: "dinoFriend" },
          { label: "Dash to the vine bridge", next: "vineBridge" },
          { label: "Go back to the river for supplies", next: "river" },
        ],
      },
      vineBridge: {
        title: "The Bouncy Bridge",
        art: "jungle escape",
        text: "Boing! The vine bridge is bouncy. You are safe on the other side, and you spot a clever little bird.",
        choices: [{ label: "Listen to the bird’s three-note song", item: "whistle", next: "dinoFriend" }],
      },
      dinoFriend: {
        title: "Dinosaur Detour",
        art: "jungle",
        text: "The dinosaur only wanted help finding its herd. Your water or bird song points it toward a sunny clearing!",
        choices: [
          { label: "Follow the dino’s friendly tail swish", item: "compass", next: "lookout" },
          { label: "Wave goodbye and follow the chirping birds", item: "compass", next: "lookout" },
        ],
      },
      lookout: {
        title: "Treetop Lookout",
        art: "jungle",
        text: "Your leaf compass points to the camp. From the lookout, you see your flag fluttering below.",
        choices: [{ label: "Zip-line safely to camp", next: "win", final: true }],
      },
      win: {
        title: "Jungle Pathfinder!",
        art: "jungle",
        text: "You escaped the dinosaur by staying calm and helping out. That is true explorer thinking!",
        choices: [{ label: "Choose another adventure", action: "home", final: true }],
      },
    },
  },
  ancient: {
    name: "Ancient Mystery",
    short: "Solve a sunny temple puzzle.",
    color: "ancient",
    start: "courtyard",
    items: {
      brush: "Dusting brush",
      sunTile: "Sun tile",
      water: "Water flask",
    },
    scenes: {
      courtyard: {
        title: "Temple Courtyard",
        art: "ancient",
        text: "You discover a golden temple. A wall shows a sun picture hidden under dusty sand.",
        choices: [
          { label: "Use a soft brush to uncover the picture", item: "brush", next: "mural" },
          { label: "Look for a safe path around the courtyard", next: "mural" },
        ],
      },
      mural: {
        title: "The Sun Mural",
        art: "ancient",
        text: "The mural has a missing sun tile. A fountain bubbles nearby, and a tiny tile shines at the bottom.",
        choices: [
          { label: "Scoop up the tile with your brush", needs: "brush", item: "sunTile", next: "hall" },
          { label: "Fill your flask, then try again carefully", item: "water", next: "fountain" },
        ],
      },
      fountain: {
        title: "Fountain Find",
        art: "ancient",
        text: "The water makes the little tile sparkle. You can see its safe edge now.",
        choices: [{ label: "Lift out the sun tile", item: "sunTile", next: "hall" }],
      },
      hall: {
        title: "Echo Hall",
        art: "ancient",
        text: "The sun tile opens a quiet hall. Suddenly, a soft “click” closes the door behind you. It is a puzzle room, not a dangerous one!",
        choices: [
          { label: "Place the sun tile in the glowing wall spot", needs: "sunTile", next: "chamber" },
          { label: "Follow the golden arrows back to the mural", next: "mural" },
        ],
      },
      chamber: {
        title: "The Trapped Chamber",
        art: "ancient escape",
        text: "The floor tiles hum a happy tune. You are in a trapped chamber, but the clues say: “Sun, water, then a jump!”",
        choices: [
          { label: "Sprinkle water on the dusty floor tiles", needs: "water", next: "escape" },
          { label: "Tap the sun tile and listen for the tune", needs: "sunTile", next: "escape" },
          { label: "Take a calm breath and follow the arrows back", next: "hall" },
        ],
      },
      escape: {
        title: "Secret Sky Door",
        art: "ancient",
        text: "The right tiles light up! You hop across them and a secret sky door opens. Great puzzle solving!",
        choices: [{ label: "Step into the sunshine", next: "win", final: true }],
      },
      win: {
        title: "Temple Puzzle Pro!",
        art: "ancient",
        text: "You escaped the chamber by noticing clues and trying again. The temple keeps your explorer secret safe!",
        choices: [{ label: "Choose another adventure", action: "home", final: true }],
      },
    },
  },
};

const state = { theme: null, scene: null, inventory: new Set(), sound: false };
const $ = (id) => document.getElementById(id);
const startScreen = $("start-screen");
const playScreen = $("play-screen");
const soundButton = $("sound-button");

function playTone(kind = "click") {
  if (!state.sound || !window.AudioContext) return;
  const audio = new AudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = kind === "win" ? "triangle" : "square";
  oscillator.frequency.value = kind === "win" ? 660 : 420;
  gain.gain.setValueAtTime(0.06, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.12);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.12);
}

function renderThemePicker() {
  $("theme-picker").innerHTML = Object.entries(themes).map(([key, theme]) => `
    <button class="theme-card ${theme.color}" type="button" data-theme="${key}">
      <span class="card-art" aria-hidden="true"></span>
      <h2>${theme.name}</h2>
      <p>${theme.short}</p>
      <span class="pick">START QUEST →</span>
    </button>`).join("");
}

function startQuest(themeKey) {
  state.theme = themeKey;
  state.scene = themes[themeKey].start;
  state.inventory = new Set();
  startScreen.hidden = true;
  playScreen.hidden = false;
  renderScene();
  $("scene-title").focus();
}

function renderInventory() {
  const theme = themes[state.theme];
  const items = [...state.inventory];
  $("backpack-empty").hidden = items.length > 0;
  $("inventory").innerHTML = items.map((item) => `<li>${theme.items[item]}</li>`).join("");
}

function renderScene() {
  const theme = themes[state.theme];
  const scene = theme.scenes[state.scene];
  const sceneIndex = Object.keys(theme.scenes).indexOf(state.scene);
  const progress = Math.round((sceneIndex / (Object.keys(theme.scenes).length - 1)) * 100);

  $("theme-name").textContent = theme.name.toUpperCase();
  $("scene-title").textContent = scene.title;
  $("scene-text").textContent = scene.text;
  $("scene-art").className = `scene-art ${scene.art}`;
  $("scene-art").setAttribute("aria-label", `${theme.name} pixel picture: ${scene.title}`);
  $("progress-bar").style.width = `${progress}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", progress);

  $("choices").innerHTML = scene.choices.map((choice, index) => {
    const locked = choice.needs && !state.inventory.has(choice.needs);
    const itemNote = locked ? `You need: ${theme.items[choice.needs]}` : "";
    return `<button class="choice${choice.final ? " final" : ""}" type="button" data-choice="${index}" ${locked ? "disabled" : ""}>
      <span>${choice.label}${itemNote ? `<small class="need">${itemNote}</small>` : ""}</span>
    </button>`;
  }).join("");
  renderInventory();
}

function choose(choiceIndex) {
  const choice = themes[state.theme].scenes[state.scene].choices[choiceIndex];
  if (choice.action === "home") {
    showHome();
    return;
  }
  if (choice.item) state.inventory.add(choice.item);
  state.scene = choice.next;
  playTone(choice.final ? "win" : "click");
  renderScene();
}

function showHome() {
  state.theme = null;
  state.scene = null;
  startScreen.hidden = false;
  playScreen.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("theme-picker").addEventListener("click", (event) => {
  const button = event.target.closest("[data-theme]");
  if (button) {
    playTone();
    startQuest(button.dataset.theme);
  }
});

$("choices").addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (button && !button.disabled) choose(Number(button.dataset.choice));
});

soundButton.addEventListener("click", () => {
  state.sound = !state.sound;
  soundButton.setAttribute("aria-pressed", state.sound);
  soundButton.querySelector(".button-label").textContent = state.sound ? "Sound on" : "Sound off";
  playTone();
});

$("restart-button").addEventListener("click", showHome);
renderThemePicker();
