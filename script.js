let count = 0;

const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener("click",()=>{
    if(count < 0){
        count = 0;
    }
    count--;
    countDisplay.value = count;
    console.log(count);
})
increaseBtn.addEventListener("click",()=>{
    count++;
    countDisplay.value = count;
    console.log(count);
})
resetBtn.addEventListener("click",()=>{
    count = 0;
    countDisplay.value = count;
    console.log(count);
})

