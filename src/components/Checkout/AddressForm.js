import * as React from "react";
import Grid from "@mui/material/Grid";
import { Input, Select } from "../Input";
import { Text }  from '../Text';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import countriesData from "./countries_states.json";

export default function AddressForm({addressForm, handleAddressForm}) {
  let regions = [];
  if (addressForm.country?.length > 0) {
    regions = countriesData.countries.filter(
      (countryData) => countryData.country === addressForm.country)[0].states;
  }

  return (
    <React.Fragment>
      <Text level={2}>
        Shipping address
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Text level={4} color="darkGrey">First Name</Text>
          <Input
            required
            id="firstName"
            name="firstName"
            value={addressForm.firstName}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Text level={4} color="darkGrey">Last Name</Text>
          <Input
            required
            id="lastName"
            name="lastName"
            value={addressForm.lastName}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12}>
        <Text level={4} color="darkGrey">Address line 1</Text>
          <Input
            required
            id="address1"
            name="address1"
            value={addressForm.address1}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12}>
        <Text level={4} color="darkGrey">Address line 2</Text>
          <Input
            id="address2"
            name="address2"
            value={addressForm.address2}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Text level={4} color="darkGrey">Zip / Postal code</Text>
          <Input
            required
            id="zip"
            name="zip"
            value={addressForm.zip}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Text level={4} color="darkGrey">City</Text>
          <Input
            required
            id="city"
            name="city"
            value={addressForm.city}
            onChange={handleAddressForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Text id="countries" level={4} color="darkGrey">Country</Text>
          <Select
            required
            id="countries-open-select"
            label="Country"
            name="country"
            value={addressForm.country}
            onChange={handleAddressForm}
          >
            <option value="" hidden></option>
            {countriesData.countries.map((countryData) => (
              <option key={countryData.country} value={countryData.country}>
                {countryData.country}
              </option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Text id="regions" level={4} color="darkGrey">State/Province/Region</Text>
          <Select
            required
            labelId="regions"
            id="regions-open-select"
            name="region"
            value={addressForm.region}
            onChange={handleAddressForm}
          >
          <option value="" hidden></option>
            {[... new Set(regions)].map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
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
