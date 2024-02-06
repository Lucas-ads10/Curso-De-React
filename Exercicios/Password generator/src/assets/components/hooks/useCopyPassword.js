import { useState } from 'react';

function useButtonName(initialName) {
  const [buttonName, setButtonName] = useState(initialName);

  const changeButtonName = (newName) => {
    setButtonName(newName);
  };

  return [buttonName, changeButtonName];
}

export default useButtonName;