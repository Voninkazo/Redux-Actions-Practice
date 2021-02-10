// function that returns an action type and a text value

import SortUsers from "../components/SortUsers"

export function increaseCounter() {
  return {
    type:"INCREASE"
  }
}

export function decreaseCounter() {
  return {
    type:"DECREASE"
  }
}

export function setSpecialText(text){
  return {
    type: "SET_SPECIALTEXT",
    value: text,
  }
}

export function setCurrectCity(text){
  return {
    type: "SET_CURRENT_CITY",
    value: text,
  }
}

export function searchUserByFirstName(firstName) {
  return {
    type: "SEARCH_USER_BY_FIRSTNAME",
    value: firstName,
  }
}


export function sortUsers(currentUserSort) {
  return {
    type: "CURRENT_USER_SORT",
    value: currentUserSort,
  }
}

export function addUser(users) {
  return {
    type: "ADD_USER",
    value: users,
  }
}

export function getUsers() {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		const users = await response.json();
    console.log(users)
    dispatch({type: "GET_USERS", value: users,})
  }
}

export function removeUser(users) {
  return {
    type: "REMOVE_USER",
    value: users,
  }
}

export function setCurrentTemperature(currentTemp) {
  return {
    type:"SET_CURRENT_TEMPERATURE",
    value: currentTemp,
  }
}

export function setImgUrl(imageUrl) {
  return {
    type:"SET_IMAGE_URL",
    value: imageUrl,
  }
}

export function setImageScale(scale) {
  return {
    type:"SET_IMAGE_SCALE",
    value: scale,
  }
}

export function setDisplayModal() {
  return {
    type:"SET_DISPLAY_MODAL" 
  }
}