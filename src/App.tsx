import React, {FC} from 'react';
import {Header} from "./components/screens/Header/Header";
import {MailBlock} from "./components/screens/MainBlock/MainBlock";
import {SkillsBlock} from "./components/screens/SkillsBlock/SkillsBlock";
import {WorksBlock} from "./components/screens/WorksBlock/WorksBlock";
import {RecruitmentBlock} from "./components/screens/RecruitmentBlock/RecruitmentBlock";
import {ContactsBlock} from "./components/screens/ContactsBlock/ContactsBlock";
import {Footer} from "./components/screens/Footer/Footer";

export const App: FC = () => {
    return (
        <div>
            <Header/>
            <MailBlock/>
            <SkillsBlock/>
            <WorksBlock/>
            <RecruitmentBlock/>
            <ContactsBlock/>
            <Footer/>
        </div>
    );
}


