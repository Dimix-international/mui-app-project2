import {useLocation, useNavigate} from "react-router-dom";
import {TourType} from "../dataApp";
import {Box, Button} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ImageTour} from "./Image/ImageTour";
import {CustomizedAccordions} from "./AccordionQuestions/Accordion";

export const PageTour = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const location = useLocation();
    const data = location.state as TourType;

    return(
        <Box paddingY={3}>
            <Container maxWidth={'md'}>
                <Box marginBottom={2}>
                    <Typography variant={'h3'} component={'h1'} marginBottom={2}>
                        {data.name}
                    </Typography>
                </Box>
                <Box marginBottom={2}>
                    <ImageTour
                        image={data.image}
                    />
                </Box>
                <Box marginBottom={2}>
                    <Typography variant={'subtitle1'} sx={{fontWeight:'700'}} component={'h6'} marginBottom={2}>
                        About the ticket
                    </Typography>
                    <Typography variant={'body1'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloribus exercitationem, iure, labore natus nemo nisi, odio officia omnis perferendis provident quisquam quod similique unde vel velit veniam! A excepturi fuga impedit inventore laudantium neque nisi placeat possimus tempore unde!
                    </Typography>
                </Box>
                <Box marginBottom={2}>
                    <Typography variant={'subtitle1'} sx={{fontWeight:'700'}} component={'h6'} marginBottom={2}>
                        Frequently Asked Questions
                    </Typography>
                    <CustomizedAccordions />
                </Box>
                <Button
                    variant={'text'}
                    onClick={goBack}
                    startIcon={<ArrowBackIcon />}
                >
                    Back to main page
                </Button>
            </Container>
        </Box>
    )
}