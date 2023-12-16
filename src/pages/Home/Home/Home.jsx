import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import TaskCategory from "../TaskCategory/TaskCategory";
import UpComing from "../UpComing/UpComing";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <TaskCategory></TaskCategory>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;