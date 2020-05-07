import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, useTranslate } from 'react-admin';

export default () => {
  const translate = useTranslate();

  return (
    <Card >
      <Title title = { translate('dashboard.title') }/>
        <CardContent > { translate('dashboard.card.content') } < /CardContent>
    < /Card >
  );
};
