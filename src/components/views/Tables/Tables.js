import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Tables = () => (
  <div className={styles.component}>
    <Typography variant="h4">Tables view</Typography>
    <Button variant="text" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New booking table</Button>
    <Button variant="text" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} >Booked table</Button>
    <Button variant="text" component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`} >New booking event</Button>
    <Button variant="text" component={Link} to={`${process.env.PUBLIC_URL}/tables/event/456def`} >Booked event</Button>
  </div>
);

export default Tables;