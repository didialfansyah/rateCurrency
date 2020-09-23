import axios from 'axios';

const getExchangeAction = () => {
    return (dispatch) => {
        axios.get("https://api.exchangeratesapi.io/latest?base=IDR&symbols=CAD,IDR,JPY,CHF,EUR,USD")
        .then((response) => {
            return dispatch ({
                type : "GET_EXCHANGE_DATA",
                exchange : response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getExchangeAction;