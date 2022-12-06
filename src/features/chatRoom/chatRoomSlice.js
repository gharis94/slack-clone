import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getRooms,addRoom} from '../../utils/firebase'

export const fetchRoomsAsync = createAsyncThunk('rooms/fetchRoomsAsync',async()=>{
    const rsp = await getRooms();
    return rsp;
})

export const addToRoomAsync = createAsyncThunk('rooms/addToRoomAsync',async(data)=>{
    await addRoom(data);
})


export const chatRoomSlice =createSlice({
    name:'chatRooms',
    initialState:{
        status:'',
        rooms:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRoomsAsync.pending,(state)=>{
            state.status='fetching rooms';
        })
        builder.addCase(fetchRoomsAsync.fulfilled,(state,action)=>{
            state.status='fetched rooms';
            state.rooms=action.payload;
        })
        builder.addCase(fetchRoomsAsync.rejected,(state,action)=>{
            state.error=action.payload;
            state.status='fetched rejected';  
        })
        builder.addCase(addToRoomAsync.pending,(state)=>{
            state.status='uploading room';
        })
        builder.addCase(addToRoomAsync.fulfilled,(state)=>{
            state.status='uploaded room';
        })
        builder.addCase(addToRoomAsync.rejected,(state,action)=>{
            state.status='upload failed';
            state.error=action.payload;
        })
    }
})

export default chatRoomSlice.reducer;

//selector

export const chatRoomsSelector =state=>state.chatRooms.rooms;