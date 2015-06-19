import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

var pages = {};
var loading = false;
var AppStore = Object.assign({}, EventEmitter.prototype, {
  isLoading() {
    return loading;
  },

  getPage(path) {
    return path in pages ? pages[path] : null;
  },

  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  off(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppStore.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.GET_PAGE:
      loading = true;
      AppStore.emitChange();
      break;
    case ActionTypes.RECEIVE_PAGE:
      loading = false;
      if (!action.err) {
        pages[action.page.path] = action.page;
      }
      AppStore.emitChange();
      break;
    default:
      // Do nothing
  }
});

export default AppStore;
