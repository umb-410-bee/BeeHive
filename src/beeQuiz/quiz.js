const beePrompt = document.querySelector("#bee-quiz-prompt")

const beeInputYes = document.querySelector("#bee-quiz-input-yes");
const beeInputNo = document.querySelector("#bee-quiz-input-no");

const beeDisplayYes = document.querySelector("#bee-quiz-display-yes");
const beeDisplayNo = document.querySelector("#bee-quiz-display-no");

const background = document.querySelector("#background");

beeInputYes.addEventListener('click', function() {
    beePrompt.style.display = "none";
    beeDisplayYes.style.display = "block";
    background.style.animation = "background-pan linear infinite 0.5s";
})

beeInputNo.addEventListener('click', function() {
    beePrompt.style.display = "none";
    beeDisplayNo.style.display = "block";
    background.style.animation = "background-pan linear infinite 0s";
})