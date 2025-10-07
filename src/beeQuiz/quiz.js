const beePrompt = document.querySelector("#bee-quiz-prompt")

const beeInputYes = document.querySelector("#bee-quiz-input-yes");
const beeInputNo = document.querySelector("#bee-quiz-input-no");

const beeDisplayYes = document.querySelector("#bee-quiz-display-yes");
const beeDisplayNo = document.querySelector("#bee-quiz-display-no");

beeInputYes.addEventListener('click', function() {
    beePrompt.style.display = "none";
    beeDisplayYes.style.display = "block";
})

beeInputNo.addEventListener('click', function() {
    beePrompt.style.display = "none";
    beeDisplayNo.style.display = "block";
})