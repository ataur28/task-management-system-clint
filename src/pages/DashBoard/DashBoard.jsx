
import useTitle from "../../hook/useTitle";

const DashBoard = () => {
    useTitle('My Task');
    

    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Selected Task</h2>
            <div className="overflow-x-auto w-full">
            <h2 className="text-2xl font-bold text-gray-600">Total Selected Task: </h2>
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
                       

                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DashBoard;