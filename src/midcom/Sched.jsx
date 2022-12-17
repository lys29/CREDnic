import styles from './Sched.module.css';
import Button from '../components/Button.jsx';
import schedlogo from '../images/schedlogo.png';

const Sched = () => {
    return (
        <div>
            <div className={styles.container}>
               <center><h1>Booked Appointment</h1></center>
               <div className={styles.right}>
                    <div className={styles.report}>
                        <div className={styles.logo}>
                            <img src={schedlogo}></img>
                            <p>Appointment from Book Schedule</p>
                        </div>
                    </div>    
                    <ul>
                        <input type='search' placeholder='Search...'></input>
                    </ul>
                    <ul className={styles.board}>
                        <ul className={styles.bar}>
                            <li><h6>Schedule Date</h6></li>
                            <li><h6>Schedule Time</h6></li>
                            <li><h6>Doctor's Name</h6></li>
                            <li><h6>Status</h6></li>
                            <li><h6>Action</h6></li>
                        </ul>
                        <ul className={styles.attend}>
                            <li>December 23, 2022</li>
                            <li>2:00 PM - 2:30 PM</li>
                            <li>Maria Teresa F. Mateo <br></br>Campus Physician</li>
                            <li>Process</li>
                            <li><Button variant='primary'>Cancel</Button></li>
                        </ul>

                        <ul className={styles.attend}>
                            <li>December 17, 2022</li>
                            <li>8:30 AM - 9:00 AM</li>
                            <li>Sheryl P. Chavez <br></br>Campus Dentist</li>
                            <li>Process</li>
                            <li><Button variant='primary'>Cancel</Button></li>
                        </ul>

                        <ul className={styles.attend}>
                            <li>December 12, 2022</li>
                            <li>10:00 AM - 10:30 AM</li>
                            <li>Rosemae F. Rosete <br></br>Campus Nurse</li>
                            <li>Process</li>
                            <li><Button variant='primary'>Cancel</Button></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sched;