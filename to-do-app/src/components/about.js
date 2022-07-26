import React from 'react'
import { Link } from "react-router-dom";

function about() {
  return (
    <footer>
        <p>Copyright &copy; 2022 </p>
        <Link to="/"> Home </Link>
    </footer>
  )
}

export default about