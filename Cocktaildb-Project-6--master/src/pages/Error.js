import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return <section className="error-page section">
    <div className="error-container">
      <h1>Opps!! It's a Dead end</h1>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div>
  </section>
}
