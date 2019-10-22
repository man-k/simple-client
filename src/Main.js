import React from 'react';

import { Query } from 'react-apollo'

import { query_main } from './graphql/schema'


class Main extends React.Component
{
  render()
  {
    const element =

      <Query query={ query_main } variables={ { } } fetchPolicy={ 'cache-and-network' }>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return <div>{ data.hello }</div>
        }}
      </Query>

    return element;
  }
}


export default Main;
