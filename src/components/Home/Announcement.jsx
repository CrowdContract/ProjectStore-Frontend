import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const announcements = [
  {
    id: 1,
    title: "🚀 Hackathon 2025 - Build the Future!",
    date: "March 10, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "IIIT Una Auditorium",
    type: "Hackathon",
    description: "Join the biggest coding competition of the year. Compete with the best minds and win amazing prizes!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "🎤 Tech Meetup: AI & ML Innovations",
    date: "March 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Online (Zoom)",
    type: "Meetup",
    description: "A discussion on the latest trends in AI & ML. Meet industry experts and network with tech enthusiasts.",
    image: "https://via.placeholder.com/100",
  },
];

const AnnouncementCard = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(event.date).getTime();
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h left`);
      } else {
        setTimeLeft("Ongoing / Ended");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return (
    <motion.div
      className="bg-gray-800 p-5 rounded-2xl shadow-md w-full sm:w-[350px] hover:scale-105 transition border border-gray-700"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-4">
        <img src={event.image} alt="Event" className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-bold text-yellow-400">{event.title}</h3>
          <p className="text-gray-400 text-sm">{event.date} | {event.time}</p>
          <p className="text-blue-400 text-xs">{event.location}</p>
          <span className="text-xs bg-blue-600 px-2 py-1 rounded-lg text-white">{event.type}</span>
        </div>
      </div>
      <p className="mt-2 text-gray-300 text-sm">{event.description}</p>
      <p className="mt-2 text-sm text-red-500">{timeLeft}</p>
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg mt-3">
        Learn More
      </button>
    </motion.div>
  );
};

const Announcements = () => {
  return (
    <section className="py-10 px-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold text-blue-400 mb-5 flex items-center gap-2">
        <span>📢</span> Latest Announcements
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {announcements.map((event) => (
          <AnnouncementCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Announcements;


