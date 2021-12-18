import axios from "axios";

const companyBuysMilkDataService = (transaction) =>{
    console.log('companyBuysMilkDataService');
    return axios.post('/payment/company/buys',transaction);
} 

export {companyBuysMilkDataService};