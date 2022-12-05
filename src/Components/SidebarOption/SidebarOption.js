import React from 'react';
import styled from 'styled-components';
import {addRoom} from '../../utils/firebase';

const SidebarOption = ({title,icon,addChannelOption=false}) => {
    const selectChannel=()=>{
        if (title === 'Show More' || title === 'Show Less' || title === 'Channel') return;
        console.log('selected');
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