import { configureStore } from "@reduxjs/toolkit";
import triner from './slices/trainer.slice'

export default configureStore({
  reducer: {
    triner
  }
})