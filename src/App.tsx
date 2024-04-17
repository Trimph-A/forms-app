import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPageBoard from './_codux/boards/login-page.board'; 
import LandingPageBoard from './_codux/boards/landing-page.board'; 
import DashboardLayout from './_codux/boards/dashboard-layout/dashboard-layout.board'; 
import CollectionDashboardLayout from "./_codux/boards/collection-dashboard-1.board";
import FinancialDashboardLayout from "./_codux/boards/financial-dashboard-layout/financial-dashboard-layout.board"
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPageBoard.Board />} /> {/* Route to LoginPage */}
                <Route path="/landing" element={<LandingPageBoard.Board />} /> {/* Route to LandingPage */}
                <Route path="/dashboard-layout" element={<DashboardLayout.Board />} /> {/* Route to DashboardLayout */}
                <Route path="/collection-layout" element={<CollectionDashboardLayout.Board />} /> 
                <Route path="/financial-layout" element={<FinancialDashboardLayout.Board />} /> 
            </Routes>
        </Router>
    );
}

export default App;
