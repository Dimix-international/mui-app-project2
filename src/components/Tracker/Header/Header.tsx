import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";


export const Header = React.memo(() => {

    return (
        <Box marginBottom={2}>
            <Typography variant={'h4'}>
                Expense tracker
            </Typography>
        </Box>
    )
})