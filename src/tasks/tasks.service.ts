import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { FilterTaskDTO } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
  // getAllTasks() {
  //   return this.tasks;
  // }
  // createTask(createTaskDTO: CreateTaskDTO): Task {
  //   const { title, description } = createTaskDTO;
  //   const task: Task = {
  //     id: uuidv1(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getTaskByID(id: string): Task {
  //   const task = this.tasks.find((task) => task.id === id);
  //   if (!task) throw new NotFoundException();
  //   return task;
  // }
  // deleteTaskByID(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskByID(id);
  //   task.status = status;
  //   return task;
  // }
  // filterTasks(filterTaskDTO: FilterTaskDTO): Task[] {
  //   const { status, search } = filterTaskDTO;
  //   if (status) return this.tasks.filter((task) => task.status === status);
  //   if (search) {
  //     return this.tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return this.getAllTasks();
  // }
}
