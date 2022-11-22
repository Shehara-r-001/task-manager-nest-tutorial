import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2251151',
  database: 'task-manager',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
