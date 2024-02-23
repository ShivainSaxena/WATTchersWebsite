import Maanas from '../assets/maanas.png';
import Ak from '../assets/ak.jpeg';
import AE from '../assets/alexe.jpeg';
import AT from '../assets/alext.jpeg';


const About = () => {
    return ( 
        <div className='aboutPage'>
            <div className="cardContainer">
                <img src={Maanas} alt="profile" className='profilePic'/>
                <h1 className='profileName'>Maanas Saxena</h1>
                <p className="profileDesc">Role: <br />- Software Developer <br />- Electrical Technician</p>
            </div>
            <div className="cardContainer">
                <img src={Ak} alt="profile" className='profilePic'/>
                <h1 className='profileName'>A</h1>
                <p className="profileDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="cardContainer">
                <img src={AE} alt="profile" className='profilePic'/>
                <h1 className='profileName'>FirstName LastName</h1>
                <p className="profileDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="cardContainer">
                <img src={AT} alt="profile" className='profilePic'/>
                <h1 className='profileName'>FirstName LastName</h1>
                <p className="profileDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>

     );
}
 
export default About;