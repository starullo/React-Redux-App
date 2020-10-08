import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
margin-top: 100px;
text-align: center;
width: 100%;
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        flex-direction: row;
    }
`

const Saved = (props) => {
    const [toggled, setToggled] = useState(false);
    
    const toggleSaved = e => {
        setToggled(!toggled);
    }

    console.log(props.saved)
    return (
        <Div>
            <button onClick={toggleSaved}>{toggled ? 'HIDE SAVED FACTZZZ' : 'SEE SAVED FACTZZZ'}</button>
            <div>
            {toggled && 
                props.saved.map(fact=>{
                    return (<div style={{width: '40%', border: 'solid black 2px', margin: '2% auto'}}><p>{fact.text}</p><p><span style={{fontWeight: 'bold'}}>Submitted by:</span>{fact.user.name.first} {fact.user.name.last}</p>

                    </div>)
                })
            }
            </div>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        saved: state.saved
    }
}

export default connect(mapStateToProps, {})(Saved)
