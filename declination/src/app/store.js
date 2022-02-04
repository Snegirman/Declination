import { configureStore } from "@reduxjs/toolkit";
import addDeclinationReducer from "./addDeclinationSlice";




export default configureStore ({
    reducer: {
        addDeclination: addDeclinationReducer
    },
})