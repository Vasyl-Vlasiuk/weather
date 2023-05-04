import { CHANGE_THEME } from "../types";

const initialState = {
  themeIndex: 0,
}

const theme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        themeIndex: action.payload,
      }

    default: return state
  }
}

export default theme;