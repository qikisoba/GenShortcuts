import { useState } from 'react';

const useInputActive = (): [boolean, () => void, () => void] => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return [isActive, handleFocus, handleBlur];
};

export default useInputActive;