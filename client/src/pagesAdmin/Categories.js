// display all categories 
// OR logic to show EditCategories page
import EditCategories from "../componentsAdmin/editCategories";
import '../styles/output.css';

function Categories() {
    return (
        <div>
            <h1>Categories</h1>
            <table>
                {/* <tr>
                    <td>{blog.categories[0]}</td>
                </tr>
                <tr>
                    <td>{blog.categories[1]}</td>
                </tr>
                <tr>
                    <td>{blog.categories[2]}</td>
                </tr> */}
            </table>

            {/* When edit button is clicked, add a category and show EditCategory page */}
            <EditCategories />
        </div>

        // 
    );
    }

   export default Categories;