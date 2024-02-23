import { Grid, Typography, Box } from '@mui/material';

const Contact = () => {
    return ( 
        <div className="contactPage">
            <h1 className='contactHeader'>Connect With Us</h1>
            <Box className="formContainer" display={'flex'} flexDirection={'column'}>
                <form action="https://getform.io/f/mbkGzYbz" method="POST">
                    <Box display={'flex'} gap={5} className='labelInputGroup'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" required/>
                    </Box>
                    
                    <Box display={'flex'} gap={5} className='labelInputGroup'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" required/>
                    </Box>
                    <Box display={'flex'} gap={5} className='labelInputGroup'>
                        <label htmlFor="text">Text:</label>
                        <textarea name="text" id="text" cols="50" rows="5"></textarea>
                    </Box>
                    <button type="submit">Send</button>
                </form>
            </Box>
               
            
        </div>
     );
}
 
export default Contact;