import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  return (
    <main className="min-h-screen mx-auto flex flex-col  p-16 items-center gap-8">
      <Header />
      <Input />
    </main>
  );
}
