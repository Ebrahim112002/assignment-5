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


// add a new log entry to the activity log
function addActivityLog(taskTitle) {
    const activityLog = document.getElementById("activityLog");
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: true });

    // Create a new log 
    const logEntry = document.createElement("div");
    logEntry.className = "p-4 border-b border-dashed border-[#3752fd]/20 last:border-b-0";
    logEntry.innerHTML = `
    <div class = "py-6 w-full p-2.5 bg-[#f4f7ff] rounded-2xl justify-center items-start gap-2.5 inline-flex">
        <p class="text-[#00303c]  text-base font-medium tracking-wide">You have completed the task : <span class="font-bold">${taskTitle} at ${timeString}</span> </p>
        
        </div>
    `;

    activityLog.appendChild(logEntry);
    activityLog.classList.remove("hidden");
}

// Button work
const checkBox = document.getElementById("checkbox");
const task = document.getElementById("taskAssign");
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

                const taskTitle = event.target.closest('.task-card').querySelector('.task-item').innerText;

                addActivityLog(taskTitle);
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

// Clear History Button
document.querySelector("#clear-btn").addEventListener('click', function() {
    const activityLog = document.getElementById("activityLog");
    activityLog.innerHTML = ""; 
    activityLog.classList.add("hidden");
});
