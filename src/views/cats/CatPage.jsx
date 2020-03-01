import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";

import Card from "../../components/commons/card/Card";
// import Pagination from "../../components/commons/Pagination/Pagination";
import Spinner from "../../components/commons/spinner";
window.React = React;

export default function CatPage() {
  const [catData, setCatData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [numPage, setNumPage] = useState(dataPerPage);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentPost = catData.slice(indexOfFirstData, indexOfLastData);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key": "42a61d51-9255-43e7-8f8c-cdd66409c268" //the token is a variable which holds the token
        }
      })
      .then(response => {
        // response.data is the CAT
        const cat = response.data;
        setCatData(cat);
        // console.log(cat);
        setShowSpinner(true);
        // dispatch(fetchCatDatauccess(cat));
      })
      .catch(error => {
        console.log(error);

        // error.message is the error message
        // dispatch(fetchCatFailure(error.message));
      });
  }, []);

  useEffect(() => {
    setDataPerPage(numPage);
  }, [numPage]);

  const paginate = pn => {
    setCurrentPage(pn);
  };

  return (
    <div>
      {!showSpinner ? (
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
              totalItemsCount={catData.length}
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
