import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    IconButton, Link,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export const MicroApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton
                        color={'inherit'}
                        sx={{mr: 2}}
                    >
                        <PhotoCamera/>
                    </IconButton>
                    <Typography
                        variant={'h6'}
                    >
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box sx={{
                    pt: 8,
                    pb: 6,
                    bgcolor: 'background.paper',
                }}>
                    <Container maxWidth={'sm'} sx={{pt: 1}}>
                        <Typography
                            variant={'h2'}
                            component={'div'}
                            align={'center'}
                            gutterBottom
                        >
                            Album layout
                        </Typography>
                        <Typography
                            variant={'h5'}
                            align={'center'}
                            paragraph
                        >
                            Something short and leading about the collection
                            below—its
                            contents, the creator, etc. Make it short and sweet,
                            but
                            not
                            too short so folks don't simply skip over it
                            entirely.
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction={{xs: 'column', sm: 'row'}}
                            spacing={2}
                            justifyContent="center">
                            <Button variant={'contained'}>main to call
                                action</Button>
                            <Button variant={'outlined'}>secondary
                                action</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container maxWidth={'md'} sx={{py: 2}}>
                    <Grid container spacing={2} justifyContent={'center'}>
                        {
                            cards.map(card => (
                                <Grid
                                    key={card}
                                    item xs={12}
                                    sm={6} md={4}
                                >
                                    <Card>
                                        <CardMedia
                                            component={'img'}
                                            sx={{
                                                h: '250px', //16/9
                                                objectFit: 'cover'
                                            }}
                                            image="https://source.unsplash.com/random"
                                            alt="random"
                                            title={'Image title'}
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography gutterBottom
                                                        component={'h2'}
                                                        variant={'h5'}>
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can
                                                use this section to describe the
                                                content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
            <Box component={'footer'} sx={{p: 6,}}>
                <Typography variant={'h6'} align={'center'} gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    component={'p'}
                    color={'text.secondary'}
                    align={'center'}
                >
                    Something here to give the footer a purpose!
                </Typography>

                <Copyright /> {/*созданная компонента как функция*/}
            </Box>
        </ThemeProvider>
    )
}