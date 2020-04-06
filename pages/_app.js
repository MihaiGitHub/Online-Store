import App from "next/app";
import Layout from '../components/_App/Layout'

class MyApp extends App {
  // Static methods can be accessed outside of classes
  // Get access to page component
  static async getInitialProps({ Component, ctx }){
    let pageProps = {};

    if(Component.getInitialProps){
      // Execute components getInitialProps function
      // ctx - request/response information and current route we are on
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }; // pageProps: pageProps
  }

  // Component is returning the entire page
  // Pass component as child to layout
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
      );
  }
}

export default MyApp;
