import React from 'react';

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing No Found 404
      </h1>
      <p className={styles.description}>
        {' '}
        Sorry, but by ur request anything not found. Please, check ur reqeust and contact us if u
        did correctly request!
      </p>
    </div>
  );
}
