import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const PostUpdate = props => {
  return (
    <Edit {...props} title='Edit a post...'>
      <SimpleForm>
        <TextInput source='id' disabled/>
        <TextInput source='title'/>
        <TextInput source='content' multiline/>
        <DateInput source='createdAt' label='Published'/>
      </SimpleForm>
    </Edit>
  );
};

export default PostUpdate;
