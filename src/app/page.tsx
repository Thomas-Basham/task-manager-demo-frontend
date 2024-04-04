"use client";
import Image from "next/image";
import axios from "axios";
import Project from "./components/Project";
import CreateProjectBtn from "./components/CreateProjectBtn";
import NewProjectModal from "./components/NewProjectModal";
import React, { useState, useEffect } from "react";
export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<Object[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockUsers = [
    {
      id: "1",
      username: "jdoe",
      email: "jdoe@example.com",
      fullName: "John Doe",
      createdAt: new Date("2023-12-01").toLocaleDateString(),
    },
    {
      id: "2",
      username: "swhite",
      email: "swhite@example.com",
      fullName: "Sarah White",
      createdAt: new Date("2023-12-10").toLocaleDateString(),
    },
  ];
  useEffect(() => {
    if (baseURL) {
      axios
        .get(baseURL + "/projects")
        .then(function (response) {
          // handle success
          console.log(response.data);
          setProjects(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    setUsers(mockUsers);
    return () => {
      return;
    };
  }, []);

  const addProject = (newProject: Project) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsModalOpen(false); // Close modal after adding the project
  };

  return (
    <>
      <div className="p-5  w-50  w-full ">
        <CreateProjectBtn onClick={() => setIsModalOpen(true)} />
        <NewProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={addProject}
        />
      </div>
      <div className="p-5 border w-50 border-cyan-600 w-full flex-col items-center justify-between ">
        <h2 className="text-2xl text-cyan-200">PROJECTS</h2>
        <hr className="border-cyan-600 mb-4"></hr>
        {projects.map((project) => {
          return (
            <div key={project.projectid}>
              <Project hideTasksButton={false} project={project} />
            </div>
          );
        })}
      </div>
    </>
  );
}
