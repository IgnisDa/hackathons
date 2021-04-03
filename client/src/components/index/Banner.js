import React from "react";
import Link from "@material-ui/core/Link";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="text-6xl tracking-widest uppercase transition-colors duration-300 select-none text-blurple sm:text-7xl md:text-8xl xl:text-9xl hover:text-indigo-600">
        Salve
      </div>
      <Link href="/connect" underline="none">
        <div className="px-2 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 border-2 rounded-sm cursor-pointer md:px-4 sm:text-lg md:text-xl text-spotify-green hover:text-black hover:bg-spotify-green border-spotify-green hover:border-black">
          Take the initiation test
        </div>
      </Link>
    </React.Fragment>
  );
}
