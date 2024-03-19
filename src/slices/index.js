import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';


export default configureStore({
  reducer: {
    // Тут даем названия редюсерам
    user: userReducer,
  },
});