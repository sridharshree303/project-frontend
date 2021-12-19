import { render, screen } from '@testing-library/react';


import { Provider } from 'react-redux';
import store from './redux/store';

import AddFarmer from './components/farmer/AddFarmer';
import DeleteFarmer from './components/farmer/DeleteFarmer';
import FarmerById from './components/farmer/FarmerById';
import UpdateFarmer from './components/farmer/UpdateFarmer';
import ViewAllFarmers from './components/farmer/ViewAllFarmers'

import AddCustomer from './components/customer/AddCustomer';
import GetAllCustomer from './components/customer/GetAllCustomers';
import GetCustomerById from './components/customer/GetCustomerById';
import DeleteCustomer from './components/customer/DeleteCustomer';
import UpdateCustomer from './components/customer/UpdateCustomer';
import CustomerPayBillToDealer from './components/customer/CustomerPayBillToDealer';

import UpdateDealer from './components/dealer/UpdateDealer';
import DeleteDealer from './components/dealer/DeleteDealer';
import AddDealer from './components/dealer/AddDealer';
import GetAllDealer from './components/dealer/GetAllDealer';
import GetDealerById from './components/dealer/GetDealerById';
import DealerSellMilkToCustomer from './components/dealer/DealerSellMilkToCustomer';
import DealerPayBillToCompany from './components/dealer/DealerPayBillToCompany';
import GetAllDealerSellOrders from './components/dealer/GetAllDealerSellOrders';

import DeleteCompany from './components/company/DeleteCompany';
import AddCompany from './components/company/AddCompany';
import GetAllCompany from './components/company/GetAllCompany';
import GetCompanyById from './components/company/GetCompanyById';
import UpdateCompany from './components/company/UpdateCompany';
import CompanyBuyMilkFromFarmer from './components/company/CompanyBuyMilkFromFarmer';
import CompanySellsMilkToDealer from './components/company/CompanySellMilkToDealer';
import CompanyPayBillToFarmer from './components/company/CompanyPayBillToFarmer';
import GetAllCompanyBuyOrders from './components/company/GetAllCompanyBuyOrders';



beforeAll
(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

//Customer-----------------------------------------------------------------------------------------

test('render Data  Delete customer by id', () => {
  render(
    <Provider store={store} >
      <DeleteCustomer />
    </Provider>)
  const linkElement = screen.getByText('Delete customer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Customer', () => {
  render(
    <Provider store={store} >
      <AddCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Add New Customer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find all customers', () => {
  render(
    <Provider store={store} >
       <GetAllCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Find all customers');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find customer by id', () => {
   
  render(
    <Provider store={store} >
       <GetCustomerById/>
    </Provider>)
  const linkElement = screen.getByText('Find customer by id');
  expect(linkElement).toBeInTheDocument();
});
 
test('render Data from Update New Customer', () => {
   
  render(
    <Provider store={store} >
       <UpdateCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Customer');
  expect(linkElement).toBeInTheDocument();
});





//DealetTests------------------------------------------------------------------------------------------

test('render Data from Update New Dealer', () => {
   
  render(
    <Provider store={store} >
       <UpdateDealer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data  Delete dealer by id', () => {
  render(
    <Provider store={store} >
      <DeleteDealer/>
    </Provider>)
  const linkElement = screen.getByText('Delete Dealer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Dealer', () => {
  render(
    <Provider store={store} >
      <AddDealer/>
    </Provider>)
  const linkElement = screen.getByText('Add New Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from List of all Dealers', () => {
  render(
    <Provider store={store} >
       <GetAllDealer/>
    </Provider>)
  const linkElement = screen.getByText('List of all Dealers');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find Dealer by id', () => {
   
  render(
    <Provider store={store} >
       <GetDealerById/>
    </Provider>)
  const linkElement = screen.getByText('Find Dealer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from  Dealer Sell Milk Transaction', () => {
   
  render(
    <Provider store={store} >
       <DealerSellMilkToCustomer/>
    </Provider>)
  const linkElement = screen.getByText('Dealer Sell Milk Transaction');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from  Dealer-Company Bill Payment', () => {
   
  render(
    <Provider store={store} >
       < DealerPayBillToCompany/>
    </Provider>)
  const linkElement = screen.getByText('Dealer-Company Bill Payment');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from  Find All sell orders', () => {
   
  render(
    <Provider store={store} >
       <GetAllDealerSellOrders/>
    </Provider>)
  const linkElement = screen.getByText('Find All sell orders');
  expect(linkElement).toBeInTheDocument();
});
//Company----------------------------------------------------------------------------------------
test('render Data  Delete company by id', () => {
  render(
    <Provider store={store} >
      <DeleteCompany />
    </Provider>)
  const linkElement = screen.getByText('Delete company by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Company', () => {
  
  render(
    <Provider store={store} >
      {/* <EmpData /> */}
      <AddCompany/>
    </Provider>)
  const linkElement = screen.getByText('Add New Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from List of all Company', () => {
   
  render(
    <Provider store={store} >
      {/* <EmpData /> */}
       <GetAllCompany/>
    </Provider>)
  const linkElement = screen.getByText('List of all Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from   Get Company By Id', () => {
   
  render(
    <Provider store={store} >
       <GetCompanyById/>
    </Provider>)
  const linkElement = screen.getByText('Get Company By Id');
  expect(linkElement).toBeInTheDocument();
});
 
test('render Data from Update New Company', () => {
   
  render(
    <Provider store={store} >
       <UpdateCompany/>
    </Provider>)
  const linkElement = screen.getByText('Update New Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Company Buy Milk Transaction', () => {
   
  render(
    <Provider store={store} >
       <CompanyBuyMilkFromFarmer/>
    </Provider>)
  const linkElement = screen.getByText('Company Buy Milk Transaction');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Company Sell Milk Transaction', () => {
   
  render(
    <Provider store={store} >
       <CompanySellsMilkToDealer/>
    </Provider>)
  const linkElement = screen.getByText('Company Sell Milk Transaction');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Company-Farmer Bill Payment', () => {
   
  render(
    <Provider store={store} >
       <CompanyPayBillToFarmer/>
    </Provider>)
  const linkElement = screen.getByText('Company-Farmer Bill Payment');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find All buy orders', () => {
   
  render(
    <Provider store={store} >
       <GetAllCompanyBuyOrders />
    </Provider>)
  const linkElement = screen.getByText('Find All buy orders');
  expect(linkElement).toBeInTheDocument();
});

//Farmer test cases-------------------------------------------------------------
test('render Data from Add New Farmer', () => {
   
  render(
    <Provider store={store} >
       <AddFarmer/>
    </Provider>)
  const linkElement = screen.getByText('Add New Farmer');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Delete farmer by id', () => {
   
  render(
    <Provider store={store} >
       <DeleteFarmer/>
    </Provider>)
  const linkElement = screen.getByText('Delete farmer by id');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Update New Farmer', () => {
   
  render(
    <Provider store={store} >
       <UpdateFarmer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Farmer');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from List of all Farmers', () => {
   
  render(
    <Provider store={store} >
       <ViewAllFarmers/>
    </Provider>)
  const linkElement = screen.getByText('List of all Farmers');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find farmer by id', () => {
   
  render(
    <Provider store={store} >
       <FarmerById/>
    </Provider>)
  const linkElement = screen.getByText('Find farmer by id');
  expect(linkElement).toBeInTheDocument();
});





 

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('render Data  from CustomerPayBillToDealer', () => {
//   render(
//     <Provider store={store} >
//       <CustomerPayBillToDealer />
//     </Provider>)
//   const linkElement = screen.getByText('CustomerPayBillToDealer');
//   expect(linkElement).toBeInTheDocument();
// });
