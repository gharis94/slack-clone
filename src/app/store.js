import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import chatroomReducer from '../features/chatRoom/chatRoomSlice';
import roomReducer from '../features/room/roomSlice';
import messagesReducer from '../features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    chatRooms:chatroomReducer,
    room:roomReducer,
    messages:messagesReducer
  },
});
