import RegisterForm from "@/components/RegisterForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("RegisterForm - rendering ", () => {
  it("Should enter username and password and click on login button", async () => {
    render(<RegisterForm />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/Username/), "vishal");
    await userEvent.type(screen.getByLabelText(/password/), "Password");
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);
    // expect(await screen.queryByText('Success Logging In')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText("Success Logging In")).toBeInTheDocument();
    });
  });

  it("Should login user and display error message", async () => {
    server.use(
      rest.post("/api/auth", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<RegisterForm />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/Username/), "vishal");
    await userEvent.type(screen.getByLabelText(/password/), "Password");
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);
    // expect(await screen.queryByText('Error Logging In')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText("Error Logging In")).toBeInTheDocument();
    });
  });
});
