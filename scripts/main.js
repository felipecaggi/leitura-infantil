/* __________________________________ Stage Controller __________________________________ */

const audioController = () => {

    const buttons = document.querySelectorAll('button');
    audio_player = document.getElementById('audio');

    buttons.forEach((element) => {
        element.addEventListener('click', (event) => {
            const element = event.target;
            const audio_src = element.dataset.audio;
            audio_player.pause();
            audio_player.src = audio_src;
            audio_player.currentTime = 0;
            audio_player.play();
        });
    })
}

/* __________________________________ Stage Generate Code HTML __________________________________ */

// Object below contain the vowels, consonants, and syllables of the Portuguese alphabet;
// Values are vowels or consonants
// Data types are family consonants.
const alphabet = {
    A: 'vogal',
    B: 'consoante',
    C: 'consoante',
    D: 'consoante',
    E: 'vogal',
    F: 'consoante',
    G: 'consoante',
    H: 'consoante',
    I: 'vogal',
    J: 'consoante',
    K: 'consoante',
    L: 'consoante',
    M: 'consoante',
    N: 'consoante',
    O: 'vogal',
    P: 'consoante',
    Q: 'consoante',
    R: 'consoante',
    S: 'consoante',
    T: 'consoante',
    U: 'vogal',
    V: 'consoante',
    W: 'consoante',
    X: 'consoante',
    Y: 'consoante',
    Z: 'consoante'
}

// Object below contain the vowels, consonants, and syllables of the Portuguese alphabet;
// Values are vowels or consonants
// Data types are family consonants.
const syllables = {
    A: 'vogal',
    B: 'consoante', BA: 'silaba', BE: 'silaba', BI: 'silaba', BO: 'silaba', BU: 'silaba',
    C: 'consoante', CA: 'silaba', CE: 'silaba', CI: 'silaba', CO: 'silaba', CU: 'silaba',
    D: 'consoante', DA: 'silaba', DE: 'silaba', DI: 'silaba', DO: 'silaba', DU: 'silaba',
    E: 'vogal',
    F: 'consoante', FA: 'silaba', FE: 'silaba', FI: 'silaba', FO: 'silaba', FU: 'silaba',
    G: 'consoante', GA: 'silaba', GE: 'silaba', GI: 'silaba', GO: 'silaba', GU: 'silaba',
    H: 'consoante', HA: 'silaba', HE: 'silaba', HI: 'silaba', HO: 'silaba', HU: 'silaba',
    I: 'vogal',
    J: 'consoante', JA: 'silaba', JE: 'silaba', JI: 'silaba', JO: 'silaba', JU: 'silaba',
    K: 'consoante', KA: 'silaba', KE: 'silaba', KI: 'silaba', KO: 'silaba', KU: 'silaba',
    L: 'consoante', LA: 'silaba', LE: 'silaba', LI: 'silaba', LO: 'silaba', LU: 'silaba',
    M: 'consoante', MA: 'silaba', ME: 'silaba', MI: 'silaba', MO: 'silaba', MU: 'silaba',
    N: 'consoante', NA: 'silaba', NE: 'silaba', NI: 'silaba', NO: 'silaba', NU: 'silaba',
    O: 'vogal',
    P: 'consoante', PA: 'silaba', PE: 'silaba', PI: 'silaba', PO: 'silaba', PU: 'silaba',
    Q: 'consoante', QUA: 'silaba', QUE: 'silaba', QUI: 'silaba', QUO: 'silaba',
    R: 'consoante', RA: 'silaba', RE: 'silaba', RI: 'silaba', RO: 'silaba', RU: 'silaba',
    S: 'consoante', SA: 'silaba', SE: 'silaba', SI: 'silaba', SO: 'silaba', SU: 'silaba',
    T: 'consoante', TA: 'silaba', TE: 'silaba', TI: 'silaba', TO: 'silaba', TU: 'silaba',
    U: 'vogal',
    V: 'consoante', VA: 'silaba', VE: 'silaba', VI: 'silaba', VO: 'silaba', VU: 'silaba',
    W: 'consoante', WA: 'silaba', WE: 'silaba', WI: 'silaba', WO: 'silaba', WU: 'silaba',
    X: 'consoante', XA: 'silaba', XE: 'silaba', XI: 'silaba', XO: 'silaba', XU: 'silaba',
    Y: 'consoante', YA: 'silaba', YE: 'silaba', YI: 'silaba', YO: 'silaba', YU: 'silaba',
    Z: 'consoante', ZA: 'silaba', ZE: 'silaba', ZI: 'silaba', ZO: 'silaba', ZU: 'silaba'
}

const generateCode = (object_data) => {

    let return_text = ""; // Variable to store return HTML code 
 
    var firstSyllabe = true; // Boolean variable used not to put the closing tag '</li>' at the beginning

    for (value in object_data) {
        if ((object_data[value] === 'vogal' || object_data[value] === 'consoante') && !firstSyllabe){
            return_text +=`</li>    <li> `;
        }
        else if (firstSyllabe){ 
            return_text += `<li> `;
            firstSyllabe = false;
        }
        return_text += `<button class="${object_data[value]}" data-audio="audios/${value.toLowerCase()}.mp3">${value}</button> `;
    }
    return_text += `</li>`;

    // console.log(return_text);
    return return_text;
}

document.querySelector('.alphabet').innerHTML = generateCode(alphabet);
document.querySelector('.syllable').innerHTML = generateCode(syllables);