import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { CreateTaskDTO } from './dto/create-task.dto';
import { FilterTaskDTO } from './dto/filter-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterTaskDTO: FilterTaskDTO): Task[] {
    if (Object.keys(filterTaskDTO).length) {
      return this.tasksService.filterTasks(filterTaskDTO);
    } else return this.tasksService.getAllTasks();
  }

  @Post()
  createATask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Task {
    return this.tasksService.getTaskByID(id);
  }

  @Delete('/:id')
  deleteTaskByID(@Param('id') id: string): void {
    this.tasksService.deleteTaskByID(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
