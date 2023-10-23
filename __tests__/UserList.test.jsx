import UserList from "@/components/UserList";
import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("UserList - Rendering", () => {
  it("Should Have the Text vishal", async () => {
    render(<UserList />);

    expect(await screen.findByText("vishal")).toBeInTheDocument();
    expect(screen.queryByText("No. Users")).not.toBeInTheDocument();
  });

  it("Should Have Username Vishal Rahngdale", async () => {
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: "vishal Rahngdale" }]));
      })
    );
    render(<UserList />);

    expect(await screen.findByText("vishal Rahngdale")).toBeInTheDocument();
  });
});
