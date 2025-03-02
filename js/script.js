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