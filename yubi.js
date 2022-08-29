let koro_button = document.getElementById("koro-button");
let audio_elem = document.getElementById("audio");
let main_elem = document.getElementById("main");


let audioFiles = [
    "https://cdn.discordapp.com/attachments/390737035792482314/1013554607508705300/korone_i_am_crazy.ogg",
    "https://cdn.discordapp.com/attachments/390737035792482314/1013554607814877315/korone_scream_1.ogg",
    "https://cdn.discordapp.com/attachments/390737035792482314/1013554608553066617/korone_scream_2_soap.ogg",
    "https://cdn.discordapp.com/attachments/390737035792482314/1013550185839874118/korone_yubi_yubi.ogg"
];

let backgrounds = {
    idle: "https://cdn.donmai.us/original/bf/0b/__inugami_korone_hololive_drawn_by_seramikku__bf0b36601ac6af49e9168ac5de700546.png",
    speaking: "https://cdn.donmai.us/original/46/23/__inugami_korone_hololive_drawn_by_seramikku__4623e4472ec412793b21757ac2ff60ea.jpg"
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
    // I stuck grabbing the main element here because I was having some loading problems.
    
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