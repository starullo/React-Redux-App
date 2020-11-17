import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFacts, getRandom, addToSaved} from '../actions';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;

    button {
        margin: 0 4%;
    }
`


const Generator = (props) => {
    let rand = Math.floor(Math.random() * props.facts.length);

    useEffect(()=>{
      props.fetchFacts();
    }, []);
    return (
        <Div>
            <button onClick={()=>{
            props.getRandom(props.facts[rand])
            }}>GET RANDOM FACT</button>
            <button onClick={()=>{
                props.addToSaved(props.randomFact);
            }}>SAVE FACT</button>
            {props.randomFact && <p>{props.randomFact.text}<br/><br/>
    <span style={{fontWeight: 'bold'}}>Submitted by:</span> {props.randomFact.user.name.first} {props.randomFact.user.name.last}</p>}
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        facts: state.facts,
        randomFact: state.randomFact,
    }
}

export default connect(mapStateToProps, {fetchFacts, getRandom, addToSaved})(Generator)
