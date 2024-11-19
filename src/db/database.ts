import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import WorkerModel from './models/WorkerModel';
import workerSchema from './schemas/workerSchema';

const adapter = new SQLiteAdapter({
    schema: workerSchema,
});

const database = new Database({
    adapter,
    modelClasses: [WorkerModel], // Register the Worker model
});

export default database;
