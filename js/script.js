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

