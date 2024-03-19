import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  error:{
    text: undefined
  }
};

const userSlice = createSlice({
  name: 'user',     //Имя слайса
  initialState,     //Начальное состояние
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    createErrorText: (state, action)=>{
      state.error.text = action.payload
    }
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { createErrorText } = userSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer;