import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./componant/layout/header/header.js"
import About from "./componant/about/About.js"
import Home from "./componant/home/Home.js"
import AllCourses from "./componant/college/AllCourses.js"
import CollegeDetails from "./componant/college/CollegeDetails.js"
import Courses from "./componant/college/courses.js"
import CourseDetails from "./componant/college/courseDetails.js"
import LoginRegister from "./componant/user/LoginRegister.js"
import Account from "./componant/user/Account.js"
import ChangePassword from "./componant/user/ChangePassword.js"
import StudentDetailsApply from "./componant/application/StudentDetailsApply"
import ApplyAddress from './componant/application/applyAddress';
import ApplyEducationalDetails from './componant/application/ApplyEducationalDetails.js';
import ReviewApplication from './componant/application/ReviewApplication.js';
import RegisterCollege from './componant/collegeAdmin/RegisterCollege.js';
import CollegeProfile from './componant/collegeAdmin/CollegeProfile.js';
import CreateDepertment from './componant/collegeAdmin/CreateDepertment.js';
import AllDepertments from './componant/collegeAdmin/AllDepertments.js';
import DepertmentDetails from './componant/collegeAdmin/DepertmentDetails.js';
import AddCourse from './componant/collegeAdmin/AddCourse.js';
import UpdateCourse from './componant/collegeAdmin/UpdateCourse.js';
import CourseDeashboard from './componant/collegeAdmin/CourseDeashboard.js';
import CourseAdmissionList from './componant/collegeAdmin/CourseAdmissionList.js';
import CollegeCourseList from './componant/collegeAdmin/CollegeCourseList.js';
import ApplyDetails from './componant/collegeAdmin/apply/ApplyDetails.js';
import SelectedApplicationList from './componant/collegeAdmin/apply/SelectedApplicationList.js';

import ResetPassword from "./componant/user/ResetPassword.js"
import MyApplication from "./componant/application/MyApplication.js"
import store from "./store"


import Footer from "./componant/layout/footer/Footer.js"
import WebFont from "webfontloader"
import { loadUser } from './action/userAction';
import ProtectedRoute from './protectedRoute/protectedRoute';
import Sidebar from './componant/collegeAdmin/sidebar';
import { RouteWrapper } from './protectedRoute/routeWrapper'


function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      }

    })

    store.dispatch(loadUser())
  })
  return (


    <BrowserRouter>

      <Header />
      <ScrollToTop />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/colleges' element={<Home />} />
        <Route exact path='/colleges/:keyword' element={<Home />} />
        <Route exact path='/courses' element={<AllCourses />} />
        <Route exact path='/courses/:keyword' element={<AllCourses />} />
        <Route exact path='/college/:id' element={<CollegeDetails />} />
        <Route exact path='college/course/:id' element={<Courses />} />
        <Route exact path='/course/:id' element={<CourseDetails />} />
        <Route exact path='/login' element={<LoginRegister />} />
        <Route exact path='/user/reset/:token' element={<ResetPassword />} />
        <Route exact path='/account' element={<ProtectedRoute component={Account} />} />
        <Route exact path='/password/update' element={<ProtectedRoute component={ChangePassword} />} />
        <Route exact path='/apply/:id' element={<ProtectedRoute component={StudentDetailsApply} />} />
        <Route exact path='/apply/address/:id' element={<ProtectedRoute component={ApplyAddress} />} />
        <Route exact path='/apply/education/:id' element={<ProtectedRoute component={ApplyEducationalDetails} />} />
        <Route exact path='/review/application/:id' element={<ProtectedRoute component={ReviewApplication} />} />
        <Route exact path='/myApplication' element={<ProtectedRoute component={MyApplication} />} />
        <Route exact path='/college/register' element={<ProtectedRoute component={RegisterCollege} />} />

        <Route exact path='/college/depertment/create' element={<ProtectedRoute isAdmin={true} component={CreateDepertment} />} />
        <Route exact path='/depertments' element={<ProtectedRoute isAdmin={true} component={AllDepertments} />} />
        <Route exact path='/depertment/:id' element={<ProtectedRoute isAdmin={true} component={DepertmentDetails} />} />
        <Route exact path='/Register/Course/:id' element={<ProtectedRoute isAdmin={true} component={AddCourse} />} />
        <Route exact path='/course/update/:id' element={<ProtectedRoute isAdmin={true} component={UpdateCourse} />} />
        <Route exact path='/course/deashboard/:id' element={<ProtectedRoute isAdmin={true} component={CourseDeashboard} />} />
        <Route exact path='/course/apply/:id' element={<ProtectedRoute isAdmin={true} component={CourseAdmissionList} />} />
        <Route exact path='/apply/update/:id' element={<ProtectedRoute isAdmin={true} component={ApplyDetails} />} />
        <Route exact path='/application/selected/:id' element={<ProtectedRoute isAdmin={true} component={SelectedApplicationList} />} />
        <Route exact path='/college/course' element={<ProtectedRoute isAdmin={true} component={CollegeCourseList} />} />



        <Route exact path='/college/manager/profile' element={<ProtectedRoute isAdmin={true} component={CollegeProfile} />} />
        <Route exact path='/about' element={<About />} />

      </Routes>
    
      <Footer />

    </BrowserRouter>




  );
}

export default App;
