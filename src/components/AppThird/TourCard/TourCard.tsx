import {TourType} from "../dataApp";
import Grid from '@mui/material/Grid';
import React from "react";
import {CardTour} from "../Card/CardTour";
import Typography from '@mui/material/Typography';

type TourCard = {
    id: number,
    name: string,
    tours: TourType []
}

export const TourCard: React.FC<TourCard> = React.memo((props) => {

    const {id, name, tours} = props;

    return (
        <Grid item xs={12} sx={{paddingTop: '10px'}}>
            <Typography variant={'h3'} gutterBottom>Top {name} Tours</Typography>
            <Grid container spacing={2}>
                {
                    tours.map(tour => (
                        <CardTour key={tour.id} {...tour}/>
                    ))
                }
            </Grid>
        </Grid>
    )
})