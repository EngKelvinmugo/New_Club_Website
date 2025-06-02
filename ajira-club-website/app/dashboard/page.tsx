"use client";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Dummy Analytics Data
const dashboardStats = {
  totalTrainings: 250,
  activeUsers: 180,
  coursesTaken: 1200,
  projectsCompleted: 340,
};

// Dummy Exclusive Resources
const dummyResources = [
  { title: "Digital Marketing", link: "#" },
  { title: "Cyber Security", link: "#" },
  { title: "Financial Markets", link: "#" },
  { title: "Intro to Web Development", link: "#" },
  { title: "Python for Data Science", link: "#" },
  { title: "Freelancing Tips & Tricks", link: "#" },
  { title: "Graphic Design Basics", link: "#" },
];

// Chart Data - Member Activity Over Time
const memberActivityData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Active Sessions",
      data: [50, 60, 75, 80, 100, 120, 150, 160, 170, 180, 190, 200],
      backgroundColor: "rgba(34, 197, 94, 0.6)",
      borderColor: "rgba(34, 197, 94, 1)",
      borderWidth: 1,
    },
  ],
};

// Chart Data - Skills Distribution
const skillsDistributionData = {
  labels: ["Web Development", "Data Science", "UI/UX", "Cybersecurity", "Mobile Development", "Cloud Computing"],
  datasets: [
    {
      label: "Skills Distribution",
      data: [50, 30, 20, 15, 25, 10],
      backgroundColor: ["#16a34a", "#1d4ed8", "#f59e0b", "#dc2626", "#9333ea", "#0891b2"],
    },
  ],
};

export default function MemberDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 pt-4">
      <div className="px-4 w-full">
        <h1 className="text-3xl font-bold mb-6">
          Member <span className="text-red-600">Dashboard</span>
        </h1>

        {/* Two-column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Dashboard Stats & Member Activity */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(dashboardStats).map(([key, value]) => (
                <div 
                  key={key} 
                  className="bg-white shadow-md p-6 rounded-lg border border-gray-200 text-center max-w-xs mx-auto"
                >
                  <h3 className="text-lg font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
                  <p className="text-2xl font-bold text-green-600">{value}</p>
                </div>
              ))}
            </div>

            {/* Member Activity Over Time */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Member Activity Over Time</h2>
              <Bar data={memberActivityData} />

              {/* Appreciation Section */}
              <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-600 rounded-md animate-fade-in">
                <h3 className="text-lg font-semibold text-green-800">Why Member Activity Matters</h3>
                <p className="text-gray-700 mt-2">
                  Active participation strengthens our community, fosters collaboration, and drives growth.
                  Every session, course, and project you complete brings us closer to a thriving learning environment.
                  <span className="block mt-2 font-medium text-green-900">We appreciate your commitment! 🚀</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Distribution & Exclusive Resources */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Skills Distribution */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Skills Distribution</h2>
              <Pie data={skillsDistributionData} />
            </div>

            {/* Exclusive Resources */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Exclusive Resources</h2>
              <ul className="space-y-2">
                {dummyResources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link} className="text-blue-600 hover:underline">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
