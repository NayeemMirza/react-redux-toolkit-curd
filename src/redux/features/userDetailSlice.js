import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

 
// Create Action
export const createUser = createAsyncThunk('createUser', async(data, {rejectWithValue}) => {
    const response = await fetch("https://656d9b17bcc5618d3c23871d.mockapi.io/curd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json(); 
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Get User Action  
export const showUser = createAsyncThunk('showUser', async(args, {rejectWithValue})=> {
    const response = await fetch('https://656d9b17bcc5618d3c23871d.mockapi.io/curd');

    try {
        const result = await response.json(); 
        return result;
        
    } catch (error) {
        return rejectWithValue(error);
    }
})


// Delete Action  
export const deleteUser = createAsyncThunk('deleteUser', async(id, {rejectWithValue})=> {
    const response = await fetch(`https://656d9b17bcc5618d3c23871d.mockapi.io/curd/${id}`, {
        method: "DELETE"
    });

    try {
        const result = await response.json(); 
        return result;
        
    } catch (error) {
        return rejectWithValue(error);
    }
})

// update Action
export const updateUser = createAsyncThunk('updateUser', async(data, {rejectWithValue}) => {
    const response = await fetch(`https://656d9b17bcc5618d3c23871d.mockapi.io/curd/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json(); 
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

const userDetail = createSlice({
    name: 'post',
    initialState: {
        loading: false,
        users: [],
        error: null,
        searchData: []
    },

    reducers: {
        searchUser : (state, action) => {
            console.log(action.payload);
            state.searchData = action.payload
        }
    },
    extraReducers:{
        [createUser.pending] : (state) => {
            state.loading = true; 
        },
        [createUser.fulfilled] : (state, action) => {
            state.loading = false;
            state.users.push(action.payload) 
        },
        [createUser.rejected] : (state, action) => {
            state.loading = false;
            state.users = action.payload; 
        },
        [showUser.pending] : (state) => {
            state.loading = true; 
        },
        [showUser.fulfilled] : (state, action) => {
            state.loading = false;
            state.users = action.payload 
        },
        [showUser.rejected] : (state, action) => {
            state.loading = false;
            state.users = action.payload; 
        },

        
        [deleteUser.pending] : (state) => {
            state.loading = true; 
        },
        [deleteUser.fulfilled] : (state, action) => {
            state.loading = false;
            const {id} = action.payload
            state.users = state.users.filter(user => user.id !== id) 
        },
        [deleteUser.rejected] : (state, action) => {
            state.loading = false;
            state.users = action.payload; 
        },

        [updateUser.pending] : (state) => {
            state.loading = true; 
        },
        [updateUser.fulfilled] : (state, action) => {
            state.loading = false;
            state.users = state.users.map( (ele) => (
                ele.id === action.payload.id ? action.payload : ele
            )) 
        },
        [updateUser.rejected] : (state, action) => {
            state.loading = false;
            state.users = action.payload; 
        },
    }
})

export default userDetail.reducer;
export const {searchUser} = userDetail.actions;