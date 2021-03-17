import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import EpisodeCard from './EpisodeCard';

const api_key = process.env.REACT_APP_AIRTABLE_API_KEY

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function EpisodePage() {
  let params = useParams()
  const [data, setData] = useState({})

  const fetchData = async () => {
    fetch(`https://api.airtable.com/v0/apptQdtHUtoeXaw0s/episodes/${params.id}?api_key=${api_key}`)
			.then(data => data.json())
			.then(data => {
        console.log("Data has been fetched")
				// console.log(data)
        setData(data)
        console.log("Data has been set")
        console.log(data)
			})
			.catch(error => console.log(error))
    }

  useEffect(() => {
    fetchData()
    // console.log(params)
  }, [])

  console.log(data)

  return (
    <Grid templateColumns="3fr 6fr 3fr" gap={3}>
      <GridItem colStart={2} colEnd={3}>
          <Box m={12}>
            {/* <Text>Episode page</Text> */}
            {isEmpty(data) ? <Text>Loading...</Text> : <EpisodeCard data={data}/>}
            {console.log("Text rendered")}
          </Box>
      </GridItem>
    </Grid>

  )
}

export default EpisodePage;