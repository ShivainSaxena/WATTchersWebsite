import Back from '../assets/back.mp4';
import { Grid, Typography, Box } from '@mui/material';
import '../App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TextAnim from '../animations/Textwrite';
import { motion } from 'framer-motion';

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


        </StyledEngineProvider>
     );
}
 
export default LandingPage;