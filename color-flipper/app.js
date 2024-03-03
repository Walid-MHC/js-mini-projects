
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('button');
const color = document.querySelector(".color");


btn.addEventListener('click', () => {
    let x = "#";
    for (var i = 0; i < 6; i++) {
        let y = Math.floor(Math.random()*(hex.length-1)) + 1;
        x += hex[y];
        document.body.style.backgroundColor = x;
        console.log
        color.innerHTML = x;
      }
})