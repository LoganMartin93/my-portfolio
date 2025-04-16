import React from "react";

export default function Card({ children }) {
  return (
    <div className="card shadow p-4 rounded">
      {children}
    </div>
  );
}
