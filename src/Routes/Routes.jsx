import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import AllPhones from "../Pages/Brands/AllPhones";
import Iphone from "../Pages/Brands/Iphone";
import LG from "../Pages/Brands/LG";
import MI from "../Pages/Brands/MI";
import OnePlus from "../Pages/Brands/OnePlus";
import PhoneDetails from "../Pages/Brands/PhoneDetails";
import AddProduct from "../Pages/DashBoard/AddProduct";
import AllBuyers from "../Pages/DashBoard/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSellers";
import AllUsers from "../Pages/DashBoard/AllUsers";
import DashboardBanner from "../Pages/DashBoard/DashboardBanner";
import MyOrders from "../Pages/DashBoard/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts";
import Payment from "../Pages/DashBoard/Payment";
import WishList from "../Pages/DashBoard/WishList";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Shared/ErrorPage";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/allPhones',
                element: <AllPhones />
            },
            {
                path: '/allPhones/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allPhones/${params.id}`),
                element: <PrivateRoutes><PhoneDetails /></PrivateRoutes>
            },
            {
                path: '/iphone',
                element: <Iphone />
            },
            {
                path: '/lg',
                element: <LG />
            },
            {
                path: '/mi',
                element: <MI />
            },
            {
                path: '/onePlus',
                element: <OnePlus />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardBanner />
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoutes><AddProduct /></SellerRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoutes><MyProducts /></SellerRoutes>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoutes><AllBuyers /></AdminRoutes>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoutes><AllSellers /></AdminRoutes>
            },
            {
                path: '/dashboard/payment',
                element: <Payment />
            },
            {
                path: '/dashboard/wishList',
                element: <WishList />
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />
            },
        ]
    }
]);


export default router;