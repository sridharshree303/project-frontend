import companybuysmilkReducer from './CompanyBuySlice';

import { configureStore } from '@reduxjs/toolkit';

console.log('store');
const store = configureStore(
    {
        reducer:{
            companybuysmilk:companybuysmilkReducer,

        }
    }
);

export default store;