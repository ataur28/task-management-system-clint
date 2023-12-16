import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home/Home/Home";
import AllTasks from "../pages/AllTasks/AllTasks";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import TaskDetails from "../pages/Home/TaskDetails/TaskDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddTask from "../pages/AddTask/AddTask";
import MyTasks from "../pages/MyTasks/MyTasks";
import AllMyTasks from "../pages/AllMyTasks/AllMyTasks";
import PrivateRoute from "./PrivateRoute";
import UpdateTaskData from "../pages/UpdateDollData/UpdateDollData";
import TaskComplete from "../pages/Home/TaskComplete/TaskComplete";
import DashBoard from "../pages/Dashboard/DashBoard";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTasks',
                element: <AllTasks></AllTasks>,
            },
            {
                path: '/subTasks/:subTasksId',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({ params }) => fetch('http://localhost:5000/tasks')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
            },
            {
                path: '/myTask',
                element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>,
                // loader: ({ params }) => fetch('http://localhost:5000/tasks')
            },
            {
                path: '/allMyTasks',
                element: <AllMyTasks></AllMyTasks>,
            },
            {
                path: '/updateTaskData/:id',
                element: <UpdateTaskData></UpdateTaskData>,
                loader: ({ params }) => fetch(`http://localhost:5000/tasksDetails/${params.id}`)
            },
            {
                path: '/complete',
                element: <TaskComplete></TaskComplete>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '*',
                element: <ErrorElement></ErrorElement>
            }

        ]
    }

]);

export default router;
