import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css';



const Footer = () => { 
    return (

        <div class="container">

            <div><h3>follow us up:</h3></div>
            <ul>
            <li>
                <SocialIcon url="https://twitter.com/jaketrent"/>twitter</li>
 			<li>
             <SocialIcon url="https://facebook.com/jaketrent" />facebook</li>
 			<li>
             <SocialIcon url="https://instagram.com/jaketrent" />instagram</li>
             <li>
             <SocialIcon url="https://telegram.com/jaketrent" />telegram</li>
            </ul>
        </div>
    );
}
export default Footer;