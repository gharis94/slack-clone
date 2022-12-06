import React from 'react';
import styled from 'styled-components';

const MessageContainer = ({data}) => {
  return (
    <Container>
        <p>{data.message}</p>
    </Container>
  )
}

export default MessageContainer

const Container= styled.div`
    margin: 10px;
    background-color: azure;
`