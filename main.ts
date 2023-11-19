radio.onReceivedString(function (receivedString) {
    if (receivedString == "alarm") {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
radio.setGroup(255)
