import AboutPage from '../pages/About/AboutPage';
import HomePage from '../pages/Home/HomePage';
import StudentPage from '../pages/Student/StudentPage';

// src/router/index.js
export const router = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/students',
    Component: StudentPage,
  },
];
