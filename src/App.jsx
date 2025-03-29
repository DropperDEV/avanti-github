import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Account from "./components/Account";

export default function App() {



  return (
    <main className="min-h-screen mx-auto flex flex-col  p-16 px-30 items-center gap-8">
      <Header />
      <Input />
      <Account/>
    </main>
  );
}
