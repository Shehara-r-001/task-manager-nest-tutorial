import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} is not a valid status..!`);
    }

    return value;
  }

  isValidStatus = (status: any) => {
    const idx = this.allowedStatus.indexOf(status);

    return idx !== -1;
  };
}
