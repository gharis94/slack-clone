import { createSlice } from "@reduxjs/toolkit";



export const roomSlice=createSlice({
    name:'room',
    initialState:{
        room: {
            id: '',
            title: ''
        }
    },
    reducers:{
        setRoomId:(state,action)=>{
            state.room=action.payload;
        }

    }
    
});

export const {setRoomId} = roomSlice.actions;

export default roomSlice.reducer;

//selector 
export const roomSelector = state =>state.room.room;