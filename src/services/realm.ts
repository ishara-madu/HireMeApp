// services/realm.js
import Realm from 'realm';
import { WorkerSchema } from '../models/WorkerSchema';

const realm = new Realm({ schema: [WorkerSchema] });

export const createItem = (itemData: any) => {
    realm.write(() => {
        realm.create('Worker', itemData);
        console.log('Item created');
    });
};

export const getItems = () => {
    return realm.objects('Worker');
};

export default realm;
