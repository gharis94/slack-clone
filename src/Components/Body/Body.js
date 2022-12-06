import React from 'react';
import styled from 'styled-components';
import SideBar from '../Sidebar/SideBar';
import Chat from '../Chat/Chat';

const Body = () => {
  return (
    <BodyContainer>
        <BodyLeft>
            <SideBar/>
        </BodyLeft>
        <BodyRight>
            <Chat/>
        </BodyRight>
    </BodyContainer>
  )
}

export default Body;

//style code below

const BodyContainer=styled.div`
    margin-top:0 10px;
    display: flex;
    height: 100vh;
`

const BodyLeft = styled.div`
    flex:.3;
    background-color: var(--slack-color);
    border-radius: 10px;
    margin-top: 80px;
    
`
const BodyRight =styled.div`
    flex:.7;
    margin: 0 10px;
    background-color: rgba(0,0,0,.08);
    border-radius: 10px;
    margin-top: 80px;
`