

export interface ReduxState {
  darkmode: boolean;
}

const initialState: ReduxState = {
  darkmode: false
}


type ActionTypes = {
    type: 'TOGGLE_DARK';
    payload: boolean
  }

export default function Reducer (state=initialState, action: ActionTypes) {
  switch (action.type) {
    case "TOGGLE_DARK":
      return {
        ...state, darkmode: action.payload
      };
    default:
      return state
  }
}