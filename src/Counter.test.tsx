import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("renders hello world", () => {
  const { getByText, getByRole } = render(<Counter />);
  const label = getByText("Counter");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
  const { getByText, getByRole } = render(<Counter label={"Current"} />);
  const label = getByText("Current");
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  const { getByRole } = render(<Counter label={"Current"} />);
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const { getByRole } = render(<Counter start={10} />);
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("10");
});

test("should increment the count by one", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("should increment the count by ten", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });

  expect(counter).toHaveTextContent("10");
});
