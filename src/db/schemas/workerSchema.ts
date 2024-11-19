import { appSchema } from '@nozbe/watermelondb';
import { tableSchema } from '@nozbe/watermelondb/Schema';

const workerSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'workers',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'rating', type: 'number' },
        { name: 'joinDate', type: 'string' }, // Use string for date formatting
      ],
    }),
  ],
});

export default workerSchema;
