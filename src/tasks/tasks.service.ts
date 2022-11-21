import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { FilterTaskDTO } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
  tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    const task: Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getTaskByID(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskByID(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskByID(id);
    task.status = status;
    return task;
  }

  filterTasks(filterTaskDTO: FilterTaskDTO): Task[] {
    const { status, search } = filterTaskDTO;

    if (status) return this.tasks.filter((task) => task.status === status);

    if (search) {
      return this.tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return this.getAllTasks();
  }
}
