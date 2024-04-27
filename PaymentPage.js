import React, { useState } from 'react';
import { faCreditCard ,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { InputAdornment } from '@mui/material';
import { InputAdornment, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [processing, setProcessing] = useState(false);
  const handlePayment = () => {
    // Set loading state
    setSuccessMessage('Processing payment...');
    setProcessing(true);

    // Simulate a delay for payment processing (adjust duration as needed)
    setTimeout(() => {
      // Simulate a successful payment
      setSuccessMessage('Payment successful!');
      setProcessing(false); // Set processing state to false when done
    }, 5000); // 2000 milliseconds (2 seconds) delay, adjust as needed
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0', textAlign: 'center' }}>
        Payment Page
      </Typography>

      <Card>
        <CardContent>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  variant="outlined"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faCreditCard} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  variant="outlined"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  variant="outlined"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePayment}
                  fullWidth
                  disabled={processing} // Disable button during processing
                >
                  {processing ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Pay Now'
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>

          

{successMessage && (
            <Box mt={2} textAlign="center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: 'green', fontSize: '2rem' }}
              />
              <Typography
                variant="h6"
                style={{ marginTop: '10px', color: 'green' }}
              >
                {successMessage}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default PaymentPage;