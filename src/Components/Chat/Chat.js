import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
// import Button from '@mui/material/Button';
//import {addMessage} from '../../utils/firebase';
import { useSelector,useDispatch } from 'react-redux';
import {roomSelector} from '../../features/room/roomSlice';
//import {fetchMessages} from '../../utils/firebase';
import {uploadMessagesAsync,fetchMessagesAsync} from '../../features/messages/messagesSlice';
import {messagesSelector} from '../../features/messages/messagesSlice';
import MessageContainer from '../MessageContainer/MessageContainer';

const Chat = () => {
    const [text,setText] = useState('');
    const {id,title} = useSelector(roomSelector);
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);

    console.log(messages)

    useEffect(()=>{
        dispatch(fetchMessagesAsync(id))
    },[id]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text)return;
        console.log(text)
        let data={
            id,
            text
        }
        dispatch(uploadMessagesAsync(data));
        setText('');
    }
  return (
    <ChatContainer>
        <ChatHeader>
            <ChatHeaderLeft>
                <h3>#{title}</h3>
                <StarOutlineIcon/>
            </ChatHeaderLeft>
            <ChatHeaderRight>
                <InfoIcon/>
                <h4>Details</h4>
            </ChatHeaderRight>
        </ChatHeader>
        <ChatBody>
            {
                messages && messages.map(data=>(
                    <MessageContainer key={data.timeStamp} data={data}/>
                ))
            }
        </ChatBody>
        <ChatInput>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <input value={text} onChange={(e)=>setText(e.currentTarget.value)} type='text' placeholder='Type here'/>
                <button hidden type='submit'> Submit</button>
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
border-bottom:1px solid lightgrey;
align-items: center;
color: grey;
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
    width: 70%;
    margin: 0 auto;


    >form>input{
        position:fixed;
        bottom: 20px;
        width:45vw;       
        border: none;
        outline: none;
        border-radius: 5px;
  
    }
    
`