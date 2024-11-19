// models/Item.js
export const WorkerSchema = {
    name: 'Workers',
    properties: {
        id: 'int',
        name: 'string',
        industry: 'string',
        skills: 'set<string>',
        ratings: 'int',
        availability: 'string',
        joined: 'date',
    },
};
