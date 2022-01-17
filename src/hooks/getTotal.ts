import {useTracker} from "./hooks-tracker";
import {useEffect, useState} from "react";
import {TrackerStateType, TransactionType} from "../providers/TrackerProvider";

type GetTotalAmountType = {
    state: TransactionType[]
}
type ValuesType = {
    total: number,
    income: number,
    expense: number
}

export const useGetTotalAmount = (props: GetTotalAmountType) => {
    const {state} = props;

    const [valuesTotal, setValuesTotal] = useState<ValuesType>({
        total: 0,
        expense: 0,
        income: 0,
    });

    useEffect(() => {

        const total = Number(state.reduce((acc, item) =>
                acc += item.amount
            , 0).toFixed(2));

        const income = Number(state.filter(item => item.amount > 0)
            .reduce((acc, item) => acc += item.amount, 0).toFixed(2));

        const expense = Number(state.filter(item => item.amount < 0)
            .reduce((acc, item) =>
                acc += Math.abs(item.amount)
            , 0).toFixed(2));

        setValuesTotal( {
            total,
            income,
            expense
        })

    }, [state]);

    return {
        valuesTotal,
        setValuesTotal
    }
}