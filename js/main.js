// slider
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let images = document.querySelector('.images');

right.onclick = function(){
    let active = document.querySelector('.active')
    active.classList.remove('active');
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add('active');
    }
    else{
        images.firstElementChild.classList.add('active');
    }
}

left.onclick = function(){
    let active = document.querySelector('.active');
    active.classList.remove("active")
    if(active.previousElementSibling!=null){
        active.previousElementSibling.classList.add("active");
    }else{
        images.lastElementChild.classList.add("active");
    }
}
//END

//Tab-Menu

let menuItem = document.querySelectorAll(".top div");
let content = document.querySelectorAll(".bottom div");
for(let items of menuItem){
    items.onclick = function(){
        let off = document.querySelector('.selected');
        off.classList.remove('selected')
        this.classList.add('selected')
        let items_id=this.getAttribute('data-id');
        for(let item of content){
            if(items_id == item.getAttribute('data-id')){
                item.className = "";
            }else{
                item.className="d-none";
            }
        }
    }
    
}

//To-Do-List
let add = document.getElementById('btn');

add.onclick =function(){
    let set = document.getElementById('inn').value.trim();
    if (set){
    let values = document.createElement("li");
    values.style.fontStyle = 'none'
    values.innerHTML = set;
    let main = document.getElementById('toDo');
    main.appendChild(values); 
    }
    else{
        alert('Bos ola bilmez')
    }
}

let remove = document.getElementById('btn_remove');

remove.onclick = function(){
    let ul = document.getElementById('toDo');
    let sett = document.getElementById('inn');
    let item = document.getElementById(item.value);
    ul.removeChild(item);
}