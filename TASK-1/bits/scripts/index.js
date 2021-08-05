

const nbhome = document.getElementById('nb-home');
const nbprojects = document.getElementById('nb-projects');
const nbpricing = document.getElementById('nb-pricing');
const nbteam = document.getElementById('nb-team');
const nbblog = document.getElementById('nb-blog');
const nbcontact = document.getElementById('nb-contact');


nbhome.addEventListener('click', ()=>{
    nbhome.classList.add("active");
    nbprojects.classList.remove('active');
    nbpricing.classList.remove('active');
    nbteam.classList.remove('active');
    nbblog.classList.remove('active');
    nbcontact.classList.remove('active');
})

nbprojects.addEventListener('click', ()=>{
    nbprojects.classList.add("active");
    nbhome.classList.remove('active');
    nbpricing.classList.remove('active');
    nbteam.classList.remove('active');
    nbblog.classList.remove('active');
    nbcontact.classList.remove('active');
})

nbpricing.addEventListener('click', ()=>{
    nbpricing.classList.add("active");
    nbhome.classList.remove('active');
    nbprojects.classList.remove('active');
    nbteam.classList.remove('active');
    nbblog.classList.remove('active');
    nbcontact.classList.remove('active');
})

nbteam.addEventListener('click', ()=>{
    nbteam.classList.add("active");
    nbhome.classList.remove('active');
    nbpricing.classList.remove('active');
    nbprojects.classList.remove('active');
    nbblog.classList.remove('active');
    nbcontact.classList.remove('active');
})

nbblog.addEventListener('click', ()=>{
    nbblog.classList.add("active");
    nbhome.classList.remove('active');
    nbpricing.classList.remove('active');
    nbteam.classList.remove('active');
    nbprojects.classList.remove('active');
    nbcontact.classList.remove('active');
})

nbcontact.addEventListener('click', ()=>{
    nbcontact.classList.add("active");
    nbhome.classList.remove('active');
    nbpricing.classList.remove('active');
    nbteam.classList.remove('active');
    nbblog.classList.remove('active');
    nbprojects.classList.remove('active');
})
