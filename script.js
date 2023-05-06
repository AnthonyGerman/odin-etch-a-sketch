const container = document.querySelector('.container');
function createGrid (x) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let btn = document.createElement('button');
    btn.textContent = "Change Pixel Density";
    btn.addEventListener('click', () => {
        let x = prompt("Enter a number between 1 and 30: ");
        if (x > 30) {x = 30;}
        createGrid(x);
    });
    container.appendChild(btn);
    for (let i = 0; i < x * x; i++) {
        let div = document.createElement('div');
        div.setAttribute('style', `height: ${100 / x}%;`);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'blue';
        });
        container.insertBefore(div, container.firstChild);
        let height = div.offsetHeight;
        div.style.width = `${height}px`;
    }
}
createGrid(16);

