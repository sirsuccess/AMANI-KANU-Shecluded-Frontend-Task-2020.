import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";

import { fetchLOTR } from "../../redux/actions/LOTRActions";
import Card from "../../components/commons/LOTRcard/LOTRcard";
import Spinner from "../../components/commons/spinner";
import ErrorMsg from "../../components/commons/Eroor";
import Search from "../../components/commons/search";

export default function LOTRPage() {
  const dispatch = useDispatch();
  const LOTRDataFromAPI = useSelector(state => state.LOTR);
  const { loading, LOTRs, error } = LOTRDataFromAPI;

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(21);
  const [numPage, setNumPage] = useState(dataPerPage);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentPost = LOTRs.slice(indexOfFirstData, indexOfLastData);

  useEffect(() => {
    dispatch(fetchLOTR());
  }, []);

  useEffect(() => {
    setDataPerPage(numPage);
  }, [numPage]);

  const paginate = pn => {
    setCurrentPage(pn);
  };

  function searchFunction(e) {
    let searchInput = e.target.value.toLowerCase();

    let NewArr = [];
    LOTRs.filter(function(element, i) {
      let itemSearch = element.name.toLowerCase().includes(searchInput);

      if (itemSearch) {
        NewArr.push(element);
      }
      return;
    });
    // setState(NewArr);
  }
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMsg />
      ) : (
        <div>
          <Search searchFunction={searchFunction} />
          <Card cats={currentPost} />
          <div className="mt-5 justify-content-center align-self-center">
            <Pagination
              hideFirstLastPages
              pageRangeDisplayed={5}
              activePage={currentPage}
              itemsCountPerPage={dataPerPage}
              totalItemsCount={LOTRs.length}
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
