import { Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      sx={{
        backgroundColor: "#000",
        position: "sticky",
        justifyContent: "space-between",
        top: "0",
      }}
    >
      <Link
        to={"/"}
        style={{
          position: "sticky",
          backgroundColor: "#000",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;