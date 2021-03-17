import React, { Component } from 'react';
import { Box, Text, Grid, GridItem, Heading, Stack, Icon } from '@chakra-ui/react';
import EpAccordion from './EpAccordion';
import { FaPodcast, FaSpotify } from "react-icons/fa";

  const Home = ({eps}) => {
        return (
        <Grid templateColumns="3fr 6fr 3fr" gap={3}>
            <GridItem colStart={2} colEnd={3}>
                <Box m={12}>
                    <EpAccordion eps={eps}></EpAccordion>
                </Box>
            </GridItem>
            <GridItem colSpan={3}>
                <Box m={4} textAlign="center" fontSize="l" bg="blue.100">
                    <Stack>
                    <Heading as="h2" size="lg">Never miss an episode!</Heading>
                    <Text><Icon as={FaPodcast} w={6} h={6}/>  Subscribe to The Backpacker's Guide to Prehistory with Apple Podcasts</Text>
                    <Text><Icon as={FaSpotify} w={6} h={6}/>  Follow The Backpacker's Guide to Prehistory on Spotify</Text>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem colStart={2} colEnd={3}>
                <Box m={12} textAlign="center" fontSize="l">
                    David Mountain is scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                </Box>
            </GridItem>
        </Grid>
        )
    }
  

  export default Home;