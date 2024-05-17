import React, {/*  useState,  */useEffect } from 'react';
import { setKeys } from '../../assets/inteface';

const KeyPressComponent: React.FC<setKeys> = ({ setKeys, keys }) => {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {

            const code = ["ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight",]
            if (event.altKey) {
                event.preventDefault();
            }
            if (keys[event.code].unbool) {
                setKeys((prevKeys) => {
                    const updatedKeys = { ...prevKeys }
                    Object.keys(updatedKeys).forEach((key) => {
                        if (event.code == key) {
                            updatedKeys[key] = {
                                ...prevKeys[key],
                                bool: !keys[key].bool,
                                unbool: false,
                            };
                        } else if (code.includes(event.code)) {
                            updatedKeys[event.code] = {
                                ...prevKeys[event.code],
                                bool: !keys[event.code].bool,
                                unbool: false,
                            }
                        } else if (!code.includes(key)) {
                            updatedKeys[key] = {
                                ...prevKeys[key],
                                bool: true,
                            }
                        }
                    });
                    if (updatedKeys.MetaLeft) updatedKeys.MetaLeft.unbool = true

                    return updatedKeys;
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
    }, [keys, setKeys]);

    return (
        <div>
            Нажмите клавишу "Q" на вашей клавиатуре.
        </div>
    );
};

export default KeyPressComponent;