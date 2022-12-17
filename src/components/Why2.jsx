import styles from './Why2.module.css';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Appointment from '../images/Appointment.png';
import Contactus from '../images/Contactus.png';
import Calendar from '../images/Calendar.png';
import Schedule from '../images/Schedule.png';

const Why2 = () => {
    const log = () => {
        Swal.fire({
            icon: "information",
            title:"LOG IN FIRST",
            text: "To access the following, you have to sign in first",
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Success')
            } else if (result.isDenied) {
                Swal.fire('Failed')
            }
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <Link to='/Newa'><button onClick={log}><img src={Appointment}/></button></Link>
                <center><h4>Book <br></br>Appointment</h4></center>
            </div>
            <div>
                <Link to='/Newa'><button onClick={log}><img src={Calendar}/></button></Link>
                <center><h4>Calendar</h4></center>
            </div>
            <div className={styles.con}>
                <Link to='/Newa'><button onClick={log}><img src={Schedule}/></button></Link>
                <center><h4>Appointment <br></br>Status</h4></center>
            </div>
            <div>
                <Link to='/Newa'><button onClick={log}><img src={Contactus}/></button></Link>
                <center><h4>Contact Us</h4></center>
            </div>
        </div>
    )
}

export default Why2;