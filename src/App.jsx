import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TalkToWidget from "./components/TawkToWidget.jsx";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import OrderHistory from "./pages/OrderHistory";
import Settings from "./pages/Settings";
import AllBooks from "./pages/AllBooks";
import ViewBookDetails from "./pages/ViewBookDetails";
import Aboutus from "./pages/Aboutus"; // ✅ About Us Page

// Admin Pages
import AllOrders from "./components/AdminPages/AllOrders";
import AddBook from "./components/AdminPages/AddBook";
import UpdateBooks from "./components/AdminPages/UpdateBooks";

// Project Pages
import ViewProjectDetails from "./pages/ViewBookDetails"; // Double check if this is correct
import AllProjects from "./pages/AllBooks"; // Double check if this is correct

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* General Routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />} /> {/* ✅ Favourite route */}

        {/* Book Routes */}
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/view-book-details/:id" element={<ViewBookDetails />} />

        {/* Project Routes */}
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/view-project-details/:id" element={<ViewProjectDetails />} />

        {/* Profile Routes */}
        <Route path="/profile" element={<Profile />}>
          {role !== "admin" ? (
            <Route index element={<Favourite />} />
          ) : (
            <Route index element={<AllOrders />} />
          )}
          {role === "admin" && <Route path="add-book" element={<AddBook />} />}
          <Route path="OrderHistory" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Routes */}
        {role === "admin" && (
          <Route path="/update-book/:id" element={<UpdateBooks />} />
        )}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

