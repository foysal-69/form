// let bton = document.getElementById("btn");
// bton.addEventListener("click", bn);
// function bn(){
//     bton.innerHTML =(`done...`);
// };

const password = document.querySelector('input[type="password"]')
const hide_pass = document.querySelector(".hide-pass");
hide_pass.addEventListener('click', fromEventFUnction);

function fromEventFUnction(){
    let currentValue = password.getAttribute('type');
    if('password'=== currentValue){
        password.setAttribute('type','text');
        hide_pass.innerHTML = `<i class="fal fa-eye"></i>`;
        hide_pass.classList.add('show');
    }
    else if('text'=== currentValue){
        password.setAttribute('type','password');
        hide_pass.innerHTML = `<i class="fal fa-eye-slash"></i>`;
        hide_pass.classList.remove('show');
    }
}

