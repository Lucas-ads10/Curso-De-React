import { useState } from 'react';

function useRandomPassword() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12; // comprimento da senha
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+='; // caracteres permitidos na senha
    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  return [password, generatePassword];
}

export default useRandomPassword;


