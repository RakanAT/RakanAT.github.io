import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Soccer Lover's newsletter to receive invitations to all events planned! Soccer is for everyone.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
           <Link to='/About'><h2>About Us</h2></Link> 
            <Link to='/sign-up'>Register</Link>
            <Link to='/products'>Products</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>By Phone </Link>
            <Link to='/'>(613)555-5555</Link>
            <p></p>
            <Link to='/'>Email us</Link>
            <Link to='/'>soccerlover@soccerlover.com</Link>            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SoccerLover
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SoccerLover © 2020</small>
          
          <small class='website-rights'>Main location - 555 Soccer Ave, ON, K5K 5K5 </small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
