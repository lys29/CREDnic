import styles from './Title.module.css';
import { Link } from 'react-router-dom';
import title from '../images/title.png';

const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h5>We Care for your Smile</h5>
                    <h1>Our Commitment to Dental health is to set to last forever.</h1>
                    <p>Our professional doctors will take care of your dental health. Set the best time and we are ready to help you.</p>
                    <div className={styles.con1}>
                        <Link to='/Let'><div className={styles.b1}><button>Let's Talk</button></div></Link>
                        <Link to='/Newa'><div className={styles.b2}><button>Make Account</button></div></Link>
                    </div>
                </div>
                <div>
                    <img src = {title}/>
                </div>
            </div>
        </div>
    )
}

export default Title;