import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WanderlustListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DestinationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WanderlustList {
  readonly id: string;
  readonly Season?: string | null;
  readonly Destinations?: (Destination | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WanderlustList, WanderlustListMetaData>);
  static copyOf(source: WanderlustList, mutator: (draft: MutableModel<WanderlustList, WanderlustListMetaData>) => MutableModel<WanderlustList, WanderlustListMetaData> | void): WanderlustList;
}

export declare class Destination {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly wanderlustlistID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Destination, DestinationMetaData>);
  static copyOf(source: Destination, mutator: (draft: MutableModel<Destination, DestinationMetaData>) => MutableModel<Destination, DestinationMetaData> | void): Destination;
}