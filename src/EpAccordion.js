import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { Link as ALink } from '@chakra-ui/react';

const EpAccordion = ({eps}) => {
    // console.log({eps})
    return (
        <Accordion allowToggle>
            <>
            {eps.sort((a, b) => a.fields.episode_id > b.fields.episode_id ? 1 : -1)
                .map((ep, i) => {
                return (
                    <AccordionItem key={i}>
                        <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                {eps[i].fields.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text>{eps[i].fields.description}</Text>
                            <Text><Link to={`/episode/${eps[i].id}`}>Read all about {eps[i].fields.title}</Link></Text>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    );
                })
            }
            </>
        </Accordion>
    )
}

export default EpAccordion;