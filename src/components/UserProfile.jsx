const UserProfile = ({ displayName, username, email, isEmailVarified }) => {
  return (
    <div>
      <div>
        <span>
          Display Name:{" "}
          {displayName.length > 30
            ? displayName.slice(0, 28).concat("...")
            : displayName}
        </span>
      </div>
      <div>
        <span>userName: {username}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        Varified : {isEmailVarified ? "Email Varified" : "Email Not Varified"}
      </div>
    </div>
  );
};

export default UserProfile;
