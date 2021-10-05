import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';

const PostCreation = props => {
  return (
    <Create {...props} title='Create a post...'>
      <SimpleForm>
        <TextInput source='title'/>
        <TextInput source='content' multiline/>
        <DateInput source='createdAt' label='Published'/>
      </SimpleForm>
    </Create>
  );
};

export default PostCreation;
