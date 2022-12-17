import styles from './Footer.module.css';
import logo from '../images/logo.png';
import user from '../images/user.png';
import msg from '../images/msg.png';
import instagram from '../images/instagram.png';
import fb from '../images/fb.png';
import tweet from '../images/tweet.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src ={logo}/>
                <h2>For more information.</h2>
                <h2>Contact us here:</h2>
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
    )
}

export default Footer;