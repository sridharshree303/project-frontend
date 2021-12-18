import axios from 'axios';

const getAllDealersService = () => {
    console.log(`getAllDealersService`);
    return axios.get(`/dealer/all`);
}
const deleteDealerService = (dealerId) => {
    console.log(`deleteDealer`);
    return axios.post(`/dealer/delete/${dealerId}`);
}
const updateDealerService = (dealer) => {
    console.log(`Service updateDealer`);
    return axios.post(`/dealer/update`, dealer);
}
const insertDealerService = (dealer) => {
    console.log(`addDealer`);
    return axios.post(`/dealer/add`, dealer);
}
const getDealerService = (dealerId) => {
    console.log(`getDealerId`);
    return axios.get(`/dealer/get/${dealerId}`);
}
export { getAllDealersService, deleteDealerService, updateDealerService, insertDealerService, getDealerService };

