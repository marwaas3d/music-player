let cardImg = document.getElementById("card-img");
let cardTitle = document.getElementById("card-title");
let cardText = document.getElementById("card-text");
let songDuration = document.getElementById("song-duration");
let forward = document.getElementById("forward");
let back = document.getElementById("back");
let audio = document.getElementById("audio")

let music = [
    {
        id:1,
        img:'./resources/cover-2.jpg',
        name:'Forest Lullaby',
        text:'Lesfm',
        duration:'03:45',
        audio:'./resources/forest-lullaby-110624.mp3'
    },
    {
        id:2,
        img:'./resources/cover-1.jpg',
        name:'Lost in the City Lights',
        text:'Cosmo Sheldrake',
        duration:'03:15',
        audio:'./resources/lost-in-city-lights-145038.mp3'
    }
]

let currentIndex = 0;

function updateMusic() {
    let song = music[currentIndex];
    cardImg.src = song.img;
    cardTitle.textContent = song.name;
    cardText.textContent = song.text;
    songDuration.textContent = song.duration;
    audio.src = song.audio;
}

forward.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex > music.length) {
        currentIndex = 0;
    }
    updateMusic();
});

/****************************************************************** */
let playBtn = document.getElementById("playBtn")

let elapsed = document.getElementById("elapsed");
let progressBar =document.getElementById("progress-bar");

play.addEventListener("click", function(){
    if (play.classList.contains("play")){
        playBtn.src = "./resources/Pause_fill.svg";
        play.classList.remove("play");
        play.classList.add("paused");
        audio.play()
    }
    else if(play.classList.contains("paused")){
        playBtn.src = "./resources/Play_fill.svg";
        play.classList.remove("paused");
        play.classList.add("play");
        audio.pause();
    }
})




audio.addEventListener("timeupdate", function() {
  if (audio.duration > 0) {
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progressPercent + "%";
    progressBar.parentElement.setAttribute("aria-valuenow", progressPercent.toFixed(0));


    const currentTime = audio.currentTime;
    const minutes = Math.floor(currentTime/60);
    const seconds = Math.floor(currentTime % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}`:seconds;
    const formattedMinutes = minutes< 10 ? `0${minutes}`: minutes;
    elapsed.textContent = `${formattedMinutes}:${formattedSeconds}`;

  }
});




progressBar.parentElement.addEventListener('click', function (e) {
  const width = progressBar.parentElement.clientWidth;
  const clickX = e.offsetX; 
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});
