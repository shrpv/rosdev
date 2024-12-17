import classNames from "classnames";
import React from "react";
import styles from '@/components/Loading/Loading.module.scss';
import Logo from '@/shared/assets/logo.svg';

interface LoadingProps {
    isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
    return (
        <div className={classNames(styles.screen, {[styles.hidden]: !isLoading})}>
            <Logo />
        </div>
    );
};

export default Loading;
