import React, { Fragment, Component } from 'react';
import Modal from '../../components/Modal/Modal';
import { AxiosInstance } from 'axios';

interface IWithErrorHandlerState {
    error: { [key: string]: string } | null;
}

const WithErrorHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
    axios: AxiosInstance
) => {
    return class _ extends Component<P, IWithErrorHandlerState> {
        constructor(props: P) {
            super(props);

            this.state = {
                error: null,
            };
        }

        componentDidMount() {
            axios.interceptors.request.use((request) => {
                this.setState({ error: null });
                return request;
            });
            axios.interceptors.response.use(
                (response) => response,
                (error) => {
                    this.setState({ error });
                }
            );
        }

        handleCloseModal = () => {
            this.setState({ error: null });
        };

        render() {
            const { error } = this.state;
            console.log(!!error);
            return (
                <Fragment>
                    <Modal
                        isShown={!!error}
                        handleModalClose={this.handleCloseModal}
                    >
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent {...(this.props as P)} />
                </Fragment>
            );
        }
    };
};

export default WithErrorHandler;
