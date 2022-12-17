import styles from './Gallery.module.css';
import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';
import fourth from '../images/fourth.png';
import fifth from '../images/fifth.png';
import sixth from '../images/sixth.png';

const Gallery = () => {
    return (
        <div>
            <div className={styles.con1}>
                <hr></hr>
                <center><h1>See Our Gallery</h1></center>
            </div>
            <div className={styles.container}>
                <hr></hr>
                <img src={first}/>
                <div>
                    <img src={second}/>
                    <img src={fourth}/>
                </div>
                <div>
                    <div className={styles.third}><img src={third}/></div>
                    <img src={fifth}/>
                    <img src={sixth}/>
                </div>

            </div>
        </div>
    )
}

export default Gallery;