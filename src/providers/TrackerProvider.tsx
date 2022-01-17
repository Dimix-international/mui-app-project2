import {ReactNode, useMemo, useReducer} from "react";
import {trackerReducer} from "../reducers/reducer-tracker";
import {TrackerContext} from "../context/tracker-context";

export type TransactionType = {
    id: number,
    text: string,
    amount: number
}
export type TrackerStateType = {
    transactions: TransactionType[]
}
export const TrackerProvider = ({children}: { children: ReactNode }) => {
    const [trackerState, trackerDispatch] = useReducer(trackerReducer, {
        transactions: [
            {id: 1, text: 'Flower', amount: -20.23232},
            {id: 2, text: 'Salary', amount: 300},
            {id: 3, text: 'Book', amount: -10},
            {id: 4, text: 'Camera', amount: 150},
        ]
    })

    const value = useMemo(() => ({
        state: trackerState,
        dispatch:trackerDispatch,
    }),[trackerState]);


    return(
        <TrackerContext.Provider value={value}>
            {children}
        </TrackerContext.Provider>
    )
}