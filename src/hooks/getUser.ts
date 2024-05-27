import { useEffect, useState } from 'react'
import { getUserService } from '../services/userServices';


const getUser = () => {

    const [User, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);
  


    const fetchUser = async() => {

        try{
            const data = await getUserService()
            setUser(data.data);
            setLoading(false);
        }catch{
            setError(Error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchUser();
        }, [])

    return {User,loading,Error}
    }

    export default getUser

 