import styles from './Title1.module.css';
import Button from './Button.jsx';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import title from '../images/title.png';

const Title1 = () => {
    const Done = () => {
        Swal.fire({
            icon: "alert",
            title:"ALREADY SIGNED IN",
            text: "You are already signed up",
        })
    }
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h5>We Care for your Smile</h5>
                    <h1>Our Commitment to Dental health is to set to last forever.</h1>
                    <p>Our professional doctors will take care of your dental health. Set the best time and we are ready to help you.</p>
                    <div className={styles.con1}>
                        <Link to='/Let1'><div className={styles.b1}><Button variant='secondary'>Let's Talk</Button></div></Link>
                        <div className={styles.b2}><button onClick={Done}>Make Account</button></div>
                    </div>
                </div>
                <div>
                    <img src={title}/>
                </div>
            </div>
        </div>
    )
}

export default Title1;