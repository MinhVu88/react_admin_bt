import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin';

const Posts = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id'/>
        <TextField source='title'/>
        <TextField source='content'/>
        <DateField source='createdAt'/>
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts'/>
      </Datagrid>
    </List>
  );
}

export default Posts;
