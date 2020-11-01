import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const AppFooter = () =>  {

    return (
       
        <footer className="footer" id='footer_id'>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-widget">
                <h3>Contact</h3>
                <div className="footer-widget-content">
                  <a href="mailto:mypara-pharmacie@gmail.com " className="contact-link">user_authentification@gmail.com </a>
                  <a href="mailto:support@gmail.com" className="contact-link red"> support@gmail.com </a>
                  <a href="tel:0121234" className="contact-link">(+216) 55 982 431</a>
                  <br/><br/><br/>
                  <div className="footer-social">
                        <ul>
                            <li><a href="https://www.facebook.com/pharmaciedurondpointfortdefrance/" target='_blanc'><i className="fab fa-facebook-f fa-2x"></i></a></li>
                            <li><a href="https://www.instagram.com/pharmacie_fortdefrance/" target='_blanc'><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li><a href="https://www.youtube.com/watch?v=e8iMNtG7ji8" target='_blanc'><i className="fab fa-youtube fa-2x"></i></a></li>
                            <li><a href="https://www.google.com/maps/place/Pharmacie+Du+Lac/@36.8353515,10.2334486,16z/data=!4m8!1m2!2m1!1slac1,+tunis+pharacie!3m4!1s0x0:0xc04cefe49afef92!8m2!3d36.8331211!4d10.2374795"  target="_blanc" className="contact-icon"><i className="fas fa-map-marker-alt fab fa-2x"></i></a></li>   
                        </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="footer-widget">
              <h3>News</h3>
              <div className="footer-widget-content">
                <div className="media">
                    <div className="media-left">
                       <a href="http://localhost:3001/blog"><img className="media-object" src="https://www.pharma-medicaments.com/media/pharmamedicamentsbloggingembre__011133000_1025_05072018.jpg" alt="..." width='65' height='65' /></a>
                    </div>
                    <div className="media-body">
                       <p><a href="http://localhost:3001/blog" className='postNews'>LE GINGEMBRE, UNIQUEMENT APHRODISIAQUE ? </a></p>
                      
                    </div>
                 </div>
                <div className="media">
                    <div className="media-left">
                       <a href="http://localhost:3001/blog"><img className="media-object" src="https://www.pharma-medicaments.com/media/pharmamedicamentsbloglait__032131400_1452_22012018.jpg" alt="..." width='65' height='65' /></a>
                    </div>
                    <div className="media-body">
                       <p><a href="http://localhost:3001/blog" className='postNews'>MICHEL EDOUARD, LA FIN DU VENGEUR MASQUÉ </a></p>
                    </div>
                 </div>
              </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="footer-widget">
              <h3>Horraires d'ouverture</h3>
              <div className="footer-widget-content">
              <div className="open-time ">
                <ul className="opening-time">
                  <li><span><i className="fa fa-times"></i></span><p className="clock-time"><strong>Lundi :</strong> fermé</p>
                   </li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Mar-Vend :</strong> 8:00 - 12:00</p></li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Sam-Dim  :</strong> 7:00 - 13:00</p></li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Vacances :</strong> 00:00-12:00</p></li>
                </ul>
                 </div>
              </div>
              </div></div>
          </div>
        </div>
        <div className="container-rights" >
            <p className="container">©2020–2021 All rights reserved. <a href="#">Privacy</a> and <a href="#">Terms</a>.</p>
        </div>
      </footer>
        )   
}

export default AppFooter;