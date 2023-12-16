import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hook/useTitle";


const AddTask = () => {
    useTitle('Add A Task');

    const { user } = useContext(AuthContext);
    const emails = user?.email

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const instructorEmail = form.instructorEmail.value;
        const category = form.category.value;
        const date = form.date.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const picture = form.picture.value;
        const task = {title,  instructorEmail, category, date, rating, details, picture}
        console.log(task);

        fetch('https://task-management-system-server-ten.vercel.app/tasks',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Add A Task Successfully')
            }
        })

    }


    return (

        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Add A Task</h2>
            <form onSubmit={handleAddTask} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="name" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" name="instructorEmail"
                        defaultValue={emails} placeholder="instructor Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        {/* <input type="text" name="category" placeholder="sub-category" className="input input-bordered" /> */}

                        <select className="input input-bordered" name="category" id="cars">
                            <option value="categoryOne">Category One</option>
                            <option value="categoryTwo">Category Two</option>
                            <option value="categoryThree">Category Three</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <input type="text" name="rating" placeholder="priority" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="details" placeholder="detail " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture UR</span>
                    </label>
                    <input type="text" name="picture" placeholder="picture URL of the task" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Add A Task</button>
                </div>
            </form>


        </div>

    );
};

export default AddTask;