export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    if(serializedState === null) {
      return;
    }

    return JSON.parse(serializedState);
  } catch(e) {
    return;
  }
}

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('state', serializedData);
  } catch (error) {

  }
}
