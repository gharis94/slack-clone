import React,{useState} from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import {Data} from '../../utils/SideBarIcons';
import SidebarOption from '../SidebarOption/SidebarOption';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useSelector } from 'react-redux';
import { chatRoomsSelector } from '../../features/chatRoom/chatRoomSlice';

const SideBar = () => {
    const [isExpand,setIsExpand] = useState(true);
    const [isChannelExpand,setIsChannelExpand] = useState(true);
    const rooms = useSelector(chatRoomsSelector);
    
    
    return (
    <>
        <SidebarHeader>
            <HeaderContent>
             <h2>Gharis</h2>
              <h4>
               <FiberManualRecordIcon/>
                hello
              </h4>
            </HeaderContent>
            <CreateIcon/> 
        </SidebarHeader>
        <SideBarContent>
            {
                Data.filter((_,idx)=>isExpand?(idx<3):(idx)).map((item,idx)=>(
                <SidebarOption key={idx} title={item.title} icon={item.icon}/>
                ))
            }
            <ExpandContainer onClick={()=>setIsExpand(!isExpand)}>
                <SidebarOption title={!isExpand?'Show Less':'Show More'} icon={!isExpand? <ExpandLessIcon/>:<ExpandMoreIcon/>}/>
            </ExpandContainer>
            <Hr/>
            <div onClick={()=>setIsChannelExpand(!isChannelExpand)}>
                <SidebarOption title='Channel' icon={isChannelExpand? <ExpandLessIcon/>:<ExpandMoreIcon/>} />
            </div>

            {
                (rooms && isChannelExpand) && rooms.map(item=>(
                    <SidebarOption title={item.name} key={item.id} id={item.id}/>
                ))
            }
            <SidebarOption addChannelOption={true} title='Add Channel' icon={<AddCircleOutlineIcon/>}/>   
            <Hr/> 
            
        </SideBarContent>
    </>
    
  )
}

export default SideBar;

//style code below

const SidebarHeader=styled.div`
    color:white;
    padding:5px;
    display:flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom:1px solid grey;

    >.MuiSvgIcon-root{
        padding:5px;
        color:var(--slack-color);
        background-color: white;
        border-radius: 20px;
        cursor:pointer;
    }
`

const HeaderContent=styled.div`
    display:flex;   
    flex-direction: column;

    >h4{
        display:flex;
        justify-content: space-around;
        align-items:center;
        >.MuiSvgIcon-root {
            height: 15px;
        }
    }

`

const SideBarContent= styled.div`
    color:white;
    display:flex;
    flex-direction: column;
    
`
const Hr = styled.hr`
    margin: 10px 0;
    border: 1px solid #49274b;
`

const ExpandContainer = styled.div`
    transform:translateY(0.3em);
    transition-duration:all 15s ease 0s;
`