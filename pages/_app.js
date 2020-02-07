// _app.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

const reducer = (state = { foo: '' }, action) => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload };
        default:
            return state;
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {
    static async getInitialProps({ Component, router,ctx }) {
        // we can dispatch from here too
        // console.log('Component here', Component);
        // console.log('Router here', router);
        // console.log('CTX here', ctx);
        ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);