import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
      //reducers tiene como propiedades acctions: Estas son las funciones que nos permiten cambiar el valor del estado
      setTrainerSlice: (state, action) => action.payload
      //Esto es como un setter
    }
})

export const { setTrainerSlice } = trainerSlice.actions;

export default trainerSlice.reducer;
