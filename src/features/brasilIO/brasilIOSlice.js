import { createSlice } from '@reduxjs/toolkit';

export const brasilIOSlice = createSlice({
  name: 'brasilio',
  initialState: {
    uf: '',
    municipio: ''
  },
  reducers: {
    alterarUf: (state, action) => {
      state.uf = action.payload
    },
    alterarMunicipio: (state, action) => {
      state.municipio = action.payload
    }
  },
});

export const { alterarUf, alterarMunicipio } = brasilIOSlice.actions;

export const uf = state => state.brasilIO.uf;
export const municipio = state => state.brasilIO.municipio;

export default brasilIOSlice.reducer;
