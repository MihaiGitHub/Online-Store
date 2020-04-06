import React from 'react';
import axios from 'axios';

function Home(props) {
  console.log('Products ', props)
  // Interact with outside world, make request to an API from client side
  // Runs after componentDidMount
  // React.useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';

  //   const response = await axios.get(url);

  //   console.log(response)
  // }

  return <>home</>;
}

// Special function from Next.js executed as a method on the Home component
// Gets some initial data that will be merged to the props of this component
Home.getInitialProps = async () => {
  // Fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);

  // Return response data as an object
  return { products: response.data };
}

export default Home;
