import * as React from 'react';
import { AppBar, Box, CssBaseline, Grid, styled, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import luv from '../images/1.jpg';
import kv74 from '../images/3.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const theme = createTheme();

export default function Starting() {
  
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={3}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}   
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid container spacing={2}   
                        direction="row"
                        justifyContent="left"
                        alignItems="center">
                        <Grid item xs={4}>

                        <img src={luv} style={{width: 200, height: 250, position: 'inherit'}}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography component="h1" variant="h4" align="center">
                            Some text about what we do, how we met and so on
                            </Typography>
                            <Typography component="h3" variant="h3" align="left">
                            Some text about what we do, how we met and so on
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}   
                        direction="row"
                        justifyContent="right"
                        alignItems="right">
                        <Grid item xs={4}>

                        <img src={kv74} style={{width: 200, height: 250, position: 'inherit'}}/>
                        </Grid>
                    </Grid>    
            </Grid>
            </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    );
    }