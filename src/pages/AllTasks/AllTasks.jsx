import { useEffect, useState } from "react";
import AllTaskCategory from "../AllTaskCategory/AllTaskCategory";
import useTitle from "../../hook/useTitle";

const AllTasks = () => {
    useTitle('All Task');
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/tasks?email=${user?.email}',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('task-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mb-10 mt-10">
            <form>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-secondary">Search</button>
                </div>
            </form>

            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Sub-category</th>
                            <th>Priority</th>
                            <th>Date</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map((subTasks) => (
                            <AllTaskCategory key={subTasks._id} subTasks={subTasks} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTasks;







