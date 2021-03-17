import React from 'react';
import { Grid, GridItem, Heading, Icon, Stack } from '@chakra-ui/react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <Grid templateColumns="2fr 1fr" templateRows="2fr 1fr" gap={6} m={12}>
            
            <GridItem><Icon as={FaRegCopyright} w={4} h={4}/> The Backpacker's Guide to Prehistory</GridItem>
            <GridItem textAlign={'right'}>Website created by @Abbie2020</GridItem>
        </Grid>
    )
}

export default Footer;