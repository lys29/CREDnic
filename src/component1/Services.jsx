import styles from './Services.module.css';
import oral from '../images/oral.png';
import extraction from '../images/extraction.png';
import filling from '../images/filling.png';
import check from '../images/check.png';

const Services = () =>{
    return (
        <div>
            <div className={styles.container}>
                <ul>
                    <li>
                        <h5>Oral Prophylaxis</h5>
                        <div className={styles.oral}>
                            <div>
                                <p>A dental prophylaxis is a cleaning procedure performed to thoroughly clean the teeth. Prophylaxis is an important dental treatment for halting the progression of periodontal disease and gingivitis.</p>
                                <p>This is a procedure in which bacterial plaque and tartar is removed from the surface of the teeth with the help of scaling and polishing</p>
                            </div>
                            <div>
                                <img src={oral}/>
                            </div>
                        </div>
                        <p>During a oral prophylaxis treatment, dentist will perform both scaling and polishing. During the scaling process, dental instruments are used to remove tartar, plaque, and stains from the teeth surface. This step is called supragingival cleaning. The next step is subgingival cleaning.</p>
                        <p>Oral prophylaxis is recommended to be done twice a year as a preventive measure, but should be performed every 3-4 months for patients with more severe periodontal disease. For patients who have braces or other orthodontic appliances, oral prophylaxis is recommended to be done more frequently.</p>
                    </li>
                    <hr></hr>
                    <li>
                        <h5>Tooth Extraction</h5>
                        <div className={styles.oral}>
                            <div>
                                <p>Tooth extraction is performed by a dentist or oral surgeon and is a relatively quick outpatient procedure with either local, general, intravenous anesthesia, or a combination. Removing visible teeth is a simple extraction. Teeth that are broken, below the surface, or impacted require a more involved procedure.</p>
                                <p>Before the date of your tooth extraction, you should avoid eating anything for 12 hours prior to the surgery. This can help prevent nausea during and after the procedure. If you are having a local anesthetic, you may not need to fast as long so be sure to inquire before the treatment.</p>
                            </div>
                            <div>  
                                <img src={extraction}/>
                            </div>
                        </div>
                        <p>How long does it take to recover from a tooth extraction? It depends on the complexity of your case. However, most people feel back to normal in just a few days. While you'll be able to return to routine activities within 48 to 72 hours, it usually takes the jawbone several weeks to heal completely.</p>
                    </li>
                    <hr></hr>
                    <li>
                        <h5>Tooth Filling</h5>
                        <div className={styles.oral}>
                            <div>
                                <p>A filling is a way to restore a tooth damaged by decay back to its normal function and shape. When a dentist gives you a filling, he or she first removes the decayed tooth material, cleans the affected area, and then fills the cleaned out cavity with a filling material.
By closing off spaces where bacteria can enter, a filling also helps prevent further decay. Materials used for fillings include gold, porcelain, a composite resin (tooth-colored fillings), and an amalgam (an alloy of mercury, silver, copper, tin and sometimes zinc).</p>
                            </div>
                            <div>
                            <img src={filling}/>
                            </div>
                        </div>
                        <p>Your dentist will numb the area and use a numbing gel before injecting a local anesthetic known as Lidocaine. You may feel a bit of a sting, but that's a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain.</p>
                        <p>Typically, fillings last around 10 years. Many restorations (the clinical term for dental fillings) last much longer.</p>
                    </li>
                    <hr></hr>
                    <li>
                        <h5>Check-Up</h5>
                        <div className={styles.oral}>
                            <div>
                                <p>A check-up allows your dentist to see if you have any dental problems and helps you keep your mouth healthy. Leaving problems untreated could make them more difficult to treat in the future, so it's best to deal with problems early, or, if possible, prevent them altogether.</p>
                                <p>A routine dental check-up helps with the prevention of a range of oral health concerns, including but not limited to periodontal disease, teeth decay, and teeth stains. This review discusses the purpose of a routine dental check-up and why it is so highly recommended among dentists.</p>
                                <p>The number will vary for different people, but usually we recommend having a dental check up every six months. If you are suffering from dental problems or have poor oral health, your dentist may recommend you visit as often as every three months for a check up</p>
                            </div>
                            <div>
                                <img src={check}/>
                            </div>
                        </div>
                    </li>
                    <hr></hr>
                </ul>
            </div>
        </div>
    )
}

export default Services;