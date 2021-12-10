//javascript
let lomake = document.forms['formNewKaveri'];
lomake.addEventListener('submit', uusiListaElementti)
const kaveritListalla = new Array();
function uusiListaElementti(event){
    
    event.preventDefault()

    // Haetaan elementille nimi input-kentästä
    let elementinNimi = document.querySelector('#main input[type="text"]').value;
    kaveritListalla.push(elementinNimi);
    console.log(kaveritListalla);

    // huomautus
    if(elementinNimi.length < 1){
        alert('Kenttä on tyhjä, kirjoita nimi.');
        return;
    }

    // Luodaan uusi li-elementti ja sille sisältö.
    let uusiElementti = document.createElement('li')
    let uusiElementtiTeksti = document.createTextNode(elementinNimi)
    uusiElementti.appendChild(uusiElementtiTeksti)
    uusiElementti.className = 'kaveri-item';

    // Lisätään uusi li-elementti oikeaan paikkaan.
    document.querySelector('#kaveriList').appendChild(uusiElementti)

    let kLen= kaveritListalla.length;
    let text= "<ul>";
    for (let i= 0; i < kLen; i++) {
        text+= "<li>" +  kaveritListalla[i] + " </li>";
    }
    text +="</ul>";
    document.getElementById('kaveriList').innerHTML= text;
}