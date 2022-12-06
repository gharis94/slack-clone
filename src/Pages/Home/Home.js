import React,{useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
import {fetchRoomsAsync} from '../../features/chatRoom/chatRoomSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchRoomsAsync());
    },[dispatch])

    return (
    <div>
        <Header/>
        <Body/>
    </div>
  )
}

export default Home