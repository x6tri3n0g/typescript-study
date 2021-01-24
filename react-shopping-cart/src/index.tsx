import { QueryClient, QueryClientProvider } from "react-query";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>, 
    document.getElementById('root')
);
