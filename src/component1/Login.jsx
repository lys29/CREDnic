import styles from './Login.module.css';
import NavbarG from './NavbarG.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
                <ul>
                    <li>    
                        <div className={styles.con}>
                            <h2>Sign In</h2>
                            <div>
                                <input type="Name" placeholder="Email or Username"></input>
                            </div>
                            <div>
                                <input type="Pass" placeholder="Password"></input>
                            </div>
                            <div className={styles.mid}><Link to='/Welcome'><Button variant='primary'>Log In</Button></Link></div>
                            <p>Forgot Password?</p>
                            <div className={styles.end}>
                                <p>Don't have an account?</p>
                                <div className={styles.last}><Link to='/Newa'><Button variant="primary">Sign Up Here!</Button></Link></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login;