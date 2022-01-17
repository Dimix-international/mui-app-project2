import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, ListItem, Stack} from "@mui/material";
import {TransactionType} from "../../../../providers/TrackerProvider";
import {useTracker} from "../../../../hooks/hooks-tracker";

type TransactionPropsType = {
    item: TransactionType
}

export const Transaction: React.FC<TransactionPropsType> = React.memo((props) => {
    const {item} = props;
    const {dispatch} = useTracker();

    const sign = item.amount < 0 ? '-' : '+';

    const onClickHandler = () => {
        dispatch({type: 'delete', payload: item})
    }

    return (
        <ListItem key={item.id} sx={{
            paddingX: '0px',
            paddingY: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRight: `3px solid  ${item.amount < 0 ? 'red'
                : item.amount === 0 ? '#1976d2'
                : 'green'}`
        }}>
            <Box paddingLeft={'5px'} sx={{flex: '1 1 auto'}}>
                <Stack direction={'row'}>
                    <Typography
                        component={'span'}
                        variant={'body1'}
                        sx={{flex: '0 1 50%'}}
                    >
                        {item.text}
                    </Typography>
                    <Typography
                        component={'span'}
                        variant={'body1'}
                        sx={{flex: '0 1 50%'}}
                    >
                        {sign}${Math.abs(item.amount).toFixed(2)}
                    </Typography>
                </Stack>
            </Box>
            <Button sx={{flex: '0 0 70px'}} color="error"
                    variant={'text'}
                    size={'medium'}
                    onClick={onClickHandler}
            >x</Button>
        </ListItem>
    )
})