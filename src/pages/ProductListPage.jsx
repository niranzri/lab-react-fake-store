import { useState, useEffect } from "react";
import classes from "../styles/listpage.module.css"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  
  //the 'fetch' function sends a network request to the URL and returns a promise.
  //when the promise is resolved, it passes a response object to te first then method.
  //result.json() allows us to parse the response as a JSON 
  //console.log of the result. 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
  }, []);


  return (
    <div className={classes.mainCtn}>
      {products.map(product => (
        <div key={product.id} className={classes.productCtn}>
          <div className={classes.item1}><img src={product.image} alt={product.title} /></div>
          <h2 className={classes.item2}>{product.title}</h2>
          <p className={classes.item3}>{product.category}</p>
          <p className={classes.item4}>${product.price}</p>
          <p className={classes.item5}>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
