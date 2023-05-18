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
        isLoggedIn: false,
        loginData: {},
        messages: {},
        recipients: {},
        loading: false,
        errorMessage: '',
        activePanel: '',
        selectedRecipient: null,
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
    case actions.SELECT_RECIPIENT: {
      return {
        ...state,
        selectedRecipient: payload,
      };
    }
    case actions.ADD_MESAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.chatId]: [...(state.messages[payload.chatId] ?? []), payload.message],
        },
      };
    }
    case actions.ADD_MESSAGES: {
      let newMessages = state.messages;

      Object.entries(payload).forEach(([chatId, messages]) => {
        newMessages = {
          ...newMessages,
          [chatId]: [...(newMessages[chatId] ?? []), ...messages],
        };
      });

      return {
        ...state,
        messages: newMessages,
      };
    }
    default:
      return state;
  }
}
