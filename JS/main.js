
/* let header__click__color = document.querySelector(".header__click__color"); */
let header__section = document.querySelector("#header__section");
let header__selection = document.querySelector("#header__selection");
let header__search = document.querySelector("#header__search");
let header__close = document.querySelector("#header__close");
let header__input = document.querySelector(".header__input")
let header__thriddiv = document.querySelector(".header__thriddiv");
let header__seventhdiv__close = document.querySelector("#header__seventhdiv__close");
let Header__location = document.querySelector("#Header__location");
let header__ninethdiv__ul = document.querySelector(".header__ninethdiv__ul");
let header__tenthdiv = document.querySelector(".header__tenthdiv");
let header__seventhdiv__cartype = document.querySelector("#header__seventhdiv__cartype");
let header__seventhdiv = document.querySelector(".header__seventhdiv");
let header__seventhdiv__carbrand =document.querySelector("#header__seventhdiv__carbrand"); 
let header__eleventhdiv = document.querySelector(".header__eleventhdiv");
let header__twelvthdiv = document.querySelector(".header__twelvthdiv");
let header__seventhdiv__price = document.querySelector("#header__seventhdiv__price");
let header__seventhdiv__yearmodel = document.querySelector("#header__seventhdiv__yearmodel"); 
let header__Thirteenthdiv = document.querySelector(".header__Thirteenthdiv");
let header__fourteenthdiv = document.querySelector(".header__fourteenthdiv");
let header__seventhdiv__gear = document.querySelector("#header__seventhdiv__gear");
let header__fifteenthdiv = document.querySelector(".header__fifteenthdiv");
let header__seventhdiv__saletype = document.querySelector("#header__seventhdiv__saletype");
let header__seventhdiv__platingending = document.querySelector("#header__seventhdiv__platingending");
let header__sixteenthdiv = document.querySelector(".header__sixteenthdiv");










header__section.onclick=()=>{
      header__close.classList.toggle("header__open");
}

header__selection.onclick=()=>{
      header__seventhdiv__close.classList.toggle("header__seventhdiv__open");

}

header__search.onclick=()=>{
      header__seventhdiv__close.classList.remove("header__seventhdiv__open");
}


header__input.onclick=()=>{
      header__seventhdiv__close.classList.add("header__seventhdiv__open");
      
}

Header__location.onclick=()=>{
      header__ninethdiv__ul.classList.toggle("header__ninethdiv__ul__close");
      Header__location.classList.toggle("header__click__color");
}

header__seventhdiv__carbrand.onclick=()=>{
      header__tenthdiv.classList.toggle("header__tenthdiv__open");
      header__seventhdiv__carbrand.classList.toggle("header__click__color");
}

header__seventhdiv__cartype.onclick=()=>{
      header__eleventhdiv.classList.toggle("header__eleventhdiv__open");
      header__seventhdiv__cartype.classList.toggle("header__click__color");
}

header__seventhdiv__price.onclick=()=>{
      header__twelvthdiv.classList.toggle("header__twelvthdiv__open");
      header__seventhdiv__price.classList.toggle("header__click__color");
}

header__seventhdiv__yearmodel.onclick=()=>{
      header__Thirteenthdiv.classList.toggle("header__Thirteenthdiv__open");
      header__seventhdiv__yearmodel .classList.toggle("header__click__color");
}

header__seventhdiv__gear.onclick=()=>{

      header__fourteenthdiv.classList.toggle("header__fourteenthdiv__open");
      header__seventhdiv__gear.classList.toggle("header__click__color");
}

header__seventhdiv__saletype.onclick=()=>{
      header__fifteenthdiv.classList.toggle("header__fifteenthdiv__open");
      header__seventhdiv__saletype.classList.toggle("header__click__color");
}


header__seventhdiv__platingending.onclick=()=>{
      header__sixteenthdiv.classList.toggle("header__sixteenthdiv__open");
      header__seventhdiv__platingending.classList.toggle("header__click__color");
}
















document.onclick=(e)=>{

      if(!header__section.contains(e.target)){
            header__close.classList.remove("header__open");
      }

      if(!header__thriddiv.contains(e.target) &&!Header__location.contains(e.target)&& !header__ninethdiv__ul.contains(e.target)&& !header__seventhdiv__cartype.contains(e.target)&&!header__tenthdiv.contains(e.target)&&!header__seventhdiv.contains(e.target)&&!header__eleventhdiv.contains(e.target)&&!header__twelvthdiv.contains(e.target)&&!header__Thirteenthdiv.contains(e.target)&&!header__fourteenthdiv.contains(e.target)&&!header__fifteenthdiv.contains(e.target)&&!header__sixteenthdiv.contains(e.target)){
            header__seventhdiv__close.classList.remove("header__seventhdiv__open");
      }

      if(!Header__location.contains(e.target) && !header__ninethdiv__ul.contains(e.target)){

            header__ninethdiv__ul.classList.remove("header__ninethdiv__ul__close");
            Header__location.classList.remove("header__click__color");
      }
        
      if(!header__ninethdiv__ul.contains(e.target)&& !header__seventhdiv__cartype.contains(e.target)&&!header__tenthdiv.contains(e.target)&&!header__seventhdiv__carbrand.contains(e.target)){

            header__tenthdiv.classList.remove("header__tenthdiv__open");
            header__seventhdiv__carbrand.classList.remove("header__click__color");
      }
         
      if(!header__ninethdiv__ul.contains(e.target)&& !header__seventhdiv__cartype.contains(e.target)&&!header__tenthdiv.contains(e.target)&&!header__eleventhdiv.contains(e.target)){

            header__eleventhdiv.classList.remove("header__eleventhdiv__open");
            header__seventhdiv__cartype.classList.remove("header__click__color");
      }

      if(!header__seventhdiv__price.contains(e.target)&&! header__twelvthdiv.contains(e.target)){

            header__twelvthdiv.classList.remove("header__twelvthdiv__open");
            header__seventhdiv__price.classList.remove("header__click__color");
      }
        
      if(!header__seventhdiv__yearmodel.contains(e.target)&&!header__Thirteenthdiv.contains(e.target)){

            header__Thirteenthdiv.classList.remove("header__Thirteenthdiv__open");
            header__seventhdiv__yearmodel .classList.remove("header__click__color");
      }
         
      if(!header__fourteenthdiv.contains(e.target)&&!header__seventhdiv__gear.contains(e.target)){
            header__fourteenthdiv.classList.remove("header__fourteenthdiv__open");
            header__seventhdiv__gear.classList.remove("header__click__color");
      }
       
      if(!header__fifteenthdiv.contains(e.target)&&!header__seventhdiv__saletype.contains(e.target)){

            header__fifteenthdiv.classList.remove("header__fifteenthdiv__open");
            header__seventhdiv__saletype.classList.remove("header__click__color");
      }
      
      if(!header__sixteenthdiv.contains(e.target)&&!header__seventhdiv__platingending.contains(e.target)){

            header__sixteenthdiv.classList.remove("header__sixteenthdiv__open");
            header__seventhdiv__platingending.classList.remove("header__click__color");
      }
}     


