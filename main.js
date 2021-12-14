//javascript
let lomake = document.forms['formNewKaveri'];
lomake.addEventListener('submit', uusiListaElementti)
const kaveritListalla = new Array();


function uusiListaElementti(event){
    
    event.preventDefault()

    // Haetaan elementille nimi input-kentästä
    let elementinNimi = document.querySelector('#main input[type="text"]').value;

     // huomautus
     if(elementinNimi.length < 1){
        alert('Kenttä on tyhjä, kirjoita nimi.');
        return;
    }
    
    if (kaveritListalla.length >=10) {
        alert('Lista on täynnä!');
        return;
    } else {
        kaveritListalla.push(elementinNimi);
        console.log(kaveritListalla);
    }
        
    let kLen= kaveritListalla.length;
    let text= "";
    for (let i= 0; i < kLen; i++) {
        text+=  kaveritListalla[i] + "<br>";
        document.getElementById('kaveriList').innerHTML= text;
    }
    
    
}

