import { configureStore } from "@reduxjs/toolkit"
import tweetReducer from './reducers/tweetReducers'

const store = configureStore(
    {
        reducer: {
            tweetReducer: tweetReducer
        }
    }
)

export default store