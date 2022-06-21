import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review({cart, addressForm, paymentForm}) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart.reduce((previousProduct, currentProduct) => {
              previousProduct.price += currentProduct.price
              return previousProduct
            }, {price: 0}
            ).price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {addressForm.firstName} {addressForm.lastName}
          </Typography>
          <Typography gutterBottom>
            {addressForm.address1}, {addressForm.address2}, {addressForm.zip},
            {addressForm.city}, {addressForm.country}, {addressForm.region}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={12}>
                <Typography gutterBottom>Card holder {paymentForm.cardName}</Typography>
                <Typography gutterBottom>Card number {'xxxx-xxxx-xxxx'+paymentForm.cardNumber.substring(14)}</Typography>
                <Typography gutterBottom>Expiry date {paymentForm.expiryDate}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
