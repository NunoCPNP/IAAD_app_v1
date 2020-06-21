export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu: !state.menu,
      }

    default:
      return state
  }
}
