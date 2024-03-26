import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  // Сессия
  sid: undefined,
  userId: undefined,
  userName: undefined,

  error:{
    text: undefined
  }

};

const userSlice = createSlice({
  name: 'user',     //Имя слайса
  initialState,     //Начальное состояние
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    // Обнавляет информацию о пользователе
    updateUserInfo: (state, action)=>{
      //console.log(action.payload.info)
      if(action.payload.sid != undefined) state.sid = action.payload.sid
      state.userId = action.payload.userId
      state.userName = action.payload.userName
    },

    // Обнавляет сессию
    updateUserSid: (state, action)=>{
      state.sid = action.payload
    },

    // Обнавляет текст ошибки
    updateErrorText: (state, action)=>{
      state.error.text = action.payload
    },

  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { updateErrorText, updateUserInfo, updateUserSid } = userSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer;