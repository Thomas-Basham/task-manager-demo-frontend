import React from "react";
import Task from "@/app/components/Task";
import Project from "@/app/components/Project";
export default function ProjectPage({
  params,
}: {
  params: { projectID: string };
}) {
  return (
    <main className="flex min-h-screen p-24 flex-col items-center ">
      <div>Project Page for id {params.projectID}</div>
      <div className="p-5 border w-50 border-cyan-600 w-full flex-col items-center justify-between ">
        <h2 className="text-2xl text-cyan-200">PROJECT NAME</h2>
        <hr className="border-cyan-600 mb-4"></hr>
        <table className="w-full table-s">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </table>
      </div>
    </main>
  );
}
