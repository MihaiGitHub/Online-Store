import App from "next/app";
import Layout from '../components/_App/Layout'

class MyApp extends App {

  // Component is returning the entire page
  // Pass component as child to layout
  render() {
    const { Component } = this.props;
    return (
      <Layout>
        <Component />
      </Layout>
      );
  }
}

export default MyApp;
