import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from '../SubCategory/SubCategory';

const TaskCategory = () => {
    const [tasks, setTasks] = useState([]);
    const [activeTab, setActiveTab] = useState("categoryOne");


    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const result = tasks.filter((task) => task.category == activeTab);
    // console.log(result);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-600'>Category</h2>



            <Tabs className="text-center">

                <TabList>
                    <Tab onClick={() => handleTabClick("categoryOne")}>Category One</Tab>
                    <Tab onClick={() => handleTabClick("categoryTwo")}>Category Two</Tab>
                    <Tab onClick={() => handleTabClick("categoryThree")}>Category Three</Tab>
                
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subTasks => <SubCategory
                                key={subTasks._id}
                                subTasks={subTasks}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subTasks => <SubCategory
                                key={subTasks._id}
                                subTasks={subTasks}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subTasks => <SubCategory
                                key={subTasks._id}
                                subTasks={subTasks}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TaskCategory;