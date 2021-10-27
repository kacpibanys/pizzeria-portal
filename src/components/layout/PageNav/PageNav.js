import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const MyLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
const PageNav = () => (
  <nav>
    <Button variant="contained" size="large" color='primary' component={MyLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    <Button variant="contained" size="large" color='primary' component={MyLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
    <Button variant="contained" size="large" color='primary' component={MyLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    <Button variant="contained" size="large" color='primary' component={MyLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
    <Button variant="contained" size="large" color='primary' component={MyLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
 </nav>

);


export default PageNav;