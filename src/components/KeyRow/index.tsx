import React from 'react';
import s from './index.module.scss'
import './key.scss'
import { KeyRowProps } from '../../assets/inteface'



const KeyRow: React.FC<KeyRowProps> = ({ keyObjects, keys, setKes, setKeys }) => {

    const handle = (event: string) => {
        setKeys((prevKeys) => ({
            ...prevKeys,
            [event]: {
                ...prevKeys[event],
                bool: !keys[event].bool,
            }
        }));
        setKes(prevKes => {
            if (prevKes.includes(event)) {
                return prevKes.filter(item => item !== event);
            } else {
                return [...prevKes, event];
            }
        });
    }
    return (
        <>
            {keyObjects.map((myObject, key) => (
                <div className='keybordrow' key={key} >
                    {Object.keys(myObject).map((i) => (
                        <div className={`${s.key} ${i}`}
                            onClick={() => handle(i)}
                            key={i}
                            style={{ backgroundColor: !keys[i]?.bool ? 'orange' : 'gray' }}>
                            {keys[i]?.text}
                        </div>
                    ))}
                </div>
            ))}

        </>
    );
};

export default KeyRow;