import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function useAddWhishlist() {
  const headers = {
    token: localStorage.getItem("tkn"),
  };

  async function addProductToWishlist(productId) {
    return await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers,
      },
      {
        productId: productId,
      }
    );
  }
  const queryClient = useQueryClient();
  const addWhishlist = useMutation({
    mutationFn: addProductToWishlist,
   
        onSuccess: () => {

queryClient.invalidateQueries(['displayWishlist'])

      
    },
  });

  return addWhishlist;
}
