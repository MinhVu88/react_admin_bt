import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Posts from './components/Posts';
import PostCreation from './components/PostCreation';
import PostUpdate from './components/PostUpdate';
import Users from './components/Users';
import UserCreation from './components/UserCreation';
import UserUpdate from './components/UserUpdate';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='posts' list={Posts} create={PostCreation} edit={PostUpdate}/>
      <Resource name='users' list={Users} create={UserCreation} edit={UserUpdate}/>
    </Admin>
  );
}

export default App;
