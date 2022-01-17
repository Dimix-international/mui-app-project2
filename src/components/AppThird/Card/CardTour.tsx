import React from "react";
import {TourType} from "../dataApp";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Box, CardActionArea, Stack} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../../theme/theme";
import {Link} from 'react-router-dom';
import {PathRoutes} from "../Routes/Routes";

export const CardTour: React.FC<TourType> = React.memo((props) => {

    const {price, name, image, rating, duration, numberOfReviews} = props;

    return (
        <Grid item md={3} sm={6} xs={12}>
            <ThemeProvider theme={theme}>
                <Card sx={{maxWidth: '100%'}}>
                    <Link
                        to={`/${PathRoutes.Tour}${name}`}
                        state={{...props}}
                        style={{color:'inherit', textDecoration:'none'}}
                    >
                        <CardActionArea>
                            <CardMedia
                                component={'img'}
                                height={'140'}
                                image={image}
                                alt={'name'}
                            />
                            <CardContent>
                                <Typography gutterBottom variant={'subtitle1'}>
                                    {name}
                                </Typography>
                                <Box marginBottom={4}>
                                    <Stack direction={'row'}
                                           alignItems={'center'}
                                           columnGap={1}>
                                        <AccessTimeIcon fontSize={'small'}/>
                                        <Typography variant={'body2'}
                                                    component={'p'}>
                                            {duration} hours
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction={'row'}
                                           alignItems={'center'}>
                                        <Rating size={'small'} value={rating}
                                                precision={0.5} readOnly/>
                                        <Typography variant={'body2'}
                                                    sx={{
                                                        mr: '15px',
                                                        ml: '5px'
                                                    }}>
                                            {rating}
                                        </Typography>
                                        <Typography variant={'body2'}>
                                            ({numberOfReviews} reviews)
                                        </Typography>
                                    </Stack>
                                    <Typography variant={'h5'} component={'div'}
                                                sx={{
                                                    fontWeight: 'bold',
                                                    mt: '10px'
                                                }}>
                                        From C {price}$
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </ThemeProvider>
        </Grid>
    )
})