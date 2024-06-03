import React from 'react';
import Navbar from '../components/navbar';


const appointments = [
  { id: 1, name: 'John Doe', date: '2024-06-03', time: '10:00 AM' },
  { id: 2, name: 'Jane Smith', date: '2024-06-04', time: '11:00 AM' },
  // ... más citas
];

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
