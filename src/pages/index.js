import React, { useState } from 'react';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import { homeObject } from '../components/AboveFold/Data';
import CallToAction from '../components/CallToAction';
import { cTAObject } from '../components/CallToAction/Data';
import Responsabilities from '../components/Responsabilities';
import { responsibilitiesObj } from '../components/Responsabilities/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Problems from '../components/Problems';
import Sidebar from '../components/Sidebar';
import AboveFold from '../components/AboveFold';
import Companies from '../components/Companies';
import { companiesObj } from '../components/Companies/Data';
import HelpAchieve from '../components/HelpAchieve';
import { helpAchieve } from '../components/HelpAchieve/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <AboveFold {...homeObject} />
          <Responsabilities {...responsibilitiesObj} />
          <Companies {...companiesObj} />
          <Problems />
          <HelpAchieve {...helpAchieve} />
          <InfoSection {...homeObjFive} />
          <CallToAction {...cTAObject} />
          <EmailSection />
          <Services />
          <Footer />
        </>
    );
};

export default Home;
