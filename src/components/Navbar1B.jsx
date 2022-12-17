import styles from './Navbar1B.module.css';
import Button from './Button.jsx';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar1B = () => {
    return (
        <div className={styles.container}>
            <ul>
                <Link to='/Welcome'><div className={styles.main}><Button variant='secondary'><img src={logo}/></Button></div></Link>
                <Link to='/WElcome'><Button variant='primary'>Home</Button></Link>
                <Link to='/Cli1'><Button variant='primary'>Clinic</Button></Link>
                <Link to='/Ser1'><Button variant='primary'>Services</Button></Link>
                <Link to='/Blo1'><Button variant='primary'>Blog</Button></Link>
                <Link to='/Car1'><Button variant='primary'>Careers</Button></Link>
                <div className={styles.dropdown}>
                    <div className={styles.drop}>
                        <span>Welcome, User!</span>
                        <div className={styles.content}>
                            <Link to='/'><Button variant='primary'>Log out</Button></Link>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar1B;