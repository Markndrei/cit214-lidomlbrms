const container = document.getElementById('container');

const registraBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

registraBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});
loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});