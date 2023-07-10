import { Route, Routes } from "react-router-dom";

import Wishlist from "../pages/wishlist";

export function WishlistRoute() {
  return (
    <Routes>
      <Route path="/" element={<Wishlist />} />
    </Routes>
  );
}
