import {FC} from "react";
import {CustomHeading} from "../../ui/CustomHeading/CustomHeading";
import styles from './ContactPage.module.scss';
import {faPhoneFlip, faLocationArrow, faEnvelopesBulk} from "@fortawesome/free-solid-svg-icons";
import {InfoBox} from "../../ui/InfoBox/InfoBox";
import {ContactForm} from "./ContactForm";
import {useSetPhoto} from "../../../hooks/useSetPhoto";
import {MyMap} from "../../ui/Map/Map";

export const ContactPage: FC = () => {
    useSetPhoto()

    return <div className={styles.container}>
        <CustomHeading text={'get in touch'}/>
        <section className={styles.infoContainer}>
            <InfoBox text={'Lenina St., Penza, Russia'} icon={faLocationArrow}/>
            <InfoBox text={'fetishfestoff@mail.ru'} icon={faEnvelopesBulk}/>
            <InfoBox text={'+7 987 508 53 36'} icon={faPhoneFlip}/>
        </section>
        <section className={styles.formContainer}>
            <ContactForm/>
            <div className={styles.map}>
                <MyMap/>
            </div>
        </section>
    </div>
}