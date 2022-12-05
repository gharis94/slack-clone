import React from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';

const Chat = () => {
  return (
    <ChatContainer>
        <ChatHeader>
            <ChatHeaderLeft>
                <h3>#room-id</h3>
                <StarOutlineIcon/>
            </ChatHeaderLeft>
            <ChatHeaderRight>
                <InfoIcon/>
                <h4>Details</h4>
            </ChatHeaderRight>
        </ChatHeader>
        <ChatBody>
            <h4>Body</h4>
        </ChatBody>
        <ChatInput>
            <h4>Input</h4>
            <form>
                <input type='text' placeholder='type here'/>
                <Button></Button>
            </form>
        </ChatInput>        
    </ChatContainer>
  )
}

export default Chat;

//style code is below

const ChatContainer = styled.div`

`

const ChatHeader = styled.div`
padding: 20px 10px;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
border:1px solid lightgrey;
align-items: center;
`
const ChatHeaderRight=styled.div`
display:flex;
>h4{
    padding-left: 5px;
}
`
const ChatHeaderLeft=styled.div`
display:flex;

>h3{
    padding-right: 5px;
}
`
const ChatBody = styled.div`

`

const ChatInput = styled.div`
    position: fixed;
    bottom: 20px;
`