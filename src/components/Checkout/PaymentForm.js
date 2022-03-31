import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Text } from '../Text';
import { Input } from '../Input';

export default function PaymentForm({paymentForm, handlePaymentForm}) {
  return (
    <React.Fragment>
      <Text level={3}>
        Payment method
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Text level={4} color="darkGrey">Name on card</Text>
          <Input
            required
            id="cardName"
            name="cardName"
            value={paymentForm.cardName}
            onChange={handlePaymentForm}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Text level={4} color="darkGrey">Card Number</Text>
            <Input
              required
              id="cardNumber"
              name="cardNumber"
              value={paymentForm.cardNumber}
              onChange={handlePaymentForm}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <Text level={4} color="darkGrey">Expiry date</Text>
            <Input
              required
              id="expDate"
              name="expiryDate"
              value={paymentForm.expiryDate}
              onChange={handlePaymentForm}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <Text level={4} color="darkGrey">CVV</Text>
            <Input
              required
              id="cvv"
              name="cvv"
              value={paymentForm.cvv}
              onChange={handlePaymentForm}
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
