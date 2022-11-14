import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import Countries from './Pages/Countries/Countries';
import Eng1 from './Pages/Eng/Eng1';
import Eng2 from './Pages/Eng/Eng2';
import Careers from './Pages/FooterItems/Company/Careers';
import Security from './Pages/FooterItems/Company/Security';
import Story from './Pages/FooterItems/Company/Story';
import YselfPay from './Pages/FooterItems/Company/YselfPay';
import CustomerComplaints from './Pages/FooterItems/Legal/CustomerComplaints';
import LegalPrivacyPolicy from './Pages/FooterItems/Legal/LegalPrivacyPolicy';
import TermsAndConditions from './Pages/FooterItems/Legal/TermsAndConditions';
import FAQ from './Pages/FooterItems/Support/FAQ';
import SendingToKenya from './Pages/FooterItems/Support/SendingToKenya';
import SendingToNigeria from './Pages/FooterItems/Support/SendingToNigeria';
import SupportPrivacyPolicy from './Pages/FooterItems/Support/SupportPrivacyPolicy';
import Home from './Pages/Home/Home';
import OurStory from './Pages/Home/OurStory/OurStory';
import HowItWorks1 from './Pages/HowItWorks/HowItWorks1';
import HowItWorks2 from './Pages/HowItWorks/HowItWorks2';
import LearnMore from './Pages/LearnMore/LearnMore';
import Login from './Pages/Login/Login';
import Ratings from './Pages/Ratings/Ratings';
import SignUp from './Pages/SignUp/SignUp';
import WhoAreWe1 from './Pages/WhoAreWe/WhoAreWe1';
import WhoAreWe2 from './Pages/WhoAreWe/WhoAreWe2';

function App() {
  return (
    <div >
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='who1' element={<WhoAreWe1></WhoAreWe1>}></Route>
        <Route path='who2' element={<WhoAreWe2></WhoAreWe2>}></Route>
        <Route path='how1' element={<HowItWorks1></HowItWorks1>}></Route>
        <Route path='how2' element={<HowItWorks2></HowItWorks2>}></Route>
        <Route path='countries' element={<Countries></Countries>}></Route>
        <Route path='contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='ratings' element={<Ratings></Ratings>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='eng1' element={<Eng1></Eng1>}></Route>
        <Route path='eng2' element={<Eng2></Eng2>}></Route>
        <Route path='learn' element={<LearnMore></LearnMore>}></Route>

        <Route path='story' element={<Story></Story>}></Route>
        <Route path='security' element={<Security></Security>}></Route>
        <Route path='careers' element={<Careers></Careers>}></Route>
        <Route path='pay' element={<YselfPay></YselfPay>}></Route>
        <Route path='faq' element={<FAQ></FAQ>}></Route>
        <Route path='supportprivacy' element={<SupportPrivacyPolicy></SupportPrivacyPolicy>}></Route>
        <Route path='kenya' element={<SendingToKenya></SendingToKenya>}></Route>
        <Route path='nigeria' element={<SendingToNigeria></SendingToNigeria>}></Route>
        <Route path='complaints' element={<CustomerComplaints></CustomerComplaints>}></Route>
        <Route path='conditions' element={<TermsAndConditions></TermsAndConditions>}></Route>
        <Route path='legalprivacy' element={<LegalPrivacyPolicy></LegalPrivacyPolicy>}></Route>
      </Routes>
    </div>
  );
}

export default App;
