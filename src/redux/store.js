import companybuysmilkReducer from './CompanyBuySlice';
import companyReducer from './CompSlice';
import farmReducer from './FarmerSlice';
import customerReducer from './CustomerSlice';
import dealerReducer from './DealerSlice';
// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 
import { configureStore } from '@reduxjs/toolkit';

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux 
console.log('store');
const store = configureStore(
    {
        reducer: {
            companybuysmilk: companybuysmilkReducer,
            farm: farmReducer,
            company: companyReducer,
            customer: customerReducer,
            dealer: dealerReducer,
        }
    }
);

export default store;