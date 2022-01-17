import Box from "@mui/material/Box";
import {Divider, Stack} from "@mui/material";
import React from "react";
import {ItemIncExp} from "./Item/ItemIncExp";
import {useTracker} from "../../../hooks/hooks-tracker";
import {useGetTotalAmount} from "../../../hooks/getTotal";


export const  IncomeExpenses = React.memo(() => {

    const {state} = useTracker();
    const {valuesTotal} = useGetTotalAmount({state: state.transactions})


    return (
        <Box>
            <Stack direction="row" sx={{
                justifyContent:'center',
                alignItems:'center',
                border: '1px solid #eee',
                borderRadius: '10px',
            }}>
                <ItemIncExp  name={'Income'} value={valuesTotal.income} sign={'+'}/>
                <Divider orientation="vertical" variant="middle" flexItem />
                <ItemIncExp name={'Expense'} value={valuesTotal.expense} sign={'-'}/>
            </Stack>
        </Box>
    )
})