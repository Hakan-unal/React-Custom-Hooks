import React from "react";
import { ReactDOM } from "react";
import Button from "../button";
import { isTSAnyKeyword } from "@babel/types"


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div)
})