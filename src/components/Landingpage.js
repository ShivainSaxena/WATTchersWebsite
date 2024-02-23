import Back from '../assets/back.mp4';
import { Grid, Typography, Box } from '@mui/material';
import '../App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TextAnim from '../animations/Textwrite';
import { motion } from 'framer-motion';
import Placeholder from '../assets/placeholder.png';


const LandingPage = () => {
    const itemVariants = {
        hidden: {
          opacity: 0,
          y: 15
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      };
    const second = `We'll help you watch your WATT's!`;
    return ( 
        <StyledEngineProvider injectFirst>
            <div className="firstScreen">
              <video src={Back} autoPlay muted loop className="backdrop"></video>
              <div className="overlay"></div>
              <Box display={'flex'} justifyContent={'center'} className='landingText'>
                  <motion.h1
                  variants={itemVariants}
                  className="mainText"
                  >
                      <TextAnim delay={1} text='We are the WATTchers' />
                  </motion.h1>
              </Box>
              <Box display={'flex'} justifyContent={'center'}>
                  <motion.h1
                  variants={itemVariants}
                  className="secondText"
                  >
                      <TextAnim delay={1} text={second} />
                  </motion.h1>
              </Box>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={1}>

              </Grid>
              <Grid item xs={10}>
                <Typography variant='h2' className='mission'>
                  Our Mission
                </Typography>
                <Box display={'flex'}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant='h4'>
                    At WATTchers, we save you the energy to reduce costs on your energy bill.
                    </Typography>
                    <Typography variant='h5' className='missionText'>
                    With the cost of living exponentially rising, everyone’s trying to find a way to lower their living expenses. The price to receive basic necessities has become outrageous, especially for energy usage. Here at WATTchers, our goal is for you to save money on your energy bill and help you reduce the amount of energy being wasted in your home. <br /><br /> 
                    As electricity is the key to powering our homes, our solution is to monitor your electricity usage in different parts of your home, and then relay this information back to you. You’ll be able to see which appliances and rooms in your home use the most electricity, which will let you know what electrical source to cut down on. 
                    </Typography>

                  </Box>
                  <img src={Placeholder} alt="landingImage" className='landingImage' />
                </Box>
                <Typography variant='h5' className='missionTextBottom'>
                  To reduce the amount of electricity wasted, our proposed design consists of a partially solar powered home that switches between solar energy or conventional transmissible energy. Depending on the time of day, or the amount of energy being used, the system would analyze the electricity usage and optimize the distribution of electricity in your home. In other words, the system automatically switches between solar or traditional transmissible electricity coming into your home, based on which method is more energy efficient. In addition, the system displays the source of where most of the energy is being consumed, and alerts you so you can reduce your electricity consumption. 
                  As a result, the system does the work of managing your electricity output for you, saving you energy and money for your electricity bills.
                </Typography>
                
              </Grid>
              <Grid item xs={1}>

              </Grid>

            </Grid>
            

        </StyledEngineProvider>
     );
}
 
export default LandingPage;