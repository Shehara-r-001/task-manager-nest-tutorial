import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { FilterTaskDTO } from './dto/filter-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  // getAllTasks() {
  //   return this.tasks;
  // }
  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const { title, description } = createTaskDTO;

    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();

    return task;
  }

  async getTaskByID(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) throw new NotFoundException();

    return task;
  }

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
