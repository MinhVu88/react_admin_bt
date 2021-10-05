import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';

const UserUpdate = props => {
  return (
    <Edit {...props} title='Edit user info...'>
      <SimpleForm>
        <TextInput source='id' disabled/>
        <TextInput source='name'/>
        <TextInput source='email'/>
      </SimpleForm>
    </Edit>
  );
};

export default UserUpdate;
