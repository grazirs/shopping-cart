import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button }  from '../Button';
import { Text }  from '../Text';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const theme = createTheme();

export default function Checkout({cart}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressIsValid, setAddressIsValid] = React.useState(false)
  const [paymentIsValid, setPaymentIsValid] = React.useState(false)
  const [addressForm, setAddressForm] = React.useState({ 
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    country: "",
    region: ""
  });

  const [paymentForm, setPaymentForm] = React.useState({ 
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const isFormValid = () => {
    return addressIsValid && activeStep === 0 || paymentIsValid && activeStep === 1 || activeStep === 2 ;
  }

  const checkAddressValidation = (form) => {
    const isValid = form.checkValidity();
    setAddressIsValid(isValid);
  }

  const handleAddressForm = (event) => {
    const newAddress = { ...addressForm, [event.target.name]: event.target.value };
    setAddressForm(newAddress);
    checkAddressValidation(event.target.form, setAddressIsValid);
  }

  const checkPaymentValidation = (form) => {
    const isPaymentValid = form.checkValidity();
    setPaymentIsValid(isPaymentValid);
  }

  const handlePaymentForm = (event) => {
    const newPayment = { ...paymentForm, [event.target.name]: event.target.value };
    setPaymentForm(newPayment);
    checkPaymentValidation(event.target.form, setPaymentIsValid);
  }

  const handleNext = () => {
    if (isFormValid) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent() {
    switch (activeStep) {
      case 0:
        return <AddressForm 
          addressForm = {addressForm}
          handleAddressForm = {handleAddressForm}
        />;
      case 1:
        return <PaymentForm 
          paymentForm = {paymentForm}
          handlePaymentForm = {handlePaymentForm}
        />;
      case 2:
        return <Review 
          cart = {cart}
          addressForm = {addressForm}
          paymentForm = {paymentForm}
        />;
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper component="form" onSubmit={(event) => {event.preventDefault(); handleNext()}} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Text level={1} align="center">
            Checkout
          </Text>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Text level={5}>
                  Thank you for your order.
                </Text>
                <Text level={3}>
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Text>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent()}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <Button type="submit"
                    disabled={!isFormValid()}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
