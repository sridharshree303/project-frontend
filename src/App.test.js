import { render, screen } from '@testing-library/react';


import { Provider } from 'react-redux';
import store from './redux/store';


import AddCustomer from './components/customer/AddCustomer';
import GetAllCustomer from './components/customer/GetAllCustomers';
import GetCustomerById from './components/customer/GetCustomerById';
import DeleteCustomer from './components/customer/DeleteCustomer';
import UpdateCustomer from './components/customer/UpdateCustomer';

import UpdateDealer from './components/dealer/UpdateDealer';
import DeleteDealer from './components/dealer/DeleteDealer';
import AddDealer from './components/dealer/AddDealer';
import GetAllDealer from './components/dealer/GetAllDealer';
import GetDealerById from './components/dealer/GetDealerById';

import DeleteCompany from './components/company/DeleteCompany';
import AddCompany from './components/company/AddCompany';
import GetAllCompany from './components/company/GetAllCompany';
import GetCompanyById from './components/company/GetCompanyById';
import UpdateCompany from './components/company/UpdateCompany';



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





 

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
