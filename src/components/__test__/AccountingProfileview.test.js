import React from "react";
import AccountingProfileview from "../AccountingProfileview";
import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

test("Check accounting header",()=>{
    const {getByTestId}=render(<AccountingProfileview/>);
    const r=getByTestId("role");
    fireEvent.change(r,{
        value:"role:Account Manager"
    })
    expect(r.value).toBe("role:Account Manager")

 })