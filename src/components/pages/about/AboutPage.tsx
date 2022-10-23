import {FC} from "react";
import {CustomHeading} from "../../ui/CustomHeading/CustomHeading";
import styles from './AboutPage.module.scss';
import cn from "classnames";
import {ProgressBar} from "../../ui/ProgressBar/ProgressBar";
import {useSetPhoto} from "../../../hooks/useSetPhoto";

export const AboutPage: FC = () => {
    useSetPhoto()

    return <div className={styles.aboutContainer}>
        <CustomHeading text={'about me'}/>
        <section className={styles.infoBlock}>
            <div className={styles.infoLeftSideWrap}>
                <div className={styles.infoLeftSide}>
                    <p className={styles.block}>
                        Hello there! My name is <strong>Alan Walker</strong>. I am a graphic designer, and I’m very
                        passionate and dedicated
                        to my work.
                    </p>
                    <p className={styles.block}>With 20 years experience as a professional a graphic designer, I have
                        acquired the skills and
                        knowledge necessary to make your project a success.</p>
                </div>
            </div>
            <div className={styles.infoRightSideWrap}>
                <div className={styles.infoRightSide}>
                    <ul className={cn(styles.block, styles.list)}>
                        <li>
                            <span>Name:</span>
                            <span>Artem Fetisov</span>
                        </li>
                        <li>
                            <span>Address:</span>
                            <span>Lenina Street, Penza, Russia</span>
                        </li>
                        <li>
                            <span>Study:</span>
                            <span>Gnessin Academy</span>
                        </li>
                        <li>
                            <span>Email:</span>
                            <span>fetishfestoff@mail.ru</span>
                        </li>
                        <li>
                            <span>Phone:</span>
                            <span>+7 987 508 53 36</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <CustomHeading text={'skills'}/>
        <section className={styles.infoBlock}>
            <div className={styles.infoLeftSideWrap}>
                <div className={styles.infoLeftSide}>
                    <div className={styles.block}>
                        <ProgressBar width={95} label={'Typescript'}/>
                        <ProgressBar width={95} label={'React'}/>
                        <ProgressBar width={90} label={'Redux-toolkit'}/>
                        <ProgressBar width={40} label={'Unit tests'}/>
                        <ProgressBar width={90} label={'HTML & CSS'}/>
                        <ProgressBar width={90} label={'HTML & CSS'}/>
                        <ProgressBar width={86} label={'HTML & CSS'}/>
                    </div>
                </div>
            </div>
            <div className={styles.infoRightSideWrap}>
                <div className={styles.infoRightSide}>
                    <div className={styles.block}>
                        <ProgressBar width={95} label={'Typescript'}/>
                        <ProgressBar width={80} label={'React'}/>
                        <ProgressBar width={20} label={'Redux-toolkit'}/>
                        <ProgressBar width={80} label={'Unit tests'}/>
                        <ProgressBar width={16} label={'HTML & CSS'}/>
                        <ProgressBar width={90} label={'HTML & CSS'}/>
                        <ProgressBar width={90} label={'HTML & CSS'}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
}