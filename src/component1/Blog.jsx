import styles from './Blog.module.css';
import Button from '../components/Button.jsx';
import wisdom from '../images/wisdom.png';
import extract from '../images/extract.png';
import clean from '../images/clean.png';
import veneers from '../images/veneers.png';
import retainers from '../images/retainers.png';
import crown from '../images/crown.png';

const Blog = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <center><h1>Blog</h1></center>
                </div>
                <div className={styles.first}>
                        <ul>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>Wisdom Teeth and Oral Health</h4>
                                    </div>
                                    <div>
                                        <img src={wisdom}></img>
                                    </div>
                                </div>
                                <p>Wisdom Teeth and Oral Health  You will know when your wisdom teeth are  coming when there are a lot of symptoms appearing. Your gums might swell, you will feel jaw pain, or worse, you might have a hard time opening your mouth. Wisdom teeth are not that bad but...</p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>Decay on Wisdom Teeth:</h4>
                                    </div>
                                    <div>
                                        <img src={extract}></img>
                                    </div>
                                </div>
                                <p>Decay on Wisdom Teeth: Extraction vs. FillingThe appearance of your first wisdom tooth is considered a dental milestone. Most people have their first wisdom tooth between the ages of 17 and 21. These are located at the back of your mouth. Usually, people just let them...</p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                        </ul>
                </div>
                <div className={styles.first}>
                        <ul>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>How we Clean and Disinfect</h4>
                                    </div>
                                    <div>
                                        <img src={clean}></img>
                                    </div>
                                </div>
                                <p>What we do before and after patient?<br></br>
STEP 1: Remove used instruments and surface barriers.<br></br>
STEP 2: Clean and disinfect surfaces with disposable wipes.<br></br>
STEP 3: Wrap surface and install new surface barriers for next patient 
Be safe at Affinity Dental Clinics.
</p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>5 Surefire Ways to Whiten Veneers</h4>
                                        <p>Veneers are great and easy fixes for the perfect smile to boost your confidence. It</p>
                                    </div>
                                    <div>
                                        <img src={veneers}></img>
                                    </div>
                                </div>
                                <p>closes teeth gaps, straightens crooked teeth, and gives a whiter tooth appearance.
However, you’ll start to notice discoloration and staining after a while.
 To keep your perfect smile longer, follow these five great tips to keep them sparkly white:</p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                        </ul>
                </div>
                <div className={styles.first}>
                        <ul>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>How to Clean Removable Retainers</h4>
                                        <p>Just remember that keeping your retainers fresh and clean every day is important to your health. Unclean retainers can accumulate </p>
                                    </div>
                                    <div>
                                        <img src={retainers}></img>
                                    </div>
                                </div>
                                <p>bacteria and put you at risk for bad breath and tooth decay. </p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                            <li>
                                <div className={styles.spread}>
                                    <div>
                                        <h4>How soon should I get a crown after root canal treatment?</h4>
                                    </div>
                                    <div>
                                        <img src={crown}></img>
                                    </div>
                                </div>
                                <p>A Root Canal treatment is a procedure in which the damaged or infected tooth is repaired in the sense that the bacteria is removed. The term “root canal” was derived from the act of cleaning the canals of the tooth’s root. </p>
                                <Button variant='secondary'>read more</Button>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog;