radio.onReceivedString(function (receivedString) {
    if (receivedString == "alarm") {
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(200)
        }
    }
})
radio.setGroup(255)
