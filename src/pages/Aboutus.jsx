import React from 'react';
import { ShieldCheck, Users, Rocket, Lightbulb } from 'lucide-react';

const aboutItems = [
  {
    title: 'Our Mission',
    icon: <Rocket className="h-8 w-8 text-yellow-300" />,
    description:
      'To empower students and educators by providing a secure, collaborative space to build, share, and grow innovative projects.',
  },
  {
    title: 'Who We Are',
    icon: <Users className="h-8 w-8 text-yellow-300" />,
    description:
      'A community of passionate developers, learners, and mentors committed to transforming ideas into impact.',
  },
  {
    title: 'What We Offer',
    icon: <ShieldCheck className="h-8 w-8 text-yellow-300" />,
    description:
      'A streamlined platform where you can securely manage your projects, collaborate in real-time, and get inspired by others.',
  },
  {
    title: 'Our Vision',
    icon: <Lightbulb className="h-8 w-8 text-yellow-300" />,
    description:
      'To become the leading hub for student-led innovation, fostering creativity, growth, and real-world problem-solving.',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#0B1220] text-white min-h-screen py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-200 mb-6">About ProjectVault</h1>
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-16 text-lg">
        ProjectVault is more than just a repository — it's a launchpad for ideas, a collaborative workspace, and a
        celebration of student innovation. Here’s what we stand for:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#131C31] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold text-yellow-100 mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-16">
        Whether you’re a student with an idea or a mentor with experience — ProjectVault is where your story begins.
      </p>
    </div>
  );
}
