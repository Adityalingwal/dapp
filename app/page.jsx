"use client"
import { useState, React } from 'react';
import CreateUser from "@/components/CreateUser";
import DeleteUserForm from "@/components/DeleteUser";
import UpdateUserForm from "@/components/UpdateUser";
import GetUserForm from "@/components/GetUser";
import UserCountButton from "@/components/GetUsersButton"

export default function Home() {
  const [activeTab, setActiveTab] = useState('create');

  const tabs = [
    { id: 'create', label: 'Create User', component: CreateUser },
    { id: 'delete', label: 'Delete User', component: DeleteUserForm },
    { id: 'update', label: 'Update User', component: UpdateUserForm },
    { id: 'get', label: 'Get User', component: GetUserForm },
    { id: 'count', label: 'User Count', component: UserCountButton },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col overflow-hidden">
      <nav className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold">User Management</h1>
        </div>
      </nav>
      
      <main className="container mx-auto mt-8 p-4 flex-grow">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 text-center font-medium ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            {(() => {
              const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
              return ActiveComponent ? <ActiveComponent /> : null;
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}
