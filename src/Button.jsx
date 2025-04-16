import React from "react";

export default function Button({ children }) {
  return (
    <button className="btn btn-primary mt-3">
      {children}
    </button>
  );
}
