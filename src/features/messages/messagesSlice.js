import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMessages,addMessage} from '../../utils/firebase';

export const fetchMessagesAsync = createAsyncThunk('messages/fetchMessagesAsync',async(id)=>{
    const rsp = await fetchMessages(id);
    console.log(rsp)
    return rsp;
})

export const uploadMessagesAsync = createAsyncThunk('messages/uploadMessagesAsync',async(data)=>{
    const {id,text} =data;
    await addMessage(id,text)
})


export const messagesSlice = createSlice({
    name:'messages',
    initialState:{
        status:null,
        messages:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMessagesAsync.pending,(state)=>{
            state.status='fetching messages';
        })
        builder.addCase(fetchMessagesAsync.fulfilled,(state,action)=>{
            state.status='fetched messages';
            state.messages=action.payload;
        })
        builder.addCase(fetchMessagesAsync.rejected,(state,action)=>{
            state.status='fetch messages failed';
            state.error=action.payload;
        })
        builder.addCase(uploadMessagesAsync.pending,(state)=>{
            state.status='uploading messages'
        })
        builder.addCase(uploadMessagesAsync.fulfilled,(state)=>{
            state.status='uploaded messages'
            
        })
        builder.addCase(uploadMessagesAsync.rejected,(state,action)=>{
            state.status='unable to upload messages'
            state.error = action.payload;
        })
    }

});

export default messagesSlice.reducer;

//selector

export const messagesSelector = state=> state.messages.messages;