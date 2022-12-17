import styles from './Navbar.module.css';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <Link to='/'><div className={styles.main}><Button variant='secondary'><img src={logo}/></Button></div></Link>
                <Link to='/'><Button variant='primary'>Home</Button></Link>
                <Link to='/Cli'><Button variant='primary'>Clinic</Button></Link>
                <Link to='/Ser'><Button variant='primary'>Services</Button></Link>
                <Link to='/Blo'><Button variant='primary'>Blog</Button></Link>
                <Link to='/Car'><Button variant='primary'>Careers</Button></Link>
                <Link to='/Log'><div className={styles.prior}><Button variant='secondary'>Register/login</Button></div></Link>
            </ul>
        </div>
    )
}

export default Navbar;