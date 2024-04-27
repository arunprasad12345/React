// BusList.js

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Rating,
  Chip,
  CardMedia,
  Divider,
  Grid,
} from '@mui/material';
// import acBusImage from './asserts/Tamara.jpg';
// import nonAcBusImage from './asserts/p.jpeg';
import './BusList.css';

const buses = [
  {
    id: 1,
    brand: 'Glyngarth',
    name: 'Ooty',
    description: 'The perfect room for your stay with a refreshing swimming pool at our resort.',
    rating: 4.5,
    //isAC: true,//
    image:'https://pix8.agoda.net/hotelImages/127/1270400/1270400_16121112520049598484.jpg?ca=6&ce=1&s=1024x768',
    liveTrackingUrl: 'https://earth.google.com/web/search/Glyngarth+Resort+Ooty,+Ooty,+Tamil+Nadu/@11.4833396,76.6987929,1800.33256133a,826.32677889d,35y,0h,0t,0r/data=CpIBGmgSYgolMHgzYmE4YmM1NDYyYTRkYWNkOjB4MmJmYzJlNmNiY2ZlZTllNBkzub1JePcmQCFUC9sFuSxTQConR2x5bmdhcnRoIFJlc29ydCBPb3R5LCBPb3R5LCBUYW1pbCBOYWR1GAIgASImCiQJFgPD-e4aQkAR0ZdBSdwZQkAZ5PvakaD-XMAhEDM8X_3_XMA6AwoBMA',
  },
  {
    id: 2,
    brand: 'Oberoi ',
    name: 'Udaipur',
    description: 'The perfect room for your stay with nature view point at our resort.',
    rating: 4.2,
    image:'https://media.cntraveler.com/photos/5c06e5a801ffc86b13da2529/16:9/w_2560%2Cc_limit/The-Oberoi-Udaivilas%2C-Udaipur__2018_Chandni----the-al-fresco-dining---The-Oberoi-Udaivilas%2C-Udaipur.jpg',
    // isAC: false,
    
    liveTrackingUrl: 'https://earth.google.com/web/search/Oberoi+udaipur/@24.5773827,73.6724412,618.45744635a,760.30811626d,35y,0h,0t,0r/data=CnkaTxJJCiUweDM5NmNjZjgwNGVhOWUyZjM6MHgyMWViODA2YmY5ZmM3ZTlhGbPGRVrPkzhAIeme0EYJa1JAKg5PYmVyb2kgdWRhaXB1chgCIAEiJgokCazbzWU73jtAEScphllalCrAGQqRAJH1BmFAIfhbfqtL9DhAOgMKATA',
  },
  {
    id: 3,
    brand: 'Tamara',
    name: 'kodaikanal',
    description: 'comfortable journey with Beauty of nature',
    rating: 3,
    // isAC: false,
    image:'https://tse3.mm.bing.net/th?id=OIP.p1WJSLCxWWnoiGkvlS9mlAHaEJ&pid=Api&P=0&h=180',
    liveTrackingUrl: 'https://earth.google.com/web/search/Tamara+resort+kodaikanal/@10.2241028,77.48286,2194.80698726a,830.22895975d,35y,0h,0t,0r/data=CoMBGlkSUwolMHgzYjA3NjY2ZGUxMDllZjk1OjB4ZWFiYzAwZDAyZWRkZGZhYRlR4imavXIkQCH7IqEt515TQCoYVGFtYXJhIHJlc29ydCBrb2RhaWthbmFsGAIgASImCiQJUAwEkc-UOEARuAPvGs-SOEAZWCw7nplrUkAhfRFm73hqUkA6AwoBMA3',
  },
  {
    id: 4,
    brand: 'Beyond By Sula',
    name: 'Nashik',
    description: 'spacious rooms for a comfortable journey with view Points',
    rating: 3.5,
    //isAC: true,
    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/7c/d6/beyond-by-sula.jpg?w=1200&h=-1&s=1',
    liveTrackingUrl: 'https://earth.google.com/web/search/Beyond+by+sula/@20.0031979,73.6533792,639.72079947a,788.4998083d,35y,0h,0t,0r/data=CnkaTxJJCiUweDNiZGRmMzZjZGRiOGQyZDc6MHgyY2QyOGE0ODhjZTNlMjYyGXfq25PRADRAIb_4_fbQaVJAKg5CZXlvbmQgYnkgc3VsYRgCIAEiJgokCZgul_YhdyRAEVH5GB1ZbiRAGVnO69YLYFNAIZ53VoTCXVNAOgMKATA',
  },
  // Add more bus details as needed
];

const BusCard = ({ bus }) => (
  <Card className="bus-card">
    <Grid container spacing={2}>
      <Grid item xs={14} md={4}>
        <CardMedia
          component="img"
          height="300"
          width="350"
          image={bus.image}
          alt={`${bus.brand} Bus`}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent className="bus-info">
          <Typography variant="h6">{bus.brand} - {bus.name}</Typography>
          <Typography variant="body2" color="textSecondary">{bus.description}</Typography>
          <Rating name="rating" value={bus.rating} precision={0.1} readOnly />
          <div className="bus-details">
            {/* <Chip label={bus.isAC ? 'Air Conditioned' : 'Non-Air Conditioned'} color="default" /> */}
            <Divider orientation="vertical" flexItem />
            <Chip label="Live Tracking" color="default" width="20px" />
          </div>
        </CardContent>
        <div className="actions">
          <Link to={`/room-booking`}>
            
            <Button variant="contained" color="primary" className="view-seats-btn">Book Now</Button>
          </Link>
          {bus.liveTrackingUrl ? (
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              className="live-tracking-btn"
              onClick={() => window.open(bus.liveTrackingUrl, '_blank')}
            >
              Loaction
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              className="live-tracking-btn"
              onClick={() => alert("Live tracking is not available for this bus.")}
            >
              {/* Live Tracking (N/A) */}
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  </Card>
);

const BusList = () => (
  <div>
    <span>Resorts</span>
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  </div>
);

export default BusList;