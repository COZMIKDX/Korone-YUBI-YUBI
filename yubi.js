let koro_button = document.getElementById("koro-button");
let audio_elem = document.getElementById("audio");
let main_elem = document.getElementById("main");


let audioFiles = [
    "./assets/audio/korone_i_am_crazy.ogg",
    "./assets/audio/korone_scream_1.ogg",
    "./assets/audio/korone_scream_2_soap.ogg",
    "./assets/audio/korone_yubi_yubi.ogg"
];

let backgrounds = {
    idle:     "./assets/images/korone_idle.png",
    speaking: "./assets/images/korone_speaking.jpg"
}

function randomize_sound() {
    let index = Math.floor(Math.random() * (audioFiles.length));
    audio.src = audioFiles[index];
    audio.load();
}

function idle_bg() {
    
    main_elem.style.backgroundImage = `url(${backgrounds.idle})`;
    console.log("yubi idle");
}

function speak_bg() {
    main_elem.style.backgroundImage =`url(${backgrounds.speaking})`
    console.log("yubi speak");
}

function koro_koro() {
    randomize_sound();
    audio_elem.play();
    speak_bg();
}



koro_button.addEventListener("click", koro_koro, false);
audio.addEventListener("ended", idle_bg, false);