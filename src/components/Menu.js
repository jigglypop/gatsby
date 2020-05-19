import React from "react"
import Link from "gatsby-link"

export default function Menu() {
  return (
    <div style={{ background: "#f4f4f4", paddingTop: "0" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/react3d/react3d">About</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}
