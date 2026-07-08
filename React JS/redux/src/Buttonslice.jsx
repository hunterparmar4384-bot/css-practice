import { createSlice } from '@reduxjs/toolkit'

export const Counterslice = createSlice({
    name:'Counter Task',
    initialState:{
        no:0,
        str:"Test"
    },
    reducers:{
        incre :(state) =>{
            // console.log("====");
            
            state.no += 1
        },
    decre:(state) =>{
        // console.log(action.payload);
        state.no -= 1
    },    
    },
});
export default Counterslice.reducer
export const{incre,decre} = Counterslice.actions