

export function globalReducer(state = {}, action) {
  switch (action.type) {
    case '@GLOBAL/ADD_TODO':
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}