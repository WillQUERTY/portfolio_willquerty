import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
