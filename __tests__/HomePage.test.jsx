import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  
  it("should display 'Home Page' text", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should display a button with text 'Click Me'", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("should have an input field with label 'Enter Random Test'", () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Random Test/)).toBeInTheDocument();
  });

  it("should have an input field with label 'Enter email'", () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter email/)).toBeInTheDocument();
  });

  it("should find an input field by placeholder text 'Search'", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
  
  it("should find an input field by value", () => {
    render(<Home />);
    expect(screen.getByDisplayValue(/Vishal/)).toBeInTheDocument();
  });

  it('Should not find element with text: This Is the Text!', () => {
    render(<Home />);
    // screen.queryByText("This Is the Text!");
    expect(screen.queryByText("This Is the Text!")).not.toBeInTheDocument();
  });
  
});
