import React from 'react';
import { Container } from 'react-bootstrap';

const LayOut = (props) => (
    <Container>
       {props.children} 
    </Container>
)

export default LayOut;