import React from 'react';
import { Link } from "react-router-dom";
import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import endpermianbadgealpha from './images/endpermianbadgealpha.jpeg';

const Header = () => {
    return (
        <Grid templateColumns="1fr 1fr" gap={6} m={12}>
            <GridItem>
                <Box textAlign="left" fontSize="xl">
                    <Link to={'/'}>The Backpacker's Guide to Prehistory</Link>
                </Box>
            </GridItem>
            <GridItem>
                <Box textAlign="right">
                    <Image src={endpermianbadgealpha} alt="Pin badge with the text 'I survived the End-Permian'" boxSize="10rem" sx={{transform: "rotate(10deg)"}}></Image>
                </Box>
                {/* <Box textAlign="right" fontSize="l">
                    Episodes v
                </Box> */}
            </GridItem>
        </Grid>
    )
}

export default Header;