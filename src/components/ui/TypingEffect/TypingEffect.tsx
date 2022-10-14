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
            speed={0}
            eraseSpeed={0}
            eraseDelay={4000}
            typingDelay={200}
            text={text}
            cursor={' '}
            displayTextRenderer={(text) => {
                return <h3>
                    <span>React</span>
                    <span><b>{text}</b></span>
                </h3>
            }
            }
        />
        {/*<ReactTypingEffect*/}
        {/*    speed={200}*/}
        {/*    eraseSpeed={200}*/}
        {/*    eraseDelay={1500}*/}
        {/*    typingDelay={1500}*/}
        {/*    text={text}*/}
        {/*    displayTextRenderer={(text) => {*/}
        {/*        return <div style={{border: '1px solid black'}}></div>*/}
        {/*    }*/}
        {/*    }*/}
        {/*/>*/}
    </>
}