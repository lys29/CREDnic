import styles from './Careers.module.css';
import Button from '../components/Button.jsx';
import Swal from 'sweetalert2';
import logo from '../images/logo.png';
import Career from '../images/Career.png';

const Careers = () => {
    const submit = () => {
        Swal.fire({
            icon: "success",
            title:"SUCCESSFULLY SUBMITTED!",
            text: "Your resume has been send. Thank you for applying!",
        })
    }
        return (
            <div>
                <div className={styles.container}>
                    <div>
                        <h1>Be Part of Our Team!</h1>
                        <img src={Career}/>
                    </div>
                    <div className={styles.con}>
                        <ul>
                            <li>
                            <div className={styles.right}>
                                <h5>Submit Your Resume Now!</h5>
                                    <div>
                                        <input type="Name" placeholder="Full Name:"></input>
                                    </div>
                                    <div className={styles.mid}>
                                        <input type="Num" placeholder="Phone Number:"></input>
                                        <input type="Add" placeholder="Email Address:"></input>
                                    </div>
                                    <div>
                                        <input type="Address" placeholder="Address:"></input>
                                    </div>
                                    <h6>Resume File:</h6>
                                    <div className={styles.last}>
                                        <Button variant="primary"><strong>Choose File...</strong></Button>
                                        <p><strong>No file chosen</strong></p>
                                    </div>
                                    <div className={styles.btn}>
                                        <button onClick={submit}><strong>Submit</strong></button>
                                        <img src={logo}></img>
                                    </div>
                                    <div className={styles.last1}>
                                        <p>Language </p>
                                        <p>Terms</p>
                                        <p>Help</p>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default Careers;