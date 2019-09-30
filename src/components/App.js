import React from 'react';
import styled from 'styled-components';
import ListOfTodo from './ListOfTodo';
import BoxOne from './BoxOne';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%
    height: 90vh;
    font-family: 'Open Sans', sans-serif;
    margin: auto;
`;

const App = () => (
    <Container>
        <div className="d-flex" style={{height: "100%"}}>
            <BoxOne/>
            <ListOfTodo />
        </div>
 
    </Container>
);

export default App;
