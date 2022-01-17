import {createTheme} from "@mui/material/styles";


export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body1'
                    },
                    style: {
                        fontSize: 14,
                        lineHeight: 0,
                    }
                },
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 12,
                        lineHeight: 0,
                        color: 'darkblue',
                    },
                },
            ]
        },
    }
});
