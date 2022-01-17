import {
    TrackerActionOperationsType,
    TrackerActionsType
} from "../context/tracker-context";
import {TrackerStateType} from "../providers/TrackerProvider";


export type TrackerReducerReturnType = {
    [key in `${TrackerActionOperationsType}`]: () => TrackerStateType
}

export const trackerReducer = (state: TrackerStateType, action: TrackerActionsType): TrackerStateType => {

    const deleteTransaction = (): TrackerStateType => {
        return {
            ...state,
            transactions: state.transactions.filter(item => item.id !== action.payload.id)
        };
    }
    const addTransaction = (): TrackerStateType => {
        return {...state, transactions: [...state.transactions, action.payload]}
    }

    const trackerActions = {
        'add': addTransaction,
        'delete': deleteTransaction,
        'default': () => state
    } as TrackerReducerReturnType

    return (trackerActions[action.type] || trackerActions['default'])();
}