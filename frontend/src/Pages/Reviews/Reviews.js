  //   const [showBestRatedShops, setShowBestRatedShops] = useState(true);
  //  const bestRatedShops = useSelector((state) => state.shops.bestRatedShops);
  //   const fetchBestRatedShops = () => async (dispatch) => {
//     try {
//       const response = await axios.get("https://quickserv.onrender.com/shop/shops/best-rated");
//       if (response.data.success) {
//         dispatch(setBestRatedShops(response.data.shops));
//       }
//     } catch (error) {
//       console.error("Error fetching best-rated shops:", error);
//     }
//   };


//   useEffect(() => {
//     dispatch(fetchBestRatedShops());
//   }, [dispatch]);

//   const handleUpdateShopRating = async (shopId, newRating) => {
//     try {
//       const response = await axios.post(
//         `https://quickserv.onrender.com/shop/shops/rating`,
//         { shop_id: shopId, rating: newRating },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         dispatch(updateShopById(response.data.shop));
//       } else {
//         console.error("Failed to update shop rating");
//       }
//     } catch (error) {
//       console.error("Error updating shop rating:", error);
//     }
//   };


//   const handleRatingSubmit = async () => {
//     if (selectedShop) {
//       try {
//         const response = await axios.post(
//           `https://quickserv.onrender.com/shop/shops/rating`,
//           { shop_id: selectedShop, rating: newRating },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             }
//           }
//         );
//         if (response.data.success) {
//           dispatch(updateShopById(response.data.shop));
//           setMessage("Rating submitted successfully!");
//         } else {
//           setMessage("Failed to submit rating. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting rating:", error);
//         setMessage("An unexpected error occurred. Please try again.");
//       }
//       setSelectedShop(null);
//       setNewRating(1);
//     }
//   };

 {/* {bestRatedShops.length > 0 && !showProducts && (
        <div>
          <h2>Best Rated Shops</h2>
          <ul className="best-rated-shop-list">
            {bestRatedShops.map((shop) => (
              <li
                key={shop.shop_id}
                onClick={() => handleShopClick(shop.shop_id)}
              >
                <h3>{shop.name}</h3>
                <p>Rating: {shop.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )} */}

 