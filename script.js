const generateBtn = document.getElementById("generate");
const storyBox = document.getElementById("story");
const customName = document.getElementById("customName");

const names = [
    "Alex",
    "Emma",
    "John",
    "Lily",
    "Charlie",
    "Sam",
    "Olivia",
    "David"
];

const places = [
    "Mars",
    "the Moon",
    "a haunted castle",
    "a magical forest",
    "an underwater city",
    "a giant pizza shop",
    "the North Pole",
    "a secret laboratory"
];

const actions = [
    "started dancing with penguins",
    "challenged a dinosaur to a race",
    "ate 100 spicy noodles",
    "invented a flying bicycle",
    "sang karaoke with aliens",
    "turned into a superhero",
    "found a treasure chest",
    "built a robot elephant"
];

const endings = [
    "Everyone laughed for hours!",
    "It became the funniest day ever.",
    "The internet couldn't stop talking about it.",
    "Even the king applauded!",
    "The adventure became legendary.",
    "Nobody believed the story, but it was true!"
];

generateBtn.addEventListener("click", () => {

    let name =
        customName.value.trim() ||
        names[Math.floor(Math.random()*names.length)];

    let place =
        places[Math.floor(Math.random()*places.length)];

    let action =
        actions[Math.floor(Math.random()*actions.length)];

    let ending =
        endings[Math.floor(Math.random()*endings.length)];

    storyBox.innerHTML =
    `<strong>${name}</strong> went to <strong>${place}</strong>. 
    There, ${name} <strong>${action}</strong>. 
    Suddenly, a giant talking banana appeared and offered unlimited ice cream.
    ${ending} 😂`;
});
