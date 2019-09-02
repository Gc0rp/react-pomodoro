import React from 'react';
import styled from 'styled-components';
import ListOfTodo from './ListOfTodo';
import BoxOne from './BoxOne';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%
    height: 85vh;
    font-family: 'Open Sans', sans-serif;
    border: 2px solid #FF8552;
    margin: auto;
    margin-top: 45px;
`;

const App = () => (
    <Container>
        <div className="d-flex" style={{height: "100%"}}>
            <BoxOne/>
            <ListOfTodo />
        </div>

        {/* // <div className="row" style={{height: "100%"}}>
        //     <div className="col-lg-12">
        //         
        //     </div>
        // </div> */}
        
    </Container>
);

export default App;
