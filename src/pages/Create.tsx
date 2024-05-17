import React, { useState/* , useEffect */ } from 'react';
import KeyPressHandler from '../components/KeyPressHandler';
import Short from '../components/Short';
import { useAppDispatch } from '../hook'
import { increment } from '../store/shortSlice';
import keyObjects, { k1, k2, k3, k4, k5, k6 } from '../assets/keybord'
import Post from '../components/Post';
import KeyRow from '../components/KeyRow';
import EnterInput from '../components/useInputActive'
import { keys } from '../assets/inteface';

const Create: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState('C:\\Users\\iykis\\Documents\\WEB-porject');
  const dispatch = useAppDispatch()
  const [keys, setKeys] = useState<keys>({ ...k1, ...k2, ...k3, ...k4, ...k5, ...k6 });


  const val = Object.fromEntries(
    Object.entries(keys).filter(([, value]) => value.bool === false)
  );
  
  const arr1 = Object.values(val)
    .filter(obj => obj.bool === false)
    .map(obj => obj.text);
  const casm = ['Ctrl', 'Alt', 'Shift', 'Meta']
  const hot = casm.filter(item => arr1.includes(item)).concat(arr1.filter(item => !casm.includes(item))).join(" + ");

  const disable = () => {
    setKeys(Object.fromEntries(Object.keys(keys).map(key => [key, { ...keys[key], bool: true }])));
  };

  const add = () => {
    if ((value != "") && (Object.keys(val).length !== 0)) {
      {
        dispatch(increment({ short: val, path: value }))
        disable()
      }
    }
  }
  const KeyRowProps = {
    setKeys,
    keys
  }

  return (
    <>
      <KeyRow keyObjects={keyObjects} {...KeyRowProps} />

      <button onClick={disable}>disable</button>

      <button onClick={add}>Добавить</button>

      {hot && <button>{hot}</button>}

      <div><EnterInput value={value} setValue={setValue} isActive={isActive} setIsActive={setIsActive}
      /></div>

      <div><Short /></div>

      <div><Post disable={disable} /></div>

      <KeyPressHandler {...KeyRowProps} />

    </>
  );
};

export default Create;