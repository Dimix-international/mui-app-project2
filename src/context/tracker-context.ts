import {createContext} from "react";
import {TrackerStateType, TransactionType} from "../providers/TrackerProvider";

export enum TrackerActionOperationsType {
    Add = 'add',
    Delete = 'delete',
    Default = 'default'
}

export type TrackerActionsType = {
    type: `${TrackerActionOperationsType}`,
    payload: TransactionType
}

export type TrackerDispatchType = (action: TrackerActionsType) => void;
export type TrackerContextType = { state: TrackerStateType, dispatch: TrackerDispatchType };

export const TrackerContext = createContext<TrackerContextType | undefined>(undefined)