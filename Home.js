// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import { FaPhone, FaRegFileAlt, FaShieldAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navigation from './Navigation';
import About from './About';

const HomeContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '125px',
});

const HeroContent = styled('div')({
  flex: 1,
  padding: '64px 0 48px',
  textAlign: 'center',
  background: '#f9f9f9',
  border: '7px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '280px',
});

const ExploreButton = styled(Button)({
  marginTop: '32px',
  background: '#3f51b5',
  color: '#fff',
  padding: '14px 32px',
  fontSize: '1.2rem',
  borderRadius: '8px',
  fontFamily: 'Arial, sans-serif',
  '&:hover': {
    background: '#303f9f',
  },
});

const AuthButton = styled(Button)({
  padding: '14px 24px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '8px',
  fontSize: '1rem',
  fontFamily: 'Arial, sans-serif',
  '&:hover': {
    background: '#0056b3',
  },
});



const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  background: '#333',
  padding: '20px 0',
  color: '#fff',
  bottom: 0,
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: '#f9f9f9',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const FooterIcon = styled('div')({
  marginRight: '8px',
  color: '#f9f9f9',
});

const NavigationBottom = styled(Navigation)({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  background: '#333',
});

const Home = () => {
  // const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);

  return (
    <div>
      <div id="home-section">
        <HomeContainer>
          <HeroContent>
            <Container maxWidth="md">
              <Typography variant="h2" align="center" color="primary" gutterBottom style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Welcome to <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>BookmyStay</span>
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ fontFamily: 'Georgia, serif' }}>
                Find the perfect room for your stay and make your experience memorable.
              </Typography>
              <ExploreButton component={Link} to="/room-booking">
                Bookings
              </ExploreButton>
              <br /><br />
              <AuthButton component={Link} to="/signup">
                Signup
              </AuthButton>
              <AuthButton component={Link} to="/login">
                Login
              </AuthButton>
              {/* <OpenSlidePanelButton onClick={() => setIsSlidePanelOpen(true)}>
                Open Slide Panel
              </OpenSlidePanelButton> */}
              <br />
            </Container>
          </HeroContent>
        </HomeContainer>
      </div>
      <About />
      <br />
      {/* <SlidePanel isOpen={isSlidePanelOpen} onClose={() => setIsSlidePanelOpen(false)} /> */}
      {/* Footer */}
      <Footer>
        <FooterLink to="/contact-us">
          <FooterIcon>
            <FaPhone />
          </FooterIcon>
          Contact Us
        </FooterLink>

        {/* Social Media Icons for Contact Us */}
        <FooterIcon>
          <a href="https://www.facebook.com"><FaFacebook /> Facebook</a>
        </FooterIcon>
        <FooterIcon>
          <a href="www.twitter.com"><FaTwitter /> Twitter</a>
        </FooterIcon>
        <FooterIcon>
          <a href="https://www.instagram.com"><FaInstagram /> Instagram</a>
        </FooterIcon>
        <FooterIcon>
          <a href="https://www.linkedin.com"><FaLinkedin /> Linkedin</a>
        </FooterIcon>
      </Footer>
      <Footer>
        <FooterLink to="/terms-and-conditions">
          <FooterIcon>
            <FaRegFileAlt />
          </FooterIcon>
          Terms and Conditions<br />
        </FooterLink>
        Agree to our terms including accurate information submission during booking.<br />
        !Users must adhere to payment terms; cancellations are subject to specified policies.<br />
        BookmyStay reserves the right to update or modify these terms and conditions at any time without prior notice.<br />
        Users are encouraged to review the terms regularly to stay informed about any changes.<br />
        cancellations are subject to specified policies.
        <Footer>

          <FooterLink to="/privacy-policy">
            <FooterIcon>
              <FaShieldAlt />
            </FooterIcon>
            Privacy Policy<br />
          </FooterLink>
          Information Collection: We collect personal details for bookings, including names, emails.<br />
          Secure Transactions: Ensure secure handling payment information.<br />
          Usage Analysis: Your interactions with site inform improvements for better user experience.<br />
          Information Sharing: Necessary data is shared with service providers for bookings & payments.<br />
          Your Choices: Access, update, and manage preferences for personalized control over your information.<br />
        </Footer>
      </Footer>

      {/* Navigation at the bottom */}
      <NavigationBottom />
    </div>
  );
};

export default Home;
