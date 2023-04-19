import AllCategories from "../../allCategories"
import EditCategories from "../../editCategories";
import '../../../styles/output.css';

function Categories() {
    return (
        <div className="mt-10 flex ...">
            <div className="flex-none w-14 h-14 ..."></div>
            <div className="flex-grow max-w-100 h-14 ...">
                <AllCategories />
                <EditCategories />
            </div>
            <div className="flex-none w-14 h-14 ..."></div>
        </div>
    );
    }

   export default Categories;