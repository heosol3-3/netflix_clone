
let header = document.querySelector("#header");
console.log(header);

window.addEventListener("scroll",e=>{
  sclY = window.pageYOffset;
  if(sclY > 0){
   header.style.background = "#141414";
  }else{
    header.style.background = "transparent";
  }
})

let srch_btn = document.querySelector(".srch_btn");
let srch_lab = document.querySelector(".srch_btn>label");
let srch_inp = document.querySelector(".srch_btn>input");
console.log(srch_btn);
console.log(srch_inp);
console.log(srch_lab);

srch_lab.addEventListener("click",e=>{
  e.preventDefault();
  srch_btn.classList.toggle("on");
  srch_inp.classList.toggle("on");
  
})

let profile = document.querySelector(".search>ul>li:last-child");
let profile_inner = document.querySelector(".search>ul>li:last-child>div");
console.log(profile);
console.log(profile_inner);

profile.addEventListener("mouseover",e=>{
  e.currentTarget.classList.add("on");
})
profile.addEventListener("mouseleave",e=>{
  e.currentTarget.classList.remove("on");
})

let uls = document.querySelectorAll("#main>section>ul");
console.log(uls);
let arrow_left = document.querySelector("#main>section>div.arrow_left");

arrow_left.addEventListener("click",e=>{
  e.preventDefault();
  let ul = e.currentTarget.parentNode.querySelector("ul");
  let width = ul.firstElementChild.offsetWidth;
  ul.style.left = 0
})  

let arrow_right = document.querySelector("#main>section>div.arrow_right");

arrow_right.addEventListener("click",e=>{
  e.preventDefault();
  let ul = e.currentTarget.parentNode.querySelector("ul");
  let width = ul.firstElementChild.offsetWidth;
  ul.style.left = `-${width}px`;
})  

let arrow = document.querySelectorAll("#main>section>div");
console.log(arrow);
for(el of arrow){
  el.addEventListener("mouseover",e=>{
    e.currentTarget.classList.add("on");
  })  
  el.addEventListener("mouseleave",e=>{
    e.currentTarget.classList.remove("on");
  })  
}  

