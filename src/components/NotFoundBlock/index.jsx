import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😟</span>
        <br />
        404
      </h1>
      <p className={styles.description}>К сожалениею данная страница не найдена</p>
    </div>
  );
};

export default NotFoundBlock;
