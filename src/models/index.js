// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WanderlustList, Destination } = initSchema(schema);

export {
  WanderlustList,
  Destination
};