// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateTaskData = () => {
    const loadedTask = useLoaderData();
    // const { user } = useContext(AuthContext);
    // const emails = user?.email
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        // const sellerName = form.sellerName.value;
        // const instructorEmail = form.instructorEmail.value;
        // const category = form.category.value;
        const date = form.date.value;
        const rating = form.rating.value;
        // const quantity = form.quantity.value;
        const details = form.details.value;
        const picture = form.picture.value;
        const task = { title,  date,  rating, details, picture }
        console.log(task);

        fetch(`https://task-management-system-server-ten.vercel.app/tasksDetails/${loadedTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert('Update Successfully')
                }
            })

    }
    return (
        <div>
            
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Update Task Data</h2>
            <form onSubmit={handleUpdate} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="title" 
                        defaultValue={loadedTask?.title}
                        placeholder="name" className="input input-bordered" />
                    </div>
                    
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" 
                        defaultValue={loadedTask?.date} placeholder="date" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority Level</span>
                        </label>
                        <input type="text" name="rating" 
                        defaultValue={loadedTask?.rating} placeholder="Priority Level" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="details"
                        defaultValue={loadedTask?.details}  placeholder="detail " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture UR</span>
                    </label>
                    <input type="text" name="picture" 
                    defaultValue={loadedTask?.picture} placeholder="picture URL of the Task" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Confirmed Update</button>
                </div>
            </form>
            


        </div>
    );
};

export default UpdateTaskData;