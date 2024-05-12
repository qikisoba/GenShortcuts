import React from 'react';
import { isActive } from '../../assets/inteface'

const EnterInput: React.FC<isActive> = ({ isActive, setIsActive, value, setValue }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
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
        ...(!isActive && {
          border: "none",
          color: "orange",
        })
      }}
    />
  )
}


export default EnterInput