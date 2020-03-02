import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const Search = ({ searchFunction }) => {
  //   console.log("searchInput", searchInput);

  return (
    <div>
      <InputGroup className="col-md-3 mt-5">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i class="fa fa-search"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="search Character..."
          onChange={searchFunction}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
