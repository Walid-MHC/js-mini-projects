const buttons = document.querySelectorAll('.button');
const counter = document.querySelector('.counter');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        let counterValue = counter.innerHTML;
        if(button.classList.contains("increase")){
            counterValue++;
        } else if(button.classList.contains("decrease")){
            counterValue--;
        } else if(button.classList.contains("reset")){
            counterValue = 0;
        }

        counter.innerHTML = counterValue;
        counterColor();

        console.log(counter.innerHTML);
    })
})

counterColor();


function counterColor(){
    if(counter.innerHTML == 0){
        counter.style.color = 'gray';
    } else if (counter.innerHTML > 0){
        counter.style.color = 'green';
    } else if (counter.innerHTML < 0){
        counter.style.color = 'red';
    }
}