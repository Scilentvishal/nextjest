import UserList from "@/components/UserList";
import { render, screen } from "@testing-library/react";

describe("UserList - Rendering", () => {
  it("Should Have the Text vishal", async () => {
    render(<UserList />);

    expect(await screen.findByText("vishal")).toBeInTheDocument();
    expect(screen.queryByText("No. Users")).not.toBeInTheDocument();

  });
});
