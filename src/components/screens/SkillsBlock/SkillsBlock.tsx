import {FC} from "react";
import styles from './SkillsBlock.module.scss';
import {SkillsItem} from "./SkillsItem";
import {skillsData} from "./skills.data";

export const SkillsBlock: FC = () => {
    return <div className={styles.skillsBlock}>
        <div className={styles.container}>
            <h2>Мои скиллы</h2>
            <div className={styles.skills}>
                {skillsData.map(skill => <SkillsItem skill={skill} key={skill.id}/>)}
            </div>
        </div>
    </div>
}