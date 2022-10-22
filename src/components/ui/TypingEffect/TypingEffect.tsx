import {FC} from "react";
import ReactTypingEffect from "react-typing-effect";
import styles from './TypingEffect.module.scss';

interface ITypingProps {
    text: string | string[]
}

export const TypingEffect: FC<ITypingProps> = ({text}) => {
    return <>
        <ReactTypingEffect
            className={styles.typing}
            speed={30}
            eraseSpeed={30}
            eraseDelay={1500}
            typingDelay={50}
            text={text}
            // @ts-ignore
            cursorRenderer={cursor => <h2>{cursor}</h2>}
            cursorClassName={styles.cursor}
            displayTextRenderer={(text) => {
                return <h3>
                    <span>React</span>
                    <span><b className={styles.typingElem}>{text}</b></span>
                </h3>
            }
            }
        />
    </>
}