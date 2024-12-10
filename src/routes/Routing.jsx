import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayoutBasic from '../pages/DashboardLayoutBasic';
import Preferences from '../pages/Preferences';
import NotifiContent from '../pages/NotifiContent';
import SurveySettings from '../pages/SurveySettings';
import Login from '../pages/Login';
import Layout from '../pages/Layout';





function Routing() {
    return (
        <Router>
            <React.Fragment>
                {/* <DashboardLayoutBasic> */}
                    <Routes>
                        {/* <Route path="/" element={<DashboardLayoutBasic />} /> */}
                        <Route path="/" element={<DashboardLayoutBasic />} >
                            {/* <Route path="layout" element={<DashboardLayoutBasic />} /> */}
                            <Route path="preferences" element={<Preferences />} />
                            <Route path="notifications" element={<NotifiContent />} />
                            <Route path="reviews" element={<SurveySettings />} />
                            <Route path="*" element={<Navigate replace to="/preferences" />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/layout" element={<Layout />} />
                    </Routes>
                {/* </DashboardLayoutBasic> */}

            </React.Fragment>
        </Router>
    );
}

export default Routing;
