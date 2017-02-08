var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
  deleteItem: function () {
    AppDispatcher.dispatch({
      actionType: 'DELETE_ITEM'
    });
  }
};

module.exports = ButtonActions;
