// Basic Call DOM 
const body = document.body

//...Counter....
// Elementi HTML del Counter
//Main Div
const contCounterElement =  document.createElement('div')
contCounterElement.classList.add('cont_counter','flex-c');
body.append(contCounterElement)

//Messaggio del Counter
const messageCounterElement = document.createElement('p')
messageCounterElement.setAttribute('id','message_counter');
contCounterElement.appendChild(messageCounterElement)

const btnContactElement = document.createElement('button')
btnContactElement.classList.add('btn_contact','hidden')
btnContactElement.textContent = 'Click Here!'
contCounterElement.appendChild(btnContactElement)

//Bottoni del Counter
const contCounterElement_2 = document.createElement('div')
contCounterElement_2.classList.add('counter','flex-c')
contCounterElement.appendChild(contCounterElement_2)

const btnDecraseElement = document.createElement('button')
btnDecraseElement.classList.add('btn_min')
btnDecraseElement.textContent = '-'
contCounterElement_2.appendChild(btnDecraseElement)

const numberContElement = document.createElement('div')
numberContElement.classList.add('number_ring','flex-c')
contCounterElement_2.appendChild(numberContElement)

const numberElement = document.createElement('p')
numberElement.classList.add('number_display')
numberElement.textContent = '0'
numberContElement.appendChild(numberElement)

const btnIncraseElement = document.createElement('button')
btnIncraseElement.classList.add('btn_plus')
btnIncraseElement.textContent = '+'
contCounterElement_2.appendChild(btnIncraseElement)

//Selezione degli elementi del counter
const buttonPlus = document.querySelector('.btn_plus')
const buttonMin = document.querySelector('.btn_min')
const counterDisplay = document.querySelector('.number_display')
const msgDisplay = document.getElementById('message_counter')
let total = 0;
const limit= 50;
//Aggiornamento del messaggio 
function updateMsgDisplay() {
    if(total <= 25 ){
        msgDisplay.textContent='Reach 50 to meet me'
    }else if(total >= 25 ){
        msgDisplay.textContent='Keep it up!'
    };
};
// Funzione che gestisce gli aggiornamenti grafici durante l'interazione con il counter
function updateCounterDisplay() {
    if(total > limit) { total = limit };
    if(total < 0){ total = 0 };
    
    // Aggiorna la visibilità del pulsante di apertura e il messaggio
    if(total == limit){
        buttonOpen.classList.remove('hidden');
        msgDisplay.classList.add('hidden');
    };

    if(total == 49){
        buttonOpen.classList.add('hidden');
        msgDisplay.classList.remove('hidden');  
    }

    // Aggiornamento del display del counter e dei colori
    counterDisplay.textContent= total;
    counterDisplay.style.setProperty('color', `rgb(185,${(total / limit) * 220},0)`);
    msgDisplay.style.setProperty('color', `rgb(185,${(total / limit) * 225},0)`);
    updateMsgDisplay()
};

//eventi che gestiscono i pulsanti + e -
buttonPlus.addEventListener('click', () =>{
    total++;
    updateCounterDisplay();
});

buttonMin.addEventListener('click', () =>{
    total--;
    updateCounterDisplay();
});

updateMsgDisplay();
updateCounterDisplay();

// ...Presentation Card...
// Creazione Elementi HTML della Presentation Card 
//Main Div
const contCardElement =  document.createElement('div');
contCardElement.classList.add('cont','hidden','pos-a-0');
body.append(contCardElement);

//Background Overlay
const divOverlayElem =  document.createElement('div');
divOverlayElem.classList.add('cont_overlay','pos-a-0');
contCardElement.appendChild(divOverlayElem);

// Container Presentation Card
const divCardElem =  document.createElement('div');
divCardElem.classList.add('card','flex-c');
contCardElement.appendChild(divCardElem);

//Img Profilo
const contImgElem =  document.createElement('div');
contImgElem.classList.add('container_img','flex-c');
divCardElem.appendChild(contImgElem);

const profileImgCard =  document.createElement('img');
profileImgCard.classList.add('image');
profileImgCard.src = './asset/img/Profileimg.png';
profileImgCard.alt = 'Image Profile';
contImgElem.appendChild(profileImgCard);


//Bottoni Link 
const contLinkElem =  document.createElement('div');
contLinkElem.classList.add('info','flex-c');
divCardElem.appendChild(contLinkElem);
const credits = document.createElement('h2');
credits.innerHTML = 'Developed by <br>Romagnoli Mario';
contLinkElem.appendChild(credits);
//Linkedin Link
const link_1 =  document.createElement('a');
link_1.setAttribute('id','link');
link_1.href ='https://www.linkedin.com/in/marioromagnoli016/';
link_1.target ='_blank';
link_1.rel = 'noreferrer noopener';
contLinkElem.appendChild(link_1);
const imgLink_1 =  document.createElement('img');
imgLink_1.classList.add('logo');
imgLink_1.src = '/asset/img/logo/LinkedIN_white.png';
imgLink_1.alt = 'Linkedin Profile';
link_1.appendChild(imgLink_1);
const textNode = document.createTextNode('Linkedin');
link_1.appendChild(textNode);
//Github Profile Link
const link_2 =  document.createElement('a');
link_2.setAttribute('id','link');
link_2.href ='https://github.com/Skelman016';
link_2.target ='_blank';
link_2.rel = 'noreferrer noopener';
contLinkElem.appendChild(link_2);
const imgLink_2 =  document.createElement('img');
imgLink_2.classList.add('logo');
imgLink_2.src = '/asset/img/logo/Github_white.png';
imgLink_2.alt = 'Github Profile';
link_2.appendChild(imgLink_2);
const textNode_2 = document.createTextNode('GitHub');
link_2.appendChild(textNode_2);
//Portfolio Link
const link_P = document.createElement('a');
link_P.setAttribute('id','link');
link_P.href ='https://skelman016.github.io/';
link_P.target ='_blank';
link_P.rel = 'noreferrer noopener';
contLinkElem.appendChild(link_P);
const imgLink_3 =  document.createElement('img');
imgLink_3.classList.add('logo');
imgLink_3.src = '/asset/img/logo/Github_white.png';
imgLink_3.alt = 'Github Profile';
link_P.appendChild(imgLink_3);
const textNode_3 = document.createTextNode('Portfolio');
link_P.appendChild(textNode_3);

//Tasto di Chiusura Card
const closingButton = document.createElement('p')
closingButton.setAttribute('id','close_button');
closingButton.textContent = 'Click here to close the window'
contCardElement.appendChild(closingButton)

//Selezione degli elementi della Card di presentazione
const buttonOpen = document.querySelector('.btn_contact');
const buttonClose = document.getElementById('close_button');
const ContainerCard = document.querySelector('.cont');

// Eventi dei pulsanti che consentono di aprire e chiudere la card di presentazione
buttonOpen.addEventListener('click', () => {
    ContainerCard.classList.remove('hidden');
    ContainerCard.classList.add('active');
});

buttonClose.addEventListener('click', () => {
    ContainerCard.classList.add('hidden');
    ContainerCard.classList.remove('active');
});