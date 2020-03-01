import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";

import { fetchCat } from "../../redux/actions/catActions";
import Card from "../../components/commons/card/Card";
import Spinner from "../../components/commons/spinner";

export default function CatPage() {
  //initialize useDispatch
  const dispatch = useDispatch();

  //get cats from store
  const catDataFromAPI = useSelector(state => state.cat);
  const { loading, cats, error } = catDataFromAPI;

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [numPage, setNumPage] = useState(dataPerPage);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentPost = cats.slice(indexOfFirstData, indexOfLastData);

  useEffect(() => {
    //dispatch fetchCat
    dispatch(fetchCat());
  }, []);

  useEffect(() => {
    setDataPerPage(numPage);
  }, [numPage]);

  const paginate = pn => {
    setCurrentPage(pn);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Card catData={currentPost} />

          <div className="mt-5">
            <Pagination
              hideFirstLastPages
              pageRangeDisplayed={5}
              activePage={currentPage}
              itemsCountPerPage={dataPerPage}
              totalItemsCount={cats.length}
              onChange={paginate}
              prevPageText="<"
              nextPageText=">"
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </div>
      )}
    </div>
  );
}
