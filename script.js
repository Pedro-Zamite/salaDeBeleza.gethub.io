const menu_humburguer = document.querySelector("#menu_humburguer");
const nav = document.querySelector("nav");
AOS.init();

//! Aqui esta a formatacao do menu humberguer
menu_humburguer.addEventListener("click", ()=>{
    menu_humburguer.classList.toggle('active');
    nav.classList.toggle('navi');

    if(nav.classList.contains('navi'))

        nav.style.cssText = "right: -1%;";
    else
        nav.style.cssText = "right: -460px; ";
})

//? Aqui comeca o inicio da formatacao do slide depoimento
const depoimentos = document.querySelector("#slide_card");

function createCard() {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    return card;
}

const array_slide = [];

for (let i = 0; i < 4; i++) {
    const card = createCard();
    const p = document.createElement("p")
    card.appendChild(p)
    if(i == 0){
        card.setAttribute("id", "primeiro")
        card.style.cssText = "background-image: url('medium-shot-woman-spending-quality-time-outdoors.jpg'); background-position: center;   background-size: cover; color: #fff;"
  
            card.onmouseenter = () => {
                    p.innerHTML = "Lorem ipsum dolor sit amet.";  
            }     
            card.onmouseleave = () => {
                    p.innerHTML = " ";  
            }

    }
    if (i == 1) {
        card.style.cssText = "background-image: url('happy-woman-posing-medium-shot.jpg'); background-position: center;   background-size: cover; color: #fff;"
        
        card.onmouseenter = () => {
            p.innerHTML = "Lorem ipsum dolor sit amet.";  
    }     
        card.onmouseleave = () => {
            p.innerHTML = " ";  
    }

    } 
    if(i == 2) {
        
        card.style.cssText = "background-image: url('pensive-pretty-young-black-woman-standing-outdoors.jpg'); background-position: center;   background-size: cover; color: #fff;"
        
        card.onmouseenter = () => {
            p.innerHTML = "Lorem ipsum dolor sit amet.";  
    }     
        card.onmouseleave = () => {
            p.innerHTML = " ";  
    }

    }
    if(i == 3) {
        
        card.style.cssText = "background-image: url('mulher-senior-expressiva-posando.jpg'); background-position: center;   background-size: cover; color: #fff;"
        
        card.onmouseenter = () => {
            p.innerHTML = "Lorem ipsum dolor sit amet.";  
    }     
        card.onmouseleave = () => {
            p.innerHTML = " ";  
    }

    }
    array_slide.push(card);
    depoimentos.appendChild(card);

}

const btn_prev = document.querySelector("#btn_prev");
const btn_next = document.querySelector("#btn_next");


function atualizarSlide() {
    depoimentos.innerHTML = ""; // Limpa todos os cartões dentro do slide
    array_slide.forEach(card => {
        depoimentos.appendChild(card); // Adiciona os cartões atualizados
    });
}

btn_prev.addEventListener("click", () => {
    const firstCard = array_slide.shift(); // Remove o primeiro card
    array_slide.push(firstCard); // Adiciona o primeiro card no final
    atualizarSlide();
});

btn_next.addEventListener("click", () => {
    const lastCard = array_slide.pop(); // Remove o último card
    array_slide.unshift(lastCard); // Adiciona o último card no início do slide
    atualizarSlide();
});
