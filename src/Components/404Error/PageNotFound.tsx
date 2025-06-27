import React from "react";
import styles from "./PageNotFound.module.css";

export const PageNotFound: React.FC = () => {
    return (
        <>
        <div className={`${styles.text} d-flex flex-column align-items-center justify-content-center`}>
            <p>The page you are looking for does not exist</p>
        </div>
        </>
    )
}