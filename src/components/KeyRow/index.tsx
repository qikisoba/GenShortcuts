import React from 'react';
import './key.scss'
import { KeyRowProps } from '../../assets/inteface'



const KeyRow: React.FC<KeyRowProps> = ({ keyObjects, keys, setKeys }) => {


    const code = ["ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight",]

    const handle = (event: string) => {
        setKeys((prevKeys) => {
            const updatedKeys = { ...prevKeys }
            Object.keys(updatedKeys).forEach((key) => {
                if (event == key) {
                    updatedKeys[key] = {
                        ...prevKeys[key],
                        bool: !keys[key].bool,
                        unbool: false,
                    };
                } else if (code.includes(event)) {
                    updatedKeys[event] = {
                        ...prevKeys[event],
                        bool: !keys[event].bool,
                        unbool: false,
                    }
                } else if (!code.includes(key)) {
                    updatedKeys[key] = {
                        ...prevKeys[key],
                        bool: true,
                    }
                }
            });
            return updatedKeys;
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
                            style={{
                                border: !keys[code]?.bool ? "3px solid rgb(128, 131, 235)" : "1px solid rgb(0, 0, 0)"
                            }}>
                            {keys[code]?.text}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default KeyRow;