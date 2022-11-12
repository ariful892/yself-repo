import React from 'react';
import CustomersOpinion from './CustomersOpinion/CustomersOpinion';
import Footer from './Footer/Footer';
import GetStarted from './GetStarted/GetStarted';
import OurStory from './OurStory/OurStory';
import SendMoney from './SendMoney/SendMoney';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <SendMoney></SendMoney>
            <CustomersOpinion></CustomersOpinion>
            <OurStory></OurStory>
            <GetStarted></GetStarted>
            <Footer></Footer>
        </div>
    );
};

export default Home;