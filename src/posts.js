import React from 'react';
import {
    TextField,
    EditButton,
    List,
    Datagrid,
    ReferenceField
} from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="title"/>
            <EditButton/>
        </Datagrid>
    </List>
);
