import { createSlice } from 'redux-starter-kit'

const aboutSlice = createSlice({
  slice: '@aboutSlice',
  initialState: {
    formData: {
      nickname: null,
      email: null,
      tel: null,
      fullName: null,
      gender: null,
      address: null,
      postIndex: null,
      creditCard: null,
    },
    formProgress: 0,
    apply: false
  },
  reducers: {
    setEntryFormData: (state, action) => {
      const { nickname, email, tel } = action.payload
      
      state.formData.nickname = nickname
      state.formData.email = email
      state.formData.tel = tel
      state.formProgress = 1
    },
    setPersonalInfoData: (state, action) => {
      const { fullName, gender, address, postIndex, creditCard } = action.payload

      state.formData.fullName = fullName
      state.formData.gender = gender
      state.formData.address = address
      state.formData.postIndex = postIndex
      state.formData.creditCard = creditCard
      state.formProgress = 2
    },
    decrementFormProgress: (state, action) => {
      state.formProgress -= 1
    },
    setApply: (state, action) => {
      state.apply = action.payload
      state.formProgress = 3
    }
  }
})

const { actions: aboutActions, reducer } = aboutSlice

const EntryFormHandler = (nickname, email, tel) => dispatch => {
  dispatch(aboutActions.setEntryFormData({
    nickname, email, tel
  }))
}

const PersonalInfoHandler = (fullName, gender, address, postIndex, creditCard) => dispatch => {
  dispatch(aboutActions.setPersonalInfoData({
    fullName, gender, address, postIndex, creditCard
  }))
}

const DecrementFormProgress = () => dispatch => {
  dispatch(aboutActions.decrementFormProgress())
}

const FormApply = () => dispatch => {
  dispatch(aboutActions.setApply(true))
}

const actions = {
  EntryFormHandler,
  PersonalInfoHandler,
  DecrementFormProgress,
  FormApply
}

export {
  reducer as default,
  actions
}