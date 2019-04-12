let ads = document.getElementsByClassName('posters__item');
let preview = document.getElementsByClassName('posters__preview')[0];
let personas = document.getElementsByClassName('personas__crousel')[0].getElementsByTagName('img');
let displayPersona = document.getElementsByClassName('personas__info')[0];

for(let i = 0; i < ads.length; i++) {
    ads[i].addEventListener("click", e => {
        let img = e.currentTarget.getElementsByTagName("img")[0];
        openPreview(img);
    })
}

for(let i = 0; i < personas.length; i++) {
    personas[i].addEventListener('click', e => {
        let data = e.currentTarget.getAttribute('data');
        displayPersona.setAttribute('src',  'assets/img/' + data + '.png');
        for(let j = 0; j < personas.length; j++) {personas[j].classList.remove('active')}
        personas[i].classList.add('active');
    })
}

const openPreview = img => {    
    preview.style.display = 'block';
    preview.getElementsByTagName('img')[0].setAttribute('src', img.src);
}

const closePreview = () => {
    preview.style.display = 'none';
    preview.getElementsByTagName('img')[0].setAttribute('src', '');
}

const parseContent = (text, className) => document.getElementsByClassName(className)[0].innerHTML = text;