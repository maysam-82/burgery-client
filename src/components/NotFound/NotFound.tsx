import React from 'react';
import notFoundPicture from '../../assets/img/404.svg';
import history from '../../history';
import Button from '../Button/Button';

import classes from './notFound.module.scss';

function NotFound() {
    return (
        <div className={classes.notFoundContainer}>
            <img src={notFoundPicture} alt="page not found" />
            <h3>Page Not Found</h3>
            <Button type="success" handleClick={() => history.push('/')}>
                Home
            </Button>
        </div>
    );
}

NotFound.propTypes = {};

export default NotFound;
