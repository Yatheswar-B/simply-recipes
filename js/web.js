let navs = document.getElementById("navbar");
      let menu = document.querySelector(".menubutton");

       menu.addEventListener('click', () => {
        if (navs.style.height === '19rem') {
            navs.style.height='0';
        } else {
            navs.style.height='19rem';
        }
        });

let contactinfo=document.getElementById("contact0");
let contact=document.getElementById("contac");
let contact1=document.getElementById("contact");

    
contact.addEventListener("click",()=>{
    if (contactinfo.style.height === "450px") {
        contactinfo.style.height='0';
        
    }
    else{
        contactinfo.style.height='450px';
    }
})

contact1.addEventListener("click",()=>{
    if (contactinfo.style.height === "450px") {
        contactinfo.style.height='0';
        
    }
    else{
        contactinfo.style.height='450px';
    }
})