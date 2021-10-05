import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';

const UserCreation = props => {
  return (
    <Create {...props} title='Create user...'>
      <SimpleForm>
        <TextInput source='name'/>
        <TextInput source='email'/>
      </SimpleForm>
    </Create>
  );
};

export default UserCreation;
