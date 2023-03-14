import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data.seconds);
  localStorage.setItem('LOCALSTORAGE_KEY', `${data.seconds}`);
}
player.setCurrentTime(localStorage.getItem('LOKALSTORAGE_KEY'));
