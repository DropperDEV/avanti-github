import React from "react";

export default function Account({ account }) {
  return (
    <div className="rounded-lg bg-gray p-4 w-3/7 justify-center">
      {account ? (
        <div></div>
      ) : (
        <p className="text-red break-words text-center">
          Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente
        </p>
      )}
    </div>
  );
}
