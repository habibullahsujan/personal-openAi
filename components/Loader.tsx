import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center gap-x-4">
      <div className="h-8 w-8 animate-spin">
        <Image alt="Logo" src={"/logo.png"} fill />
      </div>
      <p className="text-center text-muted-foreground">
        Genius is thinking.....
      </p>
    </div>
  );
};

export default Loader;
