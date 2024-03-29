import React, { FormEvent } from "react";

export default function NewProjectModal({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: Boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}) {
  // Simplified form handling inside NewProjectModal
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 m-4 max-w-xl w-full space-y-4">
        <h2 className="font-semibold text-xl text-cyan-900 dark:text-cyan-200">
          Create New Project
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Project Name
            </label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          {/* Include other fields as necessary */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const newProject: Project = {
      id: String(Date.now()), // Simplified unique ID generation
      // @ts-ignore
      projectName: event?.target?.projectName.value,
      // @ts-ignore
      description: event?.target?.description.value,
      createdAt: new Date().toLocaleDateString(),
      createdBy: "1", // Simplify or adjust according to your user management
    };
    onSave(newProject);
  }
}
