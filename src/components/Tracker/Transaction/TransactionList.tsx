import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import {useTracker} from "../../../hooks/hooks-tracker";
import {Transaction} from "./Transaction/Transaction";


export const TransactionList = React.memo((props) => {
    const {state} = useTracker();

    return (
        <Box marginTop={2}>
            <Typography variant={'subtitle2'}
                        sx={{textTransform: 'uppercase'}}>History</Typography>
            <List sx={{
                paddingX: '0px',
                display:'flex',
                flexDirection:'column',
                rowGap:'5px',
            }}>
                {
                    state.transactions.map(item => (
                        <Transaction key={item.id} item={item}/>
                    ))
                }
            </List>
        </Box>
    )
})