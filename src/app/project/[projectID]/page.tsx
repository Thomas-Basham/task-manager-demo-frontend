"use client";
import React, { useState, useEffect } from "react";
import Tasks from "@/app/components/Tasks";
import Project from "@/app/components/Project";

export default function ProjectPage({
  params,
}: {
  params: { projectID: string };
}) {
  const mockProjects = [
    {
      id: "1",
      projectName: "Redesign Website",
      description:
        "A project to redesign our corporate website with a new UX/UI approach.",
      createdAt: new Date("2024-01-01").toLocaleDateString(),
      createdBy: "1", // Assuming this references a user ID from the mockUsers array.
    },
    {
      id: "2",
      projectName: "Develop New Product Features",
      description:
        "This project is focused on adding new features to our existing products.",
      createdAt: new Date("2024-02-15").toLocaleDateString(),
      createdBy: "2",
    },
  ];
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const exampleProject: Project = mockProjects.filter(
      (project) => project.id === params.projectID
    )[0];

    setProject(exampleProject);

    return () => {
      return;
    };
  }, []);

  return (
    <>
      {project && (
        <div>
          <Project project={project} hideTasksButton={true} />
          <div className="p-5 border w-50 border-cyan-600 w-full flex-col items-center justify-between ">
            <h2 className="text-2xl text-cyan-200">TASKS</h2>
            <hr className="border-cyan-600 mb-4"></hr>
            <Tasks projectId={params.projectID} />
          </div>
        </div>
      )}
    </>
  );
}
