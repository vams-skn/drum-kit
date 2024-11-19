const kickAudio = new Audio('./sounds/kick-bass.mp3');
const crashAudio = new Audio('./sounds/crash.mp3');
const snareAudio = new Audio('./sounds/snare.mp3');
const tom1Audio = new Audio('./sounds/tom1.mp3');
const tom2Audio = new Audio('./sounds/tom2.mp3');
const tom3Audio = new Audio('./sounds/tom3.mp3');
const hihatAudio = new Audio('./sounds/hihat.mp3');

function playAudio(id){
    switch(id){
        case "kick":
            kickAudio.play();
            break;
        case "snare":
            snareAudio.play();
            break;
        case "hihat":
            hihatAudio.play();
            break;
        case "tom1":
            tom1Audio.play();
            break;
        case "tom2":
            tom2Audio.play();
            break;
        case "tom3":
            tom3Audio.play();
            break;
        case "cymbal":
            crashAudio.play();
            break;
        default:
            break;
    }
}

document.addEventListener('keydown',function(event){
    let ky = event.key.toLowerCase();
    switch(ky){
        case 'k':
            playAudio("kick");
            break;
        case 's':
            playAudio("snare");
            break;
        case 'r':
            playAudio("tom1");
            break;
        case 't':
            playAudio("tom2");
            break;
        case 'y':
            playAudio("tom3");
            break;
        case 'a':
            playAudio("cymbal");
            break;
        case 'l':
            playAudio("hihat");
            break;
        default:
            break;
    }
});

function check(){
    playAudio(this.getAttribute('id'));
}

const drums = document.getElementsByClassName('drum');
let drumTag = [...drums];
drumTag.forEach(drum => {
    drum.addEventListener('click',check,true);
});
