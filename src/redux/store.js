import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./features/userDetailSlice";

export default configureStore({
    reducer:{
        app:PostSlice,
    },
})