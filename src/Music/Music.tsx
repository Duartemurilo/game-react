import { Howl } from 'howler'

export var sfx = {
  push: new Howl({
    src: ['https://assets.codepen.io/21542/howler-sfx-levelup.mp3'],
  }),
  openDoor: new Howl({
    src: ['https://assets.codepen.io/21542/howler-push.mp3'],
  }),
  moster: new Howl({
    src: [
      'https://freesound.org/people/themusicalnomad/sounds/253886/download/253886__themusicalnomad__negative-beeps.wav',
    ],
  }),
}
export var music = {
  overworld: new Howl({
    src: ['https://assets.codepen.io/21542/howler-demo-bg-music.mp3'],
  }),
}
