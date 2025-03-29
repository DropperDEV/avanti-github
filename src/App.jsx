import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Account from "./components/Account";

export default function App() {
  const [account, setAccount] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [triggered, setTriggered] = useState(false)
  return (
    <main className="min-h-screen mx-auto flex flex-col  p-16 px-30 items-center gap-8">
      <Header />
      <Input
        setAccount={setAccount}
        setErrorMsg={setErrorMsg}
        setLoading={setLoading}
        setTriggered={setTriggered}
      />
   { triggered &&  <Account account={account} loading={loading} errorMsg={errorMsg} />}
    </main>
  );
}
