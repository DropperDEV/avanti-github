import React from "react";
import { Atom } from "react-loading-indicators";

export default function Account({ account, loading, errorMsg }) {
  const { name, bio, avatar_url } = account || {};
  return (
    <div className="rounded-2xl bg-gray-200 p-4 lg:min-w-[800px] max-w-[800px] flex justify-center">
      {loading ? (
        <Atom color="#0632bf" size="large" />
      ) : account ? (
        <div className="flex gap-6 items-center justify-center">
          <img
            src={avatar_url}
            alt="photo"
            className="rounded-full size-64 border-3 border-blue"
          />
          <div className="flex gap-2 flex-col w-2/4 h-[120px] overflow-hidden">
            <h2 className="text-blue text-2xl font-semibold">{name}</h2>
            <p className="line-clamp-3" title={bio}>{bio}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 break-words text-center">{errorMsg}</p>
      )}
    </div>
  );
}
