
function reducer(state:any, action:any) {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state };

    default:
      throw new Error('wrong operation');
  }
}

export default reducer;