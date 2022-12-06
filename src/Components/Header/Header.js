import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar/>
            <AccessTimeIcon/>
        </HeaderLeft>
        <HeaderCenter>
            <HeaderSearch>
                <SearchIcon/>
                <input placeholder='Search'/>
            </HeaderSearch>
        </HeaderCenter>
        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

//below is style code

const HeaderContainer =styled.div`
    display: flex;
    background-color: var(--slack-color);
    margin: 0;
    position:fixed;
    align-items: center;
    color:white;
    width:100%;
`
const HeaderLeft= styled.div`
    flex:.3;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px;
`
const HeaderCenter=styled.div`
    flex:.4;
    display: flex;
    justify-content: center;
    padding: 10px;
`
const HeaderRight = styled.div`
    flex:.3;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`
const HeaderAvatar = styled(Avatar)`
    padding:0 10px;
    cursor:pointer;

    :hover{
        opacity:.8;
    }
`

const HeaderSearch = styled.div`
    flex:1;
    opacity:1;
    display:flex;
    align-items: center;
    color:grey;
    border:1px solid grey;
    border-radius: 10px;

    >input{
        width:100%;
        background-color: transparent;
        border:none;
        outline:none;
        color:white;
    }
`