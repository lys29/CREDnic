import styles from './Contact.module.css';
import logo from '../images/logo.png';
import user from '../images/user.png';
import msg from '../images/msg.png';
import instagram from '../images/instagram.png';
import fb from '../images/fb.png';
import tweet from '../images/tweet.png';

const Contact = () =>{
    return(
        <div>
            <div className={styles.container}>
                <ul>
                    <li>
                        <h1>OFFICE OF HEALTH SERVICES (OHS)</h1>
                        <p>The TUP-Medical and Dental Clinic provides health-related services to the University. It is a team consisting of a physician, dentists, nurses and other trained paramedical staff. They provide routine medical and dental services such as consultations, perform the necessary basic procedures, facilitate the referral of patients to the specialized institutions, conduct the annual medical and dental evaluation of students and employees and provide lectures and other health related activities in cooperation with the other units or organizations of the school.
<br></br>Provide basic medical and dental services. Promote health and wellness among the school populace and encourage health knowledge and practices.</p>
                        <div className={styles.foot}>
                                <div>
                                    <img src = {logo}/>
                                    <h3>For more information.</h3>
                                    <h3>Contact us here:</h3>
                                    <div className={styles.logo}><img src={user}/><p>+63 9912345678</p></div>
                                    <div className={styles.logo}><img src={msg}></img><p>tupcavitedentist@gmail.com</p></div>
                                </div>
                                <div>
                                    <h2>Support</h2>
                                    <h6>Privacy Policy</h6>
                                    <h6>Cookie Policy</h6>
                                    <h6> Purchasing Policy</h6>
                                    <h6>Terms and Conditions</h6>
                                </div>
                                <div>
                                    <h2>Social Media</h2>
                                    <div className={styles.logo1}><img src={instagram}/><h6>https://www.instagram.com/tupdentist.cavite</h6></div>
                                    <div className={styles.logo1}><img src={fb}/><h6>https://www.facebook.com/tupdentist.cavite</h6></div>
                                    <div className={styles.logo1}><img src={tweet}/><h6>https://www.twitter.com/tupdentist.cavite</h6></div>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;