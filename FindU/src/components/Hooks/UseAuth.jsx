import { useContext } from 'react'
import { AuthContext } from '../Context/Auth'

const UseAuth = () => {
 const context = useContext(AuthContext);
 return context;

}

export default UseAuth