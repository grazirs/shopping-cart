import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import countriesData from "./countries_states.json";

export default function AddressForm({addressForm, handleAddressForm}) {
  let regions = [];
  if (addressForm.country?.length > 0) {
    regions = countriesData.countries.filter(
      (countryData) => countryData.country === addressForm.country)[0].states;
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={addressForm.firstName}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={addressForm.lastName}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressForm.address1}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressForm.address2}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={addressForm.zip}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={addressForm.city}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="countries">Country</InputLabel>
          <Select
            required
            labelId="countries"
            id="countries-open-select"
            label="Country"
            fullWidth
            name="country"
            variant="standard"
            value={addressForm.country}
            onChange={handleAddressForm}
            data-testid="select"
          >
            {countriesData.countries.map((countryData) => (
              <MenuItem key={countryData.country} value={countryData.country}>
                {countryData.country}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="regions">State/Province/Region</InputLabel>
          <Select
            required
            labelId="regions"
            id="regions-open-select"
            label="State/Province/Region"
            name="region"
            fullWidth
            variant="standard"
            value={addressForm.region}
            onChange={handleAddressForm}
          >
            {[... new Set(regions)].map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
