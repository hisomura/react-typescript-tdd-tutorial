import React from "react";
import {render} from "@testing-library/react";
import Counter from "./Counter";

test("renders hello world", () => {
    const {getByText, getByRole} = render(<Counter/>);
    const label = getByText("Counter");
    expect(label).toBeInTheDocument();
    const counter = getByRole("counter");
    expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
    const {getByText, getByRole} = render(<Counter label={"Current"}/>);
    const label = getByText("Current");
    expect(label).toBeInTheDocument();

    const counter = getByRole("counter");
    expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
    const {getByRole} = render(<Counter label={"Current"}/>);
    const counter = getByRole("counter");
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
    const {getByRole} = render(<Counter start={10}/>);
    const counter = getByRole("counter");
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("10");
});
