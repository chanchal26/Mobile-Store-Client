// import { createBrowserRouter } from "react-router-dom";
// import DashBoard from "../Layout/DashBoard";
// import Main from "../Layout/Main";
// import AboutUs from "../Pages/AboutUs";
// import Blog from "../Pages/Blog";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Login/Register";
// import ErrorPage from "../Shared/ErrorPage";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Main />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/blog',
//                 element: <Blog />
//             },
//             {
//                 path: '/aboutUs',
//                 element: <AboutUs />
//             },
//             {
//                 path: '/login',
//                 element: <Login />
//             },
//             {
//                 path: '/register',
//                 element: <Register />
//             },
//         ]
//     },
//     {
//         path: '/dashboard',
//         element: <DashBoard />,
//         children: [
//             {
//                 path: '/dashboard/addProduct'
//             }
//         ]
//     }
// ]);


// export default router;