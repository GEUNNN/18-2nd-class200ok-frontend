export const addModal = item => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteModal = item => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
