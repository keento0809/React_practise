const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        items: [...state.items, newItem],
        totalTask: state.totalTask + 1,
      };
    case "EDIT_ITEM":
      const editItem = action.payload;
      // I need to update the value of text here.
      // editItem.text = "updated task"
      return {
        items: [...state.items],
        totalTask: state.totalTask,
      };
    case "UPDATE_ITEM":
      return {};
    case "REMOVE_ITEM":
      const removeItem = action.payload;
      const updatedItems = state.items.filter((item) => item !== removeItem);
      return {
        items: updatedItems,
        totalTask: state.totalTask - 1,
      };
    default:
      break;
  }
};

export default TodoReducer;
