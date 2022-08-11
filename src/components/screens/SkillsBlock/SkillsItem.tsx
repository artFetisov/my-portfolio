import {FC} from "react";
import {ISkills} from "./skills.data";
import styles from './SkillsBlock.module.scss';

export const SkillsItem: FC<{ skill: ISkills }> = ({skill}) => {
    return <div className={styles.skill}>
        <div className={styles.icon}>
            {skill.id}
        </div>
        <h3 className={styles.title}>{skill.title}</h3>
        <span className={styles.description}>{skill.description}</span>
    </div>
}