import * as React from "react";
import { Admin, Resource } from 'react-admin';
//import simpleRestProvider from 'ra-data-simple-rest';
//import jsonServerProvider from 'ra-data-json-server';
//import { UserList } from './users';
//import { PostList, PostEdit, PostCreate } from './posts';
//import PostIcon from '@material-ui/icons/Book';
//import UserIcon from '@material-ui/icons/Group';
import { VetCreate, VetList } from './Components/vets';
import Dashboard from './Components/Dashboard';
import authProvider from './authProvider';
import dataProvider from './DataProvider';

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

/*const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
        console.log('options.headers: ', options.headers);
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:8081', fetchJson);*/

const App = () => (
  <Admin dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={ListGuesser} icon={UserIcon} />*/}
    {/*<Resource name="vets" list={ListGuesser} />*/}
    <Resource name="vets" create={VetCreate} list={VetList} />
  </Admin>
);

export default App;
