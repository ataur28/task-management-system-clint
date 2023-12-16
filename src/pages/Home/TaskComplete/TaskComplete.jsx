import useTitle from "../../../hook/useTitle";



const TaskComplete = () => {
    useTitle('Complete');

    const handleToComplete =() =>{
        alert("Task Complete Successfully");
    }

    return (
        <div>
            <h2 className="uppercase text-3xl mt-8 mb-8 text-center font-semibold ">To Do Task</h2>
            <form >
                <div className="mb-8">
                    
                    <div className=" h-36">
                        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quaerat accusamus sunt maxime facere delectus distinctio qui aut omnis, expedita consectetur cumque nemo nostrum tempora! Quibusdam quidem ad eius nulla odio asperiores repudiandae. Optio perferendis nulla quis laborum facere magni dignissimos autem odit, hic inventore soluta aperiam sit natus, asperiores atque facilis similique veniam suscipit eos officiis, sint tempore assumenda! Quas sit nemo commodi reiciendis excepturi, temporibus odit accusamus dolorum, ex nihil magni! Eveniet, cumque nostrum laborum quibusdam sit aliquid adipisci minima placeat culpa excepturi dolorem. Ab eum velit vero voluptates amet inventore fugit enim tempora nobis quam! Eaque laborum deleniti debitis quas nulla quisquam vel non qui praesentium? Tenetur delectus quae, quam repudiandae nemo excepturi dolorem sequi odio, rem aspernatur saepe veniam eligendi sed asperiores neque nobis minus? Impedit nulla qui, debitis eum distinctio exercitationem dolores laborum suscipit consequuntur saepe hic odio culpa animi sit? At architecto aspernatur possimus?</h1>
                    </div>
                    
                </div>
                
                <div className="form-control mt-6">
                    <button onClick={handleToComplete} className="btn btn-primary mt-6 mb-6" type="submit">complete</button>
                </div>
            </form>
        </div>
    );
};

export default TaskComplete;