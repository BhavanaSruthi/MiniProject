import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";
import FilterBy from "../../components/FilterBy";
import Pagination from "../../components/Pagination";
export default function ShopPage() {
  const [data, setData] = useState();
  const [perPage, setPerPage] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [active, setActive] = useState(false);
  const pageHandler = (pageNumber) => {
    if (data) {
      setPerPage(data.slice(pageNumber * 9 - 9, pageNumber * 9));
      setCurrentpage(currentPage + 1);
      setActive(!active);
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:3200/shopPageEvents")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((e) => console.log(e));
    };
    fetchPosts();
    if (data) {
      setPerPage(data.slice(0, 9));
    }
  }, []);
  useEffect(() => {
    if (data) {
      setPerPage(data.slice(0, 9));
    }
  }, [data]);
  console.log(data);
  if (data) {
    const getEventById = (id) => {
      return data.find((event) => event.id === id);
    };
    return (
      <div className="container-fluid row  mx-auto">
        <div className="col-2">
          <FilterBy />
        </div>
        <div className="col-10 ">
          <ProductList products={perPage} getEventById={getEventById} />
        </div>
        <div class="row">
          <Pagination
            pageHandler={pageHandler}
            currentPage={currentPage}
            active={active}
          />
        </div>
      </div>
    );
  }
}
