import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider, Box, Text, Grid, theme, GridItem, Heading } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import canvasoffwhite from './images/canvasoffwhite.jpg';
import EpisodePage from './EpisodePage';

const api_key = process.env.REACT_APP_AIRTABLE_API_KEY

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  eps: []
                  };
    // console.log(this.state)
  }

  componentDidMount() {
		fetch(`https://api.airtable.com/v0/apptQdtHUtoeXaw0s/Episodes?api_key=${api_key}`)
			.then(res => res.json())
			.then(res => {
				// console.log(res.records)
				this.setState({ eps: res.records })
        // console.log(this.state)
			})
			.catch(error => console.log(error))
      
    };

  render() {

    return (
      <ChakraProvider theme={theme}>
      <Box sx={{backgroundImage:{canvasoffwhite}, backgroundRepeat:"repeat"}}>
      {/* <Box background="blue"> */}
        <Grid templateColumns="repeat(12, 1fr)" gap={3}>
          <GridItem colSpan={12}>
            <Header></Header>
          </GridItem>
        
          <GridItem colSpan={12} bg="blue.100">
            <Box m={4} textAlign="center" fontSize="l">
              <Heading as="h3" size="md">Top travel tips for time travellers</Heading>
            </Box>
          </GridItem>
        
          <GridItem colSpan={12}>
            <Switch>
              <Route path="/" render={(props) => (
                  <Home {...props} eps={this.state.eps} />
                  )} exact />
              <Route path="/episode/:id" component={EpisodePage} />
              {/* <Route component={Error} /> */}
              {/* <Home eps={this.state.eps}></Home> */}
              
            </Switch>
          </GridItem>

          <GridItem colSpan={12}>
            <Heading as="h2" size="lg" textAlign="center">Where can I subscribe?</Heading>
            <Footer></Footer>
          </GridItem>
        </Grid>
      </Box>
      </ChakraProvider>
      
    );
  }
  
  
  
}

export default App;
