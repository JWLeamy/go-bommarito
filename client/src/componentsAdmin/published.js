// published
import '../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from '../utils/queries';

function Published () {
  const getBlogs = useQuery(QUERY_BLOGS);
  console.log("getBlogs query",getBlogs.data);
  // const { data } = useQuery(QUERY_BLOGS);
  // // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  // const blogs = data?.blogs || [];
  // console.log("blogs",blogs)

    return (
        <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl my-5'>
        <div className="flex-grow">
          <div>
          <h1 className='text-xl block m-5'>Published Blog Posts</h1>
          <table className="min-w-full">
          <thead class="bg-lightGrey border-b">
            <tr>
              <th scope="col" class="text-l font-medium text-mainBlack px-6 py-4 text-left">
                Blog Title
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-6 py-4 text-left">
                Author
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-6 py-4 text-left">
                Blog Text
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-6 py-4 text-left">
                Created At
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-3 py-4 text-left">
                Edit
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-3 py-4 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-mainWhite border-y-4 border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                This is where blog title goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where author goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where blog text preview goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where date goes
              </td>
              <td className="align-center">
              <FaEdit />
              </td>
              <td className="align-center">
              <FaTrash />
              </td>
            </tr>
            <tr class="bg-mainWhite border-y-4 border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                This is where blog title goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where author goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where blog text preview goes
              </td>
              <td class="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
                This is where date goes
              </td>
              <td className="justify-center">
              <FaEdit />
              </td>
              <td className="justify-center">
              <FaTrash />
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default Published;