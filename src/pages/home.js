import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import ValueExchange from '../components/valueExchange';
import TitleTab from '../components/titleTab';
import getExchangeAction from '../actions/getExchangeAction';
import getBuyAction from '../actions/getBuyAction';
import getSellAction from '../actions/getSellAction';

const Home = (props) => {
    useEffect(() => {
        props.getExchange();
        props.getBuy();
        props.getSell();
    }, []);

    console.log(props.buy)
    return(
        <div>
            <Table striped hover bordered variant="dark" style={{marginTop : "50px"}}>
                <thead>
                    <tr style={{textAlign : "center"}}>
                        <th></th>
                        <th><h3>WE BUY</h3></th>
                        <th><h3>EXCHANGE RATE</h3></th>
                        <th><h3>WE SELL</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{textAlign : "center"}}>
                        <td><TitleTab data={props.buy}/></td>
                        <td><ValueExchange data={props.buy}/></td>
                        <td><ValueExchange data={props.exchange}/></td>
                        <td><ValueExchange data={props.sell}/></td>
                    </tr>
                </tbody>
            </Table>
            
            <div style={{width : "100%", color: "#fff", textAlign : "center"}}>
                Base Currency Is IDR <br/> 
                As For The API <a href="https://api.exchangeratesapi.io/">https://api.exchangeratesapi.io/</a> is used
            </div>
        </div>
    );
}

const toState = (state) => {
    return {
        exchange : state.exchange,
        buy : state.buy,
        sell : state.sell
    }
}

const toDispatch = (dispatch) => {
    return {
        getExchange: () => dispatch(getExchangeAction()),
        getBuy : () => dispatch(getBuyAction()),
        getSell : () => dispatch(getSellAction())
    }
}
export default connect(toState, toDispatch)(Home);
