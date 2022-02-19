import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
  }

  const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }));

  function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

const currencies = [
    {
      value: 'Вино красное',
    },
    {
      value: 'Вино белое',
    },
    {
      value: 'Не пью',
    },
    {
      value: 'Виски',
    },
    {
      value: 'Коньяк',
    },
    {
      value: 'Ром',
    },
  ];
  
  const meals = [
    {
      value: 'мясо',
    },
    {
      value: 'рыба',
    },
    {
      value: 'птица',
    },
    {
      value: 'вегетрианец',
    },
  ];


export default function AddressForm() {
    const [currency, setCurrency] = React.useState('мясо');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
      };
      const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="alcohol"
            select
            label="Напитки"
            value={currency}
            onChange={handleChange}
            helperText="Что предпочитаете пить?">
            {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
         </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="meal"
            select
            label="Еда"
            value={meals}
            onChange={handleChange}
            helperText="Что предпочитаете есть?">
            {meals.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
         </TextField>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={2}   
                direction="row"
                justifyContent="left"
                alignItems="center">
        <AirplanemodeActiveIcon color="primary"/>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label="Дата приезда"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </Grid>
        </Grid>
    <Grid item xs={12}>
    <Grid container spacing={2}   
                direction="row"
                justifyContent="left"
                alignItems="center">
        <AirplanemodeActiveIcon color="primary"/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label="Дата отьезда"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
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
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
        <RadioGroup name="use-radio-group" defaultValue="second">
      <MyFormControlLabel value="first" label="нужна" control={<Radio />} />
      <MyFormControlLabel value="second" label="не нужна" control={<Radio />} />
    </RadioGroup>
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Нужна помощь с бронированием отеля"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}