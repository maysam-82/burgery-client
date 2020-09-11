import React, { Fragment, useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { AxiosInstance } from 'axios';

// Changing name of function to lowercase to do not allow react wrongly throw
// error for calling useState, useEffects inside callback. With capital letter
// React assumes that we are going to return a callback with Hooks inside a Component.
const withErrorHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
    axios: AxiosInstance
) => (props: P) => {
    const [error, setError] = useState<{ [key: string]: string } | null>(null);
    const requestInterceptor = axios.interceptors.request.use((request) => {
        setError(null);
        return request;
    });

    const responseInterceptor = axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (err) => {
            if (err.response.data) {
                setError(err.response.data.error);
            } else {
                setError(err);
            }
        }
    );

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [requestInterceptor, responseInterceptor]);
    return (
        <Fragment>
            <Modal isShown={!!error} handleModalClose={() => setError(null)}>
                {error ? error.message : null}
            </Modal>
            <WrappedComponent {...(props as P)} />
        </Fragment>
    );
};

export default withErrorHandler;
