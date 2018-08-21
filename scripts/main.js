const audioController = () => {

    const buttons = document.querySelectorAll('button');
    const audio_player = document.getElementById('audio');

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