import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  // Сессия
  sid: undefined,

  error:{
    text: undefined
  }

};

const userSlice = createSlice({
  name: 'user',     //Имя слайса
  initialState,     //Начальное состояние
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    // Обнавляет текст ошибки
    updateErrorText: (state, action)=>{
      state.error.text = action.payload
    },

    // Обнавляет сессию
    updateSid: (state, action)=>{
      state.sid = action.payload
    }
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { updateErrorText, updateSid } = userSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer;