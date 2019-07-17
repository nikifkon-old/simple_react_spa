import React, { useReducer } from 'react'
// Context, Reducer for React-hooks

const initialState = {
  formProgress: 0,
  nickname: null,
  email: null,
  tel: null,
  fullName: null,
  gender: null,
  address: null,
  postIndex: null,
  creditCard: null,
  apply: false
}

const reducer = (state, action) => {
  switch(action.type){

    case "ENTRY":
      return {
        ...state,
        nickname: action.payload.nickname,
        email: action.payload.email,
        tel: action.payload.tel,
        formProgress: 1
      }
    case "PersonalInfo": 
      return {
        ...state,
        fullName: action.payload.fullName,
        gender: action.payload.gender,
        address: action.payload.address,
        postIndex: action.payload.postIndex,
        creditCard: action.payload.creditCard,
        formProgress: 2

      }
    case "Apply":
      return {
        ...state,
        apply: true,
        formProgress: 3
      }
    case "HandleNavigate":
      return {
        ...state,
        formProgress: action.payload,
      }

    default: 
      return new Error()
  }
}

const AppContext = React.createContext(initialState)

function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider}