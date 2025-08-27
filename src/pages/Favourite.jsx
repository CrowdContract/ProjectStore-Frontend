import React, { useState, useEffect } from "react";
import BookCard from "../components/Books/BookCard";
import Loader from "./Loader";

const Favourite = () => {
  const [FavBooks, setFavBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading and static data
    const timeout = setTimeout(() => {
      setFavBooks([
        {
          projectId: {
            _id: "67be117c5228c1be3825bce0",
            url: "https://cdn.prod.website-files.com/64d03d94c73469cb85a2d02f/64d03d94c73469cb85a2d3ca_shutterstock_1279483576.png",
            title: "AI Resume Analyzer",
            author: "Artificial Intelligence",
            price: "Free"
          }
        },
        {
          projectId: {
            _id: "67beadd35228c1be3825bcdf",
            url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhI…", // You may want to shorten/replace this
            title: "Smart Attendance System",
            author: "Machine Learning",
            price: "₹199"
          }
        },
        {
          projectId: {
            _id: "67beadd35228c1be3825bcfa",
            url: "https://img.freepik.com/free-vector/smart-healthcare-technology-template.jpg",
            title: "Smart Healthcare System",
            author: "Artificial Intelligence",
            price: "₹299"
          }
        },
        {
          projectId: {
            _id: "67beadd35228c1be3825bd00",
            url: "https://img.freepik.com/free-vector/robotic-artificial-intelligence-template.jpg",
            title: "AI-Powered Online Quiz Portal",
            author: "Web Development",
            price: "Free"
          }
        }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4 text-zinc-100">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Favourite Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FavBooks.map((item, i) => (
          <BookCard
            key={i}
            bookid={item.projectId._id}
            image={item.projectId.url}
            title={item.projectId.title}
            author={item.projectId.author}
            price={item.projectId.price}
            fav={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
