import React from 'react';
import styled from 'styled-components';
import {addRoom} from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { setRoomId } from '../../features/room/roomSlice';

const SidebarOption = ({title,icon,id,addChannelOption=false}) => {
    const dispatch=useDispatch();
    const selectChannel=()=>{
        if (title === 'Show More' || title === 'Show Less' || title === 'Channel') return;
        console.log('selected');
        if(id){
            console.log(id);
            dispatch(setRoomId({id,title}))
        }
    }
    const addChannel=async()=>{
        console.log('add')
        const newRoom = prompt('Enter the name for room');
        await addRoom({
            name:newRoom
        })        
    }
  return (
    <SidebarOptionContainer onClick = {
        (addChannelOption  )? addChannel : selectChannel
    } >
        {icon? icon:<span>#</span>}
        <h4>
            {title}
        </h4>
    </SidebarOptionContainer>
  )
}

export default SidebarOption;

//style code below

const SidebarOptionContainer =styled.div`
    padding:10px;
    display: flex;
    align-items:flex-start;

    >h4{
        font-weight: 400;
        padding-left: 10px;
    }

    :hover{
        cursor:pointer;
        opacity: 0.8;
        background-color: #2f0f40;
    }
`