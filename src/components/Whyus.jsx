import styles from './Whyus.module.css';
import Why2 from './Why2.jsx';
import us from '../images/us.png';

const Whyus = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img src={us}/>
                </div>
                <div className={styles.serve}>
                    <h2>Why choose <br></br><strong>Our Clinic?</strong></h2>
                    <h4>We aim to provide the highest standards of care in a <br></br>relaxed, friendly and comfortable environment.</h4>
                    <p>Below are the following services</p>
                    <ul>
                        <li>Oral Prophylaxis</li>
                        <li>Tooth Extraction</li>
                        <li>Tooth Filling</li>
                        <li>Check-Up</li>
                    </ul>
                </div>
            </div>
            <div>
                <Why2 />
            </div>
        </div>
    )
}

export default Whyus;