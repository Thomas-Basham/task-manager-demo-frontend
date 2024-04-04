// interfaces/Task.ts
interface Task {
  id: string;
  title: string;
  description: string;
  status: string; // Consider using an enum if you have a fixed set of statuses.
  priority: string; // Same as status, consider an enum for fixed priority levels.
  projectid: string;
  assignedto: string;
  createdat: string;
  duedate: string;
  // Add other task fields as necessary.
}

interface TaskRowProps {
  task: Task;
  onUpdate: (task: Task) => void;
}

interface TasksProps {
  projectId: string;
}
