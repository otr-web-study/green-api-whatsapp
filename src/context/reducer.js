import * as actions from './actionsConstants';

export function reducer(state, { type, payload }) {
  switch (type) {
    case actions.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: payload,
      };
    }
    case actions.LOGIN: {
      return {
        ...state,
        loginData: payload,
        isLoggedIn: true,
      };
    }
    case actions.LOGOUT: {
      return {
        ...state,
        loginData: {},
        isLoggedIn: false,
      };
    }
    case actions.SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case actions.SET_ACTIVE_PANEL: {
      return {
        ...state,
        activePanel: payload,
      };
    }
    case actions.ADD_RECIPIENT: {
      return {
        ...state,
        activePanel: '',
        recipients: {
          ...state.recipients,
          [payload.chatId]: { title: payload.title },
        },
      };
    }
    default:
      return state;
  }
}
