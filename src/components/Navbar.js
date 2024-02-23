import '../App.css';
import logo from '../assets/logo.png'
import { Grid, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const Navbar = () => {

    return ( 
        <div>
            <StyledEngineProvider injectFirst>
                <Grid container spacing={1} paddingTop={'5px'}>

                    <Grid item xs={2}  >
                        <Box display={'flex'} marginLeft={'20px'}>
                            <img src={logo} alt="logo" className='logo' />
                            <Typography className='logoName'>
                                WATTchers
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={6} >
                        <Box display='flex' sx={{marginTop: '30px', marginRight: '50px'}} justifyContent={'space-between'} >
                            <Link component={RouterLink} underline='none' to="/">
                                <Typography className='navLinks'>
                                    Home
                                </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/aboutus">
                                <Typography className='navLinks'>
                                    About Us
                                </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/projectinfo">
                                <Typography className='navLinks'>
                                    Project Info
                                </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/contact">
                                <Typography className='navLinks'>
                                    Contact
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </StyledEngineProvider>
        </div>
     );
}
 
export default Navbar;