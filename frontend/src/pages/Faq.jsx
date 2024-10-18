import NavBar from '@/components/NavBar';
import HeaderNormal from '@/components/header/HeaderNormal';
import React from 'react';

const Faq = () => {
  return (
    <>
    <HeaderNormal />
    <div className="py-5 px-4">
        
        <h1 className="text-2xl text-center font-bold pt-5 pb-5 pb-2 text-[#0097B2] dark:text-[#FFDE59]">Frequently Asked Questions</h1>
        
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">1. How can I open an account?</h2>
          <p>You can open an account directly through our app. Simply go to the "Open Account" tab and follow the instructions.</p>
        </div>
      
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">2. How can I transfer money?</h2>
          <p>To transfer money, navigate to the "Transfers" tab, enter the recipient's details, and select the amount you wish to transfer.</p>
        </div>
      
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">3. Is my money transfer secure?</h2>
          <p>Yes, we use industry-leading security technologies to ensure that your transfers are safe and secure.</p>
        </div>
      
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">4. How can I check my account balance?</h2>
          <p>You can check your account balance anytime through the "Account Balance" tab in the app.</p>
        </div>
      
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">5. What should I do if I forget my password?</h2>
          <p>If you forget your password, you can click on "Forgot Password" on the login page and follow the instructions to reset your password.</p>
        </div>
      
        <div className="mb-24">
          <h2 className="text-lg font-bold mb-2">6. How can I contact customer service?</h2>
          <p>You can reach our customer service anytime by phone at XXX-XXX-XXXX or by email at support@bankapp.com.</p>
        </div>
      </div>
      
    <NavBar />
    
    </>
  );
};

export default Faq;
