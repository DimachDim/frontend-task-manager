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
      state.userId = action.payload.userInfo.userId
      state.userName = action.payload.userInfo.userName
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