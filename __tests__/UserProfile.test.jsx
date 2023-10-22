import UserProfile from "@/components/UserProfile";
import { screen, render } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("Should Have Text Email Varified When isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName={"Vishal Rahangdale"}
        username="Vishal12"
        email="vishal14@gmail.com"
        isEmailVarified={true}
      />
    );
    expect(screen.getByText(/Email Varified/)).toBeInTheDocument();
  });

  it("Should Have Text Email Varified When isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName={"Vishal Rahangdale"}
        username="Vishal12"
        email="vishal14@gmail.com"
        isEmailVarified={false}
      />
    );
    // expect(screen.getByText(/Email Not Varified/)).toBeInTheDocument();
    expect(screen.queryByText(/Email Varified/)).not.toBeInTheDocument();

    expect(screen.getByText(/Email Not Varified/)).toBeInTheDocument();
  });

  it("Should have display name end with three dots when it greater than 30 characters", () => {
    render(
      <UserProfile
        displayName={"Vishal Rahangdale Rahangdale Rahangdale"}
        username="Vishal12"
        email="vishal14@gmail.com"
        isEmailVarified={false}
      />
    );
    const  displayNameSpanElement = screen.getByText(/Display Name:/)
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./)
  });

  it("Should not have display name end with three dots when it less than 30 characters", () => {
    render(
      <UserProfile
        displayName={"Vishal Rahangdale"}
        username="Vishal12"
        email="vishal14@gmail.com"
        isEmailVarified={false}
      />
    ); 
    const  displayNameSpanElement = screen.getByText(/Display Name:/)
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./)
  });
});
