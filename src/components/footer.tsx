import { Link } from "gatsby";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
        © {new Date().getFullYear()}, Built by Javier
    </footer>
  );
}

export default Footer;