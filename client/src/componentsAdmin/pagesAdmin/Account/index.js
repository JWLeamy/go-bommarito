import '../../../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../../../utils/queries';
import AuthService from '../../../utils/auth';

function Account () {

 const myprofile = AuthService.getProfile()
 console.log("profile", myprofile.data.username)

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { username: myprofile.data.username},
  });

  const profile = data?.profile || {};
  console.log("userinfo", data)
    return (
        <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl m-8'>
        <div key={profile._id} className="flex-grow m-5 p-2">
          <h1 className='justify-center font-bold text-2xl block my-5'>My Account</h1>
          <p className='block border-b text-lg'>First Name: <span>{profile.firstName} </span></p>
          <p className='block border-b text-lg'>Last Name: <span>{profile.lastName}</span></p>
          <p className='block border-b text-lg'>Username: <span>{profile.username}</span></p>
          <p className='block border-b text-lg'>Email: <span>{profile.email}</span></p>
          <div className="justify-center inline">
            <btn className='block bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite max-w-50'><span><FaEdit /> </span>Edit Account</btn>
            <btn className='block bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite max-w-50'><span><FaTrash /> </span>Delete Account</btn>
          </div>
      </div>
    </div>
    )
}

export default Account;