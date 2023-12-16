import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllMyTasks from "../AllMyTasks/AllMyTasks";
import useTitle from "../../hook/useTitle";


const MyTasks = () => {
    useTitle('My Task');
    const { user } = useContext(AuthContext);
    const emails = user?.email
    // console.log(emails)

    const [tasks, setTasks] = useState([]);

    // const {instructorEmail} = tasks;

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])


    //  console.log(tasks)

    const result = tasks.filter((task) => task.instructorEmail == emails);
    // console.log(result)

    const handleDelete = id => {
        // console.log(id);
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/tasks/${id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        alert('Deleted Successful')
                        const remaining = tasks.filter(task => task._id !== id)
                        setTasks(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">My Task</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture and Title</th>
                            <th>Sub-category</th>
                            <th>Date</th>
                            <th>Detail Description</th>
                            <th>Delete Button</th>
                            <th>Update Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map(myTasks => <AllMyTasks
                                key={myTasks._id}
                                myTasks={myTasks}
                                handleDelete={handleDelete}
                            ></AllMyTasks>)
                        }

                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyTasks;