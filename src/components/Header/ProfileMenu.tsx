import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-div"
      >
        <div className="menu__icon" aria-label="Menu-Icon">
          <MenuIcon />
        </div>
        <div className="user__icon" aria-label="Profile">
          <AccountCircleRoundedIcon />
        </div>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} tabIndex={0}>
          Sign Up
        </MenuItem>
        <MenuItem onClick={handleClose} tabIndex={0}>
          Login
        </MenuItem>
        <hr />
        <MenuItem onClick={handleClose} tabIndex={0}>
          Airbnb your home
        </MenuItem>
        <MenuItem onClick={handleClose} tabIndex={0}>
          Help Center
        </MenuItem>
      </Menu>
    </div>
  );
}
