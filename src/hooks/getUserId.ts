import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsersById } from '../services/userServices';
import { User } from '../types/Types';


const getUserId = () => {
  const [User, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const { UserId } = useParams();
  
  const fetchUser = async () => {
    try {
      const data = await getUsersById(UserId)
      setUser(data.data);
      setLoading(false);
    } catch  {
      setError(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchUser();

  }, [UserId]);

  
  return { User, loading, error };
};

export default getUserId;
