import React, {/*  useState,  */useEffect } from 'react';
import { setKeys } from '../../assets/inteface';

const KeyPressComponent: React.FC<setKeys> = ({ setKeys, keys, setKes}) => {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.altKey) {
                event.preventDefault();
            }
            if (keys[event.code].unbool) {
                setKeys((prevKeys) => ({
                    ...prevKeys,
                    [event.code]: {
                        ...prevKeys[event.code],
                        bool: !keys[event.code].bool,
                        unbool: false,
                    }
                }));
                setKes(prevKes => {
                    if (prevKes.includes(event.code)) {
                        return prevKes.filter(item => item !== event.code);
                    } else {
                        return [...prevKes, event.code];
                    }
                });
            }

        };

        const handleKeyUp = (event: KeyboardEvent) => {

            setKeys((prevKeys) => ({
                ...prevKeys,
                [event.code]: {
                    ...prevKeys[event.code],
                    unbool: true,
                }
            }));
        };

        // Подписываемся на события нажатия и отпускания клавиши
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Очистка подписок
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [keys, setKeys, setKes]);

    return (
        <div>
            Нажмите клавишу "Q" на вашей клавиатуре.
        </div>
    );
};

export default KeyPressComponent;