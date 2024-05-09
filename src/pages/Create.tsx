import React, { useState, useEffect } from 'react';
import { k1, k2, k3, k4, k5, k6 } from '../assets/keybord'
import KeyRow from '../components/KeyRow';

const Create: React.FC = () => {

  const [keys, setKeys] = useState<{ [key: string]: { bool: boolean, text: string } }>({ ...k1, ...k2, ...k3, ...k4, ...k5, ...k6 });
  const [kes, setKes] = useState<string[]>([]);
  const handle = (event: string) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [event]: {
        bool: !keys[event].bool,
        text: keys[event].text
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

  const val = Object.fromEntries(
    kes.map(key => [key, keys[key]])
  );

  const hot = Object.values(val).map(item => item.text).join(" + ")

  useEffect(() => {

    const handleClick = (event: KeyboardEvent) => {

        setKeys((prevKeys) => ({
          ...prevKeys,
          [event.code]: {
            bool: !keys[event.code].bool,
            text: keys[event.code].text
          }
        }));
        setKes(prevKes => {
          if (prevKes.includes(event.code)) {
            return prevKes.filter(item => item !== event.code);
          } else {
            return [...prevKes, event.code];
          }
        });



    };

    window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [keys]);

  return (
    <>
      <KeyRow myObject={k1} keys={keys} handle={handle} />
      <KeyRow myObject={k2} keys={keys} handle={handle} />
      <KeyRow myObject={k3} keys={keys} handle={handle} />
      <KeyRow myObject={k4} keys={keys} handle={handle} />
      <KeyRow myObject={k5} keys={keys} handle={handle} />
      <KeyRow myObject={k6} keys={keys} handle={handle} />
      <button onClick={() => console.log(val)}>Создать</button>
      {hot && <button>{hot}</button>}
      <input className='' type="text" />
    </>
  );
};

export default Create;