// going anohter page

document.getElementById("anotherPage").addEventListener('click',function(){
    window.location.href = "./blog.html";
})

// change random color
function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

document.getElementById("changeColor").addEventListener('click',function(){
   document.body.style.backgroundColor = getRandomColor();
})

// date update 
function liveDate() {
    const dateElement = document.getElementById("currentDate");
    const nowDate = new Date();

    const convert = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = nowDate.toLocaleDateString('en-US', convert);

    dateElement.innerHTML = formattedDate.replace(",", "<br>");
}

window.onload = liveDate;

// button work

const checkBox = document.getElementById("checkbox");
const task = document.getElementById("taskAssign")
const btns = document.querySelectorAll(".cmplete-btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        console.log("Button clicked");
        if(event.target.classList.contains("cmplete-btn") && !event.target.disabled){
            let taskCount = parseInt(task.innerText);
            let ChecKbox = parseInt(checkBox.innerText);

            if(taskCount > 0){
                alert("Board updated successfully");
                task.innerText = (taskCount - 1);
                checkBox.innerText = ChecKbox + 1;
                event.target.disabled = true;
                event.target.style.backgroundColor = "gray";
            }
            let allDisabled = true;
            for (let btn of btns) {
                if (!btn.disabled) {
                    allDisabled = false;
                    break;
                }
            }

            if (allDisabled) {
                alert("You have completed all the tasks successfully");
            }
        }
    });
});


