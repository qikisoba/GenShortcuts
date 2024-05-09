import React from 'react';
import s from './index.module.scss'
import './key.scss'

interface KeyRowProps {
    myObject: { [key: string]: { bool: boolean, text: string } };
    keys: { [key: string]: { bool: boolean, text: string } };
    handle: (event: string) => void;
}

const KeyRow: React.FC<KeyRowProps> = ({ myObject, keys, handle }) => {
    return (
            <div className="keybordrow" >
                {Object.keys(myObject).map((key) => (
                    <div className={`${s.key} ${key}`}
                        onClick={() => handle(key)}
                        key={key}
                        style={{ backgroundColor: keys[key]?.bool ? 'orange' : 'gray' }}>
                        {keys[key]?.text}
                    </div>
                ))}
            </div>
    );
};

export default KeyRow;