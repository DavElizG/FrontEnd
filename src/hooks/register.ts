import { useState } from 'react';
import { createRegister } from '../services/userServices';

const register= () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchCreateRegister = async (user:any) => {
    setIsLoading(true);
    try {
      const response = await createRegister(user);
      setData(response.data);
    } catch {
      setError(error);
    }
    setIsLoading(false);
  };

  return { fetchCreateRegister, isLoading, error, data };
};

export default register;
