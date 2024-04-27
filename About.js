

import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled('div')({
  marginTop: '10px',
  padding: '30px',
  textAlign: 'center',
  backgroundColor: 'sandybrown',
  color: 'black',
});

const TeamMember = ({ name, role, description, location, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const googleMapsUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius: '15px',
          transition: 'transform 0.2s',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div
          style={{ cursor: 'pointer' }}
          onClick={openGoogleMaps}
          role="button"
          tabIndex={0}
        >
          <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '15px 15px 0 0' }} />
        </div>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '100%',
            background: '#fff',
            borderRadius: '0 0 15px 15px',
          }}
        >
          <div>
            <Typography variant="h5">{name}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" style={{ marginRight: '5px' }} />
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {role}
              </Typography>
            </div>
            <Typography variant="body2">{description}</Typography>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={openGoogleMaps}>
              Visit
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

const About = () => {
  return (
    <div>
      <AboutSection>
        <Typography variant="h5">Places</Typography>
        <Typography variant="h5">Nature Is Not a Place To Visit It's a Home</Typography>
      </AboutSection>

      <br />

      <Container>
        <Grid container spacing={3}>
          {/* Team Member 1 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="KodaiKanal"
            role="Tamilnadu"
            description="Kodaikanal is a hill station and town, which is located in Dindigul district in the state of Tamil Nadu, India. "
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018251.jpg?k=72365e4c5025318a4918925241d60c2d3695fc1021b5f1bc56a9f466010443b6&o="
          />
          {/* Team Member 2 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="Munnar"
            role="Tamilnadu"
            description="Munnar, is a town and hill station on Western Ghats mountain ranges located in the Idukki district of the southwestern Indian state of Kerala"
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018218.jpg?k=de5aee0d3eadea599adf2f3e14d87fc82824c5d7fb7b0a243c5bf1fc0d790d8a&o="
          />
          {/* Team Member 3 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="Coonoor"
            role="Tamilnadu"
            description="Coonoor, is a Taluk and a municipality of the Nilgiris district in the Indian State of Tamil Nadu. As of 2011, the town had a population of 45,494."
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018308.jpg?k=06fc3908feae136e7f506a47e4d658b2794be75273ba6a141a07f53e30397e04&o="
          />
          {/* Team Member 4*/}
          <TeamMember
            name="Dehradun"
            role="UttaraKhand"
            description="Dehradun, also known as Dehra Doon, is the capital and the most populous city of the Indian state of Uttarakhand"
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018302.jpg?k=4b6b751f22e1c352c6c7ad6aec417eab01301b97316664351f7f8706637b6b90&o="
          />
          {/* Team Member 5 */}
          <TeamMember
            name="Shimoga"
            role="Karnataka"
            description="shimoga, officially known as Shivamogga, is a city and the district headquarters of Shimoga district in the central part of the state of Karnataka, India."
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018173.jpg?k=de47f7a77c981b59b0964790499fff45d7e27e6f001ee48bfd1775c0d6d2c964&o="
          />
          {/* Team Member 6 */}
          <TeamMember
            name="Chikmagalur"
            role="karnataka"
            description="Chikmagalur, known officially as Chikkamagaluru, is a city and the headquarters of Chikmagalur district in the Indian state of Karnataka"
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018318.jpg?k=6c1fc5a7d6c67ddc9590a89a9acfa15c068f20af15cbe0ad7d02606bd0eb5601&o="
          />
        </Grid>
      </Container>
    </div>
  );
};

export default About;
