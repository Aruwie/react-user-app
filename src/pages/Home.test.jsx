import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

// MOCK API
jest.mock("../api/axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        data: [
          {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john@example.com",
          },
        ],
        total_pages: 2,
      },
    })
  ),
}));

test("renders User List title", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const text = screen.getByText(/User List/i);
  expect(text).toBeInTheDocument();
});

test("renders pagination buttons", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Prev/i)).toBeInTheDocument();
  expect(screen.getByText(/Next/i)).toBeInTheDocument();
});

test("click next button", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const nextBtn = screen.getByText(/Next/i);
  await userEvent.click(nextBtn);

  expect(nextBtn).toBeInTheDocument();
});

test("renders user data from API", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const userName = await screen.findByText(/John Doe/i);
  expect(userName).toBeInTheDocument();
});

test("shows correct total pages", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const pageText = await screen.findByText(/1 \/ 2/i);
  expect(pageText).toBeInTheDocument();
});