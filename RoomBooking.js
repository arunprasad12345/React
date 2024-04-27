// RoomBooking.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileAlt, faVenusMars, faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BookingDetailsContainer = styled('div')({
    maxWidth: 300, // Adjust the width according to your preference
    margin: 'auto', 
    height:250,
    textAlign:'center',
    // textAlign:'auto',// Center the container
  });
const BookingSection = styled('div')({
  marginTop: '20px',
  padding: '30px',
//   textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.493)',
});

const RoomCard = styled(Card)({
  maxWidth: 250,
  margin: '25px',
});

const RoomBooking = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [memberCount, setMemberCount] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleRoomSelect = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleBookRoom = () => {
    // Handle room booking logic here
    // You can send booking details to the server, update state, etc.
    const newBooking = {
      room: selectedRoom,
      date: selectedDate,
      name,
      gender,
      age,
      mobileNumber,
      memberCount,
      checkInDate,
      checkOutDate,
    };
    setBookingDetails(newBooking);
  };

  return (
    <div>
      <BookingSection>
        {/* <Typography variant="h4">Room Booking</Typography> */}
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUser} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="room-select-label">Select Room</InputLabel>
                <Select
                  labelId="room-select-label"
                  id="room-select"
                  value={selectedRoom}
                  label="Select Room"
                  onChange={handleRoomSelect}
                >
                  <MenuItem value="room1">Room 1</MenuItem>
                  <MenuItem value="room2">Room 2</MenuItem>
                  <MenuItem value="room3">Room 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faVenusMars} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Number of Members"
                type="number"
                value={memberCount}
                onChange={(e) => setMemberCount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Check-in Date"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCalendar} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Check-out Date"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" style={{ backgroundColor: 'green', color: '#fff' }} onClick={handleBookRoom}>
  Confirm
</Button>

            </Grid>
          </Grid>
        </Container>
      </BookingSection>

      {bookingDetails && (
  <BookingSection>
    <Typography variant="h4" align="center">Booking Details</Typography>
    <BookingDetailsContainer>
        <RoomCard>
          <CardContent>
            <Typography variant="h5">{bookingDetails.room}</Typography>
            <Typography variant="body2">Date: {bookingDetails.date}</Typography>
            <Typography variant="body2">Name: {bookingDetails.name}</Typography>
            <Typography variant="body2">Mobile Number: {bookingDetails.mobileNumber}</Typography>
            <Typography variant="body2">Gender: {bookingDetails.gender}</Typography>
            <Typography variant="body2">Age: {bookingDetails.age}</Typography>
            <Typography variant="body2">Number of Members: {bookingDetails.memberCount}</Typography>
            <Typography variant="body2">Check-in Date: {bookingDetails.checkInDate}</Typography>
            <Typography variant="body2">Check-out Date: {bookingDetails.checkOutDate}</Typography>
          </CardContent>
        <Grid item xs={4}>
        <Button
                  variant="contained"
                  style={{ backgroundColor: 'green', color: '#fff' }}
                  component={Link} // Use Link from react-router-dom
                  to="/payment" // Specify the route you want to navigate to
                >
                  Make Payment
                </Button>


            </Grid>
        </RoomCard>
        </BookingDetailsContainer>
    
  </BookingSection>
)}

    </div>
  );
};

export default RoomBooking;
