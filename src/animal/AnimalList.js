import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { SimpleList, List, Datagrid, DateField, TextField, ChipField } from 'react-admin';

export const AnimalList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List {...props} sort={{ field: "registrationDate", order: "DESC" }}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.clinicalRecord}
          tertiaryText={record => record.state.name}
          linkType="show"
          />
      ) :  (
          <Datagrid rowClick="show" optimized>
            <DateField source="registrationDate" />
            <TextField source="id"/>
            <TextField source="clinicalRecord" />
            <TextField source="name" />
            <ChipField source="species" />
            <ChipField source="state.name" />
          </Datagrid>
      )}
    </List>
  );
};

export default AnimalList;
