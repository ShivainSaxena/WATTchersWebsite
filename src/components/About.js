import Maanas from '../assets/maanas.png';
import Ak from '../assets/AK1.jpeg';
import AE from '../assets/alexe.jpeg';
import AT from '../assets/alext.jpeg';


const About = () => {
    return ( 
        <div className='aboutPage'>
            <div className="cardContainer">
                <img src={Maanas} alt="profile" className='profilePic'/>
                <h1 className='profileName'>Maanas Saxena</h1>
                <p className="profileDesc">Role: <br />- Firmware Developer <br />- Circuit Designer<br />- Web Developer <br />Linkedln: <a href="https://www.linkedin.com/in/maanas-saxena/" target='_blank' rel='noreferrer'>in/maanas-saxena/</a> <br />Email: <a href="mailto:maanas1@ualberta.ca">maanas1@ualberta.ca</a><br />Mobile: +1 (780) 918-7289</p>
            </div>
            <div className="cardContainer">
                <img src={Ak} alt="profile" className='profilePic'/>
                <h1 className='profileName'>Aniketh Kini</h1>
                <p className="profileDesc">Role: <br />- Software Engineer <br />- Embedded Software Testing <br />Linkedln: <a href="http://www.linkedin.com/in/aniketh-kini-605566217" target='_blank' rel='noreferrer'>in/aniketh-kini/</a> <br />Email: <a href="mailto:anikeths@ualberta.ca">anikeths@ualberta.ca</a><br />Mobile: +1 (780) 600-0388</p>
            </div>
            <div className="cardContainer">
                <img src={AT} alt="profile" className='profilePic'/>
                <h1 className='profileName'>Alexander Torres Jr.</h1>
                <p className="profileDesc">Role: <br />- Circuit Designer and Soldering Technician <br />- Embedded Systems Engineer <br />Linkedln: <a href= "https://www.linkedin.com/in/alexander-jr-torres/" target='_blank' rel='noreferrer'>in/alexander-jr-torres/</a> <br />Email: <a href="mailto:astorre1@ualberta.ca">astorre1@ualberta.ca </a><br />Mobile: +1 (403) 465-0066</p>
            </div>
            <div className="cardContainer">
                <img src={AE} alt="profile" className='profilePic'/>
                <h1 className='profileName'>Alex Ermube</h1>
                <p className="profileDesc">Role: <br />- Structural Engineer <br />- Graphic Designer <br />Linkedln: <a href= "https://www.linkedin.com/in/alex-ermube/" target='_blank' rel='noreferrer'>in/alex-ermube/</a> <br />Email: <a href="mailto:aermube@ualberta.ca">aermube@ualberta.ca </a><br />Mobile: +1 (587) 501-2539</p>
            </div>

        </div>

     );
}
 
export default About;