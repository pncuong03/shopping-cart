import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Input, Pagination, Row } from "antd";
import ProductCard from "./ProductCard";
import { AppDispatch } from "~/app/store";
import { fetchProducts, setSearchTerm } from "~/redux/productSlice";
import { getFilteredProducts } from "~/redux/selector";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(getFilteredProducts);
  const [item, setItem] = useState({ min: 0, max: 4 });
  const numEachPage = 4;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (value: number) => {
    setItem({
      min: (value - 1) * numEachPage,
      max: value * numEachPage,
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="m-6">
      <div className="mt-10 flex justify-center font-bold text-3xl mb-6">
        Shop
      </div>
      <div className="flex gap-8 h-[50px] items-center mb-6">
        <h2 className="font-semibold text-2xl px-3 md:px-0">Search product:</h2>
        <Input
          placeholder="Search products"
          style={{ width: 200, height: 50 }}
          onChange={handleSearch}
        />
      </div>
      <Row gutter={[10, 16]}>
        {products?.slice(item.min, item.max).map((product: any) => (
          <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        pageSize={numEachPage}
        onChange={handleChange}
        total={products?.length}
        className="mt-6 flex justify-center"
      />
    </div>
  );
};

export default Products;
