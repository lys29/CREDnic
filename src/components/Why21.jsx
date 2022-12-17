import styles from './Why21.module.css';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import Appointment from '../images/Appointment.png';
import Calendar from '../images/Calendar.png';
import Schedule from '../images/Schedule.png';
import Contactus from '../images/Contactus.png';

const Why21 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <Link to='/Ap'><Button><img src={Appointment}/></Button></Link>
                <center><h4>Book <br></br>Appointment</h4></center>
            </div>
            <div>
                <Link to='/Cal1'><Button><img src={Calendar}/></Button></Link>
                <center><h4>Calendar</h4></center>
            </div>
            <div className={styles.con}>
                <Link to='/Schedule1'><Button><img src={Schedule}/></Button></Link>
                <center><h4>Appointment <br></br>Status</h4></center>
            </div>
            <div>
                <Link to='/Call1'><Button><img src={Contactus}/></Button></Link>
                <center><h4>Contact Us</h4></center>
            </div>
        </div>
    )
}

export default Why21;