import {
  saveUserToLocalStorage,
  saveUserToken,
  clearStorage,
  saveSessionStorage,
  deleteSessionStorage,
} from '@/utils/webStorage';

const mutations = {
  // user
  setUser(state, user) {
    saveUserToLocalStorage(user);
    state.user = user;
  },
  setUserToken(state, token) {
    saveUserToken(token);
    state.token = token;
  },
  logout(state) {
    state.user = {};
    clearStorage();
  },

  // board
  setBoardList(state, boardList) {
    state.boardList = boardList;
  },
  setRecentBoard(state, recentBoard) {
    state.recentBoard = recentBoard;
  },
  setBoardDetail(state, board) {
    saveSessionStorage('board', board);
    state.board = board;
  },
  setTheme(state, bgColor) {
    saveSessionStorage('bgColor', bgColor);
    state.bgColor = bgColor ? bgColor : 'rgb(0, 121, 191);';
  },

  // card
  setCard(state, card) {
    saveSessionStorage('card', card);
    state.card = card;
  },

  // checklist
  setChecklists(state, checklists) {
    saveSessionStorage('checklists', checklists);
    state.checklists = checklists;
  },
  deleteChecklists(state) {
    deleteSessionStorage('checklists');
    state.checklists = {};
  },

  // comment
  setComment(state, comment) {
    state.comment = comment;
  },
  deleteComment(state) {
    state.comment = {};
  },
};

export default mutations;
