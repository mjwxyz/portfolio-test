import React from 'react';
import './About.css'
import { SiHtml5, SiReact, SiCss3, SiAdobepremierepro } from 'react-icons/si';
import { GiSushis } from "react-icons/gi";
// import { VscServerProcess
// } from 'react-icons/vsc'
import Card from '../Card/Card';


const About = () => {
  return (
<div className="about">
    <div className="container">
      <h2>Unleashed Creativity</h2>
      <p>Michael J. Becerril is a multi-disciplinary artist and digital marketing enthusiast with a knack for creative design, effective marketing strategies, and commitment to valuable results. Becerril currently focuses on social media marketing, videography, and photography.</p>
    <div className="card-container">
        <div className="card">
            <Card icon={<GiSushis className='icon' />}heading='SHIMA SUSHI' text='Shima Sushi Bar & Oriental Cuisine is a Korean BBQ and Sushi Restaurant located in Aguadilla, Puerto Rico.' />
            <a className="btn2" href="https://vigilant-boyd-b888e8.netlify.app/#">Demo Site</a>
        </div>
        <div className="card">
            <Card icon={<SiReact className='icon' />} heading='React' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'/>
        </div>
        <div className="card">
            <Card icon={<SiCss3 className='icon' />} heading='CSS' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'/>
        </div>
        <div className="card">
            <Card icon={<SiAdobepremierepro className='icon' />} heading='Videography' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
        </div>
        </div>
        <a href="/" className="btn">Contact</a>
    </div>
  </div>
  )
};

export default About;
