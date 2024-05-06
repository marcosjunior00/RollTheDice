const button = document.getElementById('roll');
const result = document.getElementById('result');
let loadingIcon = document.getElementById('loading');

const handleRollTheDice = () => {
    const data = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return data;
}

button.addEventListener('click', () => {
    result.textContent = '';
    loadingIcon.classList.toggle('visible');
    console.log(loadingIcon);
    setTimeout(() => {
        result.innerHTML = handleRollTheDice();
        loadingIcon.classList.toggle('visible');
        console.log(loadingIcon);
    }, 1500)
})
