import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
  
  export default {
    save,
    load,
  };


const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = function(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);
};

player.on('timeupdate', throttle (onPlay, 1000));

const savedTime =  localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(savedTime);

