import axios from 'axios';
const getAllDealersService = () => {
    console.log(`getAllDealersService`);
    return axios.get(`http://localhost:8082/dealer/all`);
}
const deleteDealerService = (dealerId) => {
    console.log(`deleteDealer`);
    return axios.post(`http://localhost:8082/dealer/delete/{ dealerId}/${dealerId}`);
}
const updateDealerService = (dealer) => {
    console.log(`Service updateDealer`);
    return axios.post(`http://localhost:8082/dealer/update`, dealer);
}
const insertDealerService = (dealer) => {
    console.log(`addDealer`);
    return axios.post(`http://localhost:8082/dealer/add`, dealer);
}
const getDealerService = (dealerId) => {
    console.log(`getDealerId`);
    return axios.get(`http://localhost:8082/dealer/get/${dealerId}`);
}
export { getAllDealersService, deleteDealerService, updateDealerService, insertDealerService, getDealerService };
