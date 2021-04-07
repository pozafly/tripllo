import {
  getUserFromLocalStorage,
  getSessionStorage,
  getTokenFromLocalStorage,
} from '@/utils/webStorage';

const state = {
  token: getTokenFromLocalStorage() || '',
  user: getUserFromLocalStorage() || '',
  isInfinity: 'Y',
  personalBoard: [],
  recentBoard: [],
  invitedBoard: [],
  hashtagBoards: [],
  board: getSessionStorage('board') || {},
  card: getSessionStorage('card') || {},
  checklists: getSessionStorage('checklists') || [],
  bgColor: getSessionStorage('bgColor') || '',
  comment: [],
  socket: null,
  pushMessage: '',
  file: [],
  hashtags: [],
};

export default state;
