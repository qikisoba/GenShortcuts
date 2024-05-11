import React, { useState, useEffect } from 'react';
import { k1, k2, k3, k4, k5, k6 } from '../assets/keybord'
import useInputActive from '../components/useInputActive';
import Post from '../components/Post';
import KeyRow from '../components/KeyRow';
import { useAppDispatch, useAppSelector } from '../hook'
import { selectShort, increment } from '../store/shortSlice'

const Create: React.FC = () => {


  const dispatch = useAppDispatch()

  const short: { short: { text: string }[], path: string }[] = useAppSelector(selectShort);
  const [isInputActive, handleFocus, handleBlur] = useInputActive();

  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [keys, setKeys] = useState<{ [key: string]: { bool: boolean, text: string, sc: string } }>({ ...k1, ...k2, ...k3, ...k4, ...k5, ...k6 });
  const [kes, setKes] = useState<string[]>([]);
  const handle = (event: string) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [event]: {
        bool: !keys[event].bool,
        text: keys[event].text,
        sc: keys[event].sc
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
          text: keys[event.code].text,
          sc: keys[event.code].sc
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

    if (!isInputActive) window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [keys, isInputActive]);

  return (
    <>
      <KeyRow myObject={k1} keys={keys} handle={handle} />
      <KeyRow myObject={k2} keys={keys} handle={handle} />
      <KeyRow myObject={k3} keys={keys} handle={handle} />
      <KeyRow myObject={k4} keys={keys} handle={handle} />
      <KeyRow myObject={k5} keys={keys} handle={handle} />
      <KeyRow myObject={k6} keys={keys} handle={handle} />
      <button onClick={() => {
        dispatch(increment({ short: val, path: value }))
        console.log(JSON.stringify(short))

      }}>Добавить</button>
      {hot && <button>{hot}</button>}
      <input
        className='textinput'
        type="text"
        value={value}
        placeholder='Вставьте путь'
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          width: `${value.length * 8}px`,
          minWidth: '100px',
          ...(!isInputActive && {
            border: "none",
            color: "orange",
          })
        }}
      />
      <button>qd</button>
      {short.map((el, index) =>
        <div key={index} style={{display:"flex"}}>

          <div>
            {el.path}
          </div>
          <div>{Object.values(el.short).map(item => item.text).join(" + ")}</div>
        </div>

      )}
      <div><Post /></div>
    </>
  );
};

export default Create;