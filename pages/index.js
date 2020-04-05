import React from 'react';
import axios from 'axios';

function Home() {
  // Interact with outside world, make request to an API
  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = 'http://localhost:3000/api/products';

    const response = await axios.get(url);

    console.log(response)
  }

  return <>home</>;
}

export default Home;
