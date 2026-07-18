import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfileMenu() {

  const { auth, logout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const handleLogout = () => {

    logout();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    navigate("/login", { replace: true });

  };

  if (!auth.fullName) return null;

  return (

    <div
      className="profile-menu"
      ref={menuRef}
    >

      <button
        className="profile-avatar"
        onClick={() => setShowMenu(!showMenu)}
      >
        {auth.fullName.charAt(0).toUpperCase()}
      </button>

      {showMenu && (

        <div className="profile-dropdown">

          <div className="profile-header">

            <div className="profile-avatar-large">
              {auth.fullName.charAt(0).toUpperCase()}
            </div>

            <h5>{auth.fullName}</h5>

            <p>{auth.email}</p>

            <span className="badge bg-primary">
              {auth.role}
            </span>

          </div>

          <hr />

          <Link
            to="/profile"
            className="btn btn-primary w-100 mb-2"
            onClick={() => setShowMenu(false)}
          >
            Edit Profile
          </Link>

          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      )}

    </div>

  );

}

export default ProfileMenu;