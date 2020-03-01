import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { fetchLOTR } from "../../redux/actions/LOTRActions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/commons/LOTRcard/LOTRcard";
import Spinner from "../../components/commons/spinner";

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
  // console.log("this is LOTRs",LOTRs);
  useEffect(() => {
    dispatch(fetchLOTR());
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
