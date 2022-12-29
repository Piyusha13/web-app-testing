import React, { createContext } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login/LoginPage';
import ResgistrationPage from './pages/Signup/RegistrationPage';
import VerificationPage from './pages/Verification/VerificationPage';
// import Navbar from './components/Navbar';
import Navbars from './components/Navbar/Navbar';
import NavTab from './components/NavTab/NavTab';
import ProfilePage from './pages/Profile/ProfilePage';
import SupportPage from './pages/Support/SupportPage';
import PersonalDetails from './pages/PersonalDetails/PersonalDetails';
import BankDetailsPage from './pages/BankDetails/BankDetailsPage';
import WalletPage from './pages/Wallet/WalletPage';
import TransactionPage from './pages/Transaction/TransactionPage';
import WithdrawMoney from './pages/WithdrawMoney/WithdrawMoney';
import TransactionDetails from './components/TransactionDetails/TransactionDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NomineeDetails from './pages/NomineeDetails/NomineeDetails';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import NewInvestmentPage from './pages/NewInvestment/NewInvestmentPage';
import { useState } from 'react';
import PaymentMethod1 from './components/PaymentMethod/PaymentMethod1';
import PaymentMethod2 from './components/PaymentMethod/PaymentMethod2';
import KYCDetails from './pages/KYCDetails/KYCDetails';
import ResetPassword from './pages/ForgotPassword/ResetPassword';


export const GlobalInfo = createContext();

function App() {

  const [mob_no, setMob_no] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const getMob_no = (data) => {
    setMob_no(data);
  }
  const getName = (data) => {
    setName(data);
  }
  const getEmail = (data) => {
    setEmail(data);
  }
  const getPassword = (data) => {
    setPassword(data);
  }

  return (
    <GlobalInfo.Provider value={
      {
        getMob_no: getMob_no, mob_no: mob_no,
        getName: getName, name: name,
        getEmail: getEmail, email: email,
        getPassword: getPassword, password: password
      }
    }>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<ResgistrationPage />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/navbar" element={<Navbars />} />
            <Route path="/navtab" element={<NavTab />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/personalDetails" element={<PersonalDetails />} />
            <Route path="/bankDetails" element={<BankDetailsPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/wallet/transactions" element={<TransactionPage />} />
            <Route path="/withdraw" element={<WithdrawMoney />} />
            <Route path="/transaction/details" element={<TransactionDetails />} />
            <Route path="/NomineeDetails" element={<NomineeDetails />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/investment" element={<NewInvestmentPage />} />
            <Route path="/paymentMethod1" element={<PaymentMethod1 />} />
            <Route path="/paymentMethod2" element={<PaymentMethod2 />} />
            <Route path="/kycDetails" element={<KYCDetails />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            

          </Routes>
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </div>
    </GlobalInfo.Provider>

  );
}

export default App;
