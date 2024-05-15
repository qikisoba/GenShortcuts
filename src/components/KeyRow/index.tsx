import React from 'react';
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
                <div className={`keybordrow n${key}`} key={key} >
                    {Object.keys(myObject).map((code, i) => (
                        <div className={`n${key}${i} code`}
                            onClick={() => handle(code)}
                            key={code}
                            style={{ backgroundColor: !keys[code]?.bool ? 'orange' : 'gray' }}>
                            {keys[code]?.text}
                        </div>
                    ))}
                </div>
            ))}

        </>
    );
};

export default KeyRow;