import { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";

function LayoutComponent({ children }) {
  const [value, setValue] = useState(0);
  const router = useRouter();

  useEffect(() => {
    switch (value) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/auth");
        break;
      case 2:
        router.push("/about");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="layout-container">
      {children}
      <BottomNavigation
        className="bottom-nav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="About" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default LayoutComponent;
