import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import { Link } from "react-router-dom";


const TaskDetails = () => {
    useTitle('Details');
    const { subTasksId } = useParams();
    // console.log(subTasksId);
    const [detail, setDetails] = useState(useLoaderData());
    // console.log(details);

    const task = detail.find((task) => task._id == subTasksId)
    // console.log(Task);

    const { picture, title,  date, rating, details, category } = task;

    return (
        <div className="mb-10">
            <h2 className="text-4xl font-bold mt-8 mb-8 text-center text-gray-600">Details</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="ms-3" src={picture} alt="categoryOne" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <p>Date: {date}</p>
                    <p>Priority: {rating}</p>
                    <p>Sub-category: {category}</p>
                    <p>Description: {details}</p>
                    
                    <Link to='/complete'><button className='btn btn-primary'>To Do</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;