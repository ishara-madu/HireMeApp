import { Model } from '@nozbe/watermelondb';
import { field, date } from '@nozbe/watermelondb/decorators';

class WorkerModel extends Model {
  static table = 'workers'; // Define the table name for the workers

  @field('name') name?: string; // `!` tells TypeScript it's definitely initialized later
  @field('role') role!: string;
  @field('location') location!: string;
  @field('rating') rating!: number;
  @date('joinDate') joinDate!: Date;
}

export default WorkerModel;
