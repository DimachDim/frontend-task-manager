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

  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { } = userSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer;