"use client";
import { useState } from "react";

export default function ModalPage() {
  const [show, setShow] = useState(false);

  return (
    <main>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && (
        <div>
          <h2>Modal Window</h2>
          <p>This is a simple modal</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      )}
    </main>
  );
}
