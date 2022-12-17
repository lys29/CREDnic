import styles from './Calendar.module.css';
import blklogo from '../images/blklogo.png';

const Calendar = () =>{
    return (
        <div>
            <div className={styles.spread}>
                <div className={styles.left}>
                    <img src={blklogo}/>
                    <h1>Calendar</h1>
                </div>
                <div className={styles.right}>
                    <div className={styles.month}>      
                        <ul>
                            <li className={styles.prev}>&#10094;</li>
                            <li className={styles.next}>&#10095;</li>
                            <li className={styles.mon}>
                                <p>December</p>
                                <br></br>
                                <h6><span>2022</span></h6>
                            </li>
                        </ul>
                    </div>

                        <ul className={styles.weekdays}>
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                        </ul>

                        <ul className={styles.days}>  
                            <li>27</li>
                            <li>28</li>
                            <li>30</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li><span className={styles.active}>9</span></li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li>29</li>
                            <li>30</li>
                            <li>31</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Calendar;