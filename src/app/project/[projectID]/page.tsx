"use client";
import React, { useState, useEffect } from "react";
import Tasks from "@/app/components/Tasks";
import Project from "@/app/components/Project";
import axios from "axios";
export default function ProjectPage({
  params,
}: {
  params: { projectID: string };
}) {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (baseURL) {
      axios
        .get(baseURL + "/projects")
        .then(function (response) {
          // handle success
          console.log(response.data);
          setProjects(response.data);

          const exampleProject: Project = response.data.filter(
            (project: Project) => project.projectid == params.projectID
          )[0];
          setProject(exampleProject);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

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
