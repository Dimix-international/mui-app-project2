import {useMemo} from "react";
import {toursData} from "../dataApp";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {TourCard} from "../TourCard/TourCard";

export const Home = () => {

    const data = useMemo(() => (toursData), [toursData]);

    return (
        <>
            <Container maxWidth="xl" sx={{mt:3}}>
                <Grid container>
                    {
                        data.map(tour => (
                            <TourCard key={tour.id} {...tour}/>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}