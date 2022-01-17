import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useGetTotalAmount} from "../../../hooks/getTotal";
import {useTracker} from "../../../hooks/hooks-tracker";


export const Balance = React.memo((props) => {
    const {state} = useTracker();
    const {valuesTotal} = useGetTotalAmount({state: state.transactions})

    return (
        <Box>
            <Typography variant={'subtitle1'}
                        sx={{textTransform: 'uppercase', letterSpacing: '1px'}}>
                Your balance
            </Typography>
            <Typography color={valuesTotal.total > 0 ? 'green' : 'red'} variant={'h4'} sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                ${valuesTotal.total}
            </Typography>
        </Box>
    )
})