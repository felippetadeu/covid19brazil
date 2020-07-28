import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import brasilIOReducer from '../features/brasilIO/brasilIOSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    brasilIO: brasilIOReducer
  },
});
