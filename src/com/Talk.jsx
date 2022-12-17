import styles from './Talk.module.css';
import Swal from "sweetalert2";
import Button from '../components/Button.jsx';
import talkbar from '../images/talkbar.png';

const Talk = () => {
    const Send = () => {
        Swal.fire({
            icon: "success",
            title:"SUCCESSFULLY SENT",
            text: "Your message was successfully sent to All active staff",
        })
    }
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                <h3>New Message:</h3>
                <ul>
                    <li>
                        <div className={styles.top}>
                            <div>
                                <p>To:</p>
                                <hr></hr>
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <p>Subject:</p>
                            </div>
                            <textarea id="text" name="text" rows="10" cols="50"></textarea>
                            <div className={styles.last}>
                                <div className={styles.s}><button onClick={Send}>Send</button></div>
                                <Button><img src={talkbar}></img></Button>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Talk;