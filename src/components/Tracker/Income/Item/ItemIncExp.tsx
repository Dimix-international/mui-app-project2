import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ItemIncExp = {
    name: string
    value: number
    sign: '+' | '-'

}
export const ItemIncExp: React.FC<ItemIncExp> = React.memo((props) => {
    const {name, value, sign} = props;

    return (
        <Box padding={2} sx={{flex: '0 1 50%'}}>
            <Typography textAlign={'center'} variant={'subtitle2'}>
                {name}
            </Typography>
            <Typography textAlign={'center'} variant={'subtitle2'} color={
                name.toLowerCase().includes('income')
                    ? 'green'
                    : 'red'
            }>
                {sign}${value}
            </Typography>
        </Box>
    )
})