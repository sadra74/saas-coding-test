import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import store from './state/store';
import NewsList from './components/NewsList';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography variant="h4">Hacker News Topstories</Typography>
                <NewsList />
            </Container>
        </Provider>
    );
}

export default App;
