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
                            <Typography variant='h3' className='logoName'>
                                WATTchers
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={5}>

                    </Grid>
                    <Grid item xs={5} >
                        <Box display='flex' sx={{marginTop: '30px', marginRight: '30px'}} justifyContent={'space-between'} >
                            <Link component={RouterLink} underline='none' to="/">
                                <Typography variant='h4'>
                                    Home
                                </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/aboutus">
                                <Typography variant='h4'>
                                    About Us
                                </Typography>
                            </Link>
                            <Link component={RouterLink} underline='none' to="/contact">
                                <Typography variant='h4'>
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