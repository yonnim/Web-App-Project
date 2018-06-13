import { types } from "../actions"

const initialState = {
  name: "",
  email: "",
  password: "",
  error: "",
  remember: true,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FORM_HANDLE_CHANGE:
      return {
        ...state,
        error: "",
        [action.payload.name]: action.payload.value,
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      }
    case types.LOGIN_FINISH:
      return {
        ...state,
        loading: false,
      }
    case types.LOGIN_FORM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    default:
      return state
  }
}