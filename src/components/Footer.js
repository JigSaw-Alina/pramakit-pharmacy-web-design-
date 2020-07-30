import React from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';



const Footer = () => (
    <div className="second_section_container">
      <footer className="footer">
       <div className="container__footer">
         <div className="footer__contentBx">
            <div className="footer__about">
              <h3>About <span>Pharmative</span></h3>     
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, 
                 aut unde.</p>
            </div>
          </div>
          <div className="footer__contentBx">
          <div className="footer__nav">
             <h3>Navigation</h3>
             <ul>
                <li>Supplements</li>
                <li>Diet & Nutrition</li>
                <li>Vitamins</li>
                <li>Tea & Coffee</li>
             </ul>
          </div>
          </div>
          <div className="footer__contentBx">
          <div className="footer_Info">
            <h3>Contact Info</h3>
             <ul>
              <li><span><FaSearchLocation /></span> Amablle Bignay Val.City PH</li>
              <li><span><AiFillPhone /></span> +630512121555</li>
              <li><span><MdMail /></span> emailaddress@jigsaw.com</li>
             </ul>
          </div>
        </div>
        </div>
        <div className="footer__copyright">
          Copyright © 2020 All rights reserved | This template is made with by JigSaw
        </div>
      </footer>
    </div>
);


export default Footer;