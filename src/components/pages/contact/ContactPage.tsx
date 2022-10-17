import {FC} from "react";
import {CustomHeading} from "../../ui/CustomHeading/CustomHeading";
import styles from './ContactPage.module.scss';
import {faPhoneFlip, faLocationArrow, faEnvelopesBulk} from "@fortawesome/free-solid-svg-icons";
import {InfoBox} from "../../ui/InfoBox/InfoBox";
import {ContactForm} from "./ContactForm";

export const ContactPage: FC = () => {
    return <div className={styles.container}>
        <CustomHeading text={'get in touch'}/>
        <section className={styles.infoContainer}>
            <InfoBox text={'Lenina Street, Penza, Russia'} icon={faLocationArrow}/>
            <InfoBox text={'fetishfestoff@mail.ru'} icon={faEnvelopesBulk}/>
            <InfoBox text={'+7 987 508 53 36'} icon={faPhoneFlip}/>
        </section>
        <section className={styles.formContainer}>
            <ContactForm/>
            <div className={styles.map}>map</div>
        </section>
    </div>
}