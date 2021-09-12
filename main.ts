input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallHeart)
        music.ringTone(131)
        basic.pause(70)
        music.rest(music.beat(BeatFraction.Whole))
        basic.pause(t1)
        basic.showIcon(IconNames.Heart)
        music.ringTone(131)
        basic.pause(100)
        music.rest(music.beat(BeatFraction.Whole))
        basic.pause(t2)
    }
})
input.onGesture(Gesture.Shake, function () {
    t0 = 0
    t1 = 20
    t2 = 200
})
/**
 * Oppgave 4
 * 
 * Lag et program som "blinker" hjerteikonet 5 ganger når du klikker på A-knappen.
 * 
 * Eksperimentere videre med github. Hva skjer når Readme-fil endres i github og er nytt forsøk lastes opp. Må muligens bruke en annen fil til kommentarer og info.
 * 
 * Vil prøve å lage et "ekte hjerte" med annen sekvens og lyd. Muligens noe slikt i oppg 4, men får se. https://www.youtube.com/watch?v=SVqU5YeKfEM
 * 
 * Knapp A gjør som oppgaven sier og blinker sekvens 5 ganger
 * 
 * Knapp B øker hjerterytmen med å multiplisere (1/1.5)
 * 
 * Knapp A og B senker rytmen med 1.5
 * 
 * Da blir risting brukt til å nullstille slik hjertet er ved start.
 * 
 * Mulige variasjoner for oppg. 4.
 * 
 * Vurdere å teste med tilt slik at vannrett = ok hjerterytme, mens loddrett framover er hurtig og bakover er "Game over"...
 * 
 * Lyden går da over til EKG kontinuerlig lyd (irriterende som bare det, men gøy ide.
 * 
 * Noe for en annen oppgave
 */
input.onButtonPressed(Button.AB, function () {
    t2 = t2 * 1.5
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(t2)
    t2 = t2 / 1.5
})
let t2 = 0
let t1 = 0
let t0 = 0
t0 = 0
t1 = 20
t2 = 200
basic.forever(function () {
    // Tom for første gangen.
    basic.pause(1)
})
