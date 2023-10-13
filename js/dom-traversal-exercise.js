document.querySelector("button").addEventListener('click', ()=> {
    document.querySelectorAll("ul").forEach(ul => {
        ul.lastElementChild.style.backgroundColor = "yellow";
    });
});

document.querySelectorAll("h3").forEach(h3=> {
   h3.addEventListener('click', () => {
     h3.nextElementSibling.style.fontWeight = "bold";
   });
});

document.querySelectorAll("li").forEach(li => {
    li.addEventListener('click', ()=>{
        li.parentElement.firstElementChild.style.color = "blue";
    });
});

