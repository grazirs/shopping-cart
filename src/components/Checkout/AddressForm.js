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

export default function AddressForm() {
  const [country, setCountry] = React.useState("");
  const [regions, setRegions] = React.useState([]);
  const [region, setRegion] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    const filteredCountry = countriesData.countries.filter(
      (countryData) => countryData.country === event.target.value
    );
    setRegions(filteredCountry[0].states);
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="countries">Country</InputLabel>
          <Select
            required
            labelId="countries"
            id="countries-open-select"
            label="Country"
            onChange={handleChangeCountry}
            fullWidth
            variant="standard"
            value={country}
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
            onChange={handleChangeRegion}
            fullWidth
            variant="standard"
            value={region}
          >
            {regions.map((region) => (
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
