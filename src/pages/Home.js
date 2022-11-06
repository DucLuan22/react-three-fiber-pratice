import React, { Suspense } from "react";
import MenuComponent from "../components/MenuComponent/MenuComponent";
import ProductCard from "../components/Shop/ProductCard";
function Home() {
  return (
    <main className="">
      <ProductCard model={"sofa"} />
    </main>
  );
}

export default Home;
