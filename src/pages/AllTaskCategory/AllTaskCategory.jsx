import { Link } from "react-router-dom";


const AllTaskCategory = ({ subTasks }) => {
    const { _id,title, category, date, rating} = subTasks;
    
    return (


        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                {title}
            </td>
            <td>
                {category}
                
            </td>
            <td>
                {rating}
                
            </td>
            <td>
                {date}
            </td>
            <th>
            <Link to={`/subTasks/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
            </th>
        </tr>


    );
};

export default AllTaskCategory;