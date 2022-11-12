import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>

            <section id='dashboard-section'>
                <div className='dashboard-wrapper'>
                    <div className='dashboard-sidebar'>
                        <ul className='sidebar-list '>
                            <li className='sidebar-item'>
                                <CustomLink to='allstudent' className="sidebar-link"> সকল ছাত্র/ছাত্রী </CustomLink>
                                <CustomLink to="addmission" className="sidebar-link"> ভর্তির ফরম</CustomLink>
                                <CustomLink to='addresult' className="sidebar-link"> রেজাল্ট যোগ করুন</CustomLink>
                                <CustomLink to='addcourse' className="sidebar-link"> কোর্স যোগ করুন</CustomLink>
                                <CustomLink to='addteacher' className="sidebar-link"> ADD TEACHER</CustomLink>
                            </li>
                        </ul>
                    </div>
                    <div className='dashboard-body'>
                        
                        
                    <Outlet/>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Dashboard;