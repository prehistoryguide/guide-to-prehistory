import React from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

const EpisodeCard = ({data}) => {
    return (
        <Box>
            <Text>{data.fields.title}</Text>
            <Text>{data.fields.description}</Text>
        </Box>
    )
}

export default EpisodeCard