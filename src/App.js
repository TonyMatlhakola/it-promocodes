import React from 'react';
import { Route } from 'react-router';
import Layout  from './components/Layout';
import FetchData  from './components/FetchData';
import './custom.css'

const App = () => {

    return (
      <Layout>
       <Route path='/' component={FetchData} />
      </Layout>
    );

}
export default App
