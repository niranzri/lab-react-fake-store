import { useState, useEffect } from "react";
import { useParams} from "react-router-dom"
import classes from "../styles/listpage.module.css"


function ProductDetailsPage() {

  const [productDetails, setProductDetails] = useState({});

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  useEffect(() => {
    // Fetch individual product details based on productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(result => result.json())
      .then(productData => setProductDetails(productData))
      .catch(error => console.log(error));
  }, [productId]);


  return (
    <div className="mainCtn">
        <div key={productDetails.id} className={classes.productCtn}>
          <div className={classes.item1}><img src={productDetails.image} alt={productDetails.title} /></div>
          <h2 className={classes.item2}>{productDetails.title}</h2>
          <p className={classes.item3}>{productDetails.category}</p>
          <p className={classes.item4}>${productDetails.price}</p>
          <p className={classes.item5}>{productDetails.description}</p>
        </div>
    </div>
  );
}

export default ProductDetailsPage;
