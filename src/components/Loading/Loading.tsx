import React from "react";
import styles from '@/components/Loading/Loading.module.scss';
import Logo from '@/shared/assets/logo.svg';

const Loading = () => {
    return (
        <div className={styles.screen}>
            <Logo />
        </div>
    );
};

export default Loading;
