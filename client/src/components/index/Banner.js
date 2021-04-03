import React from "react";
import Link from "next/link";
import Typography from '@material-ui/core/Typography'




export default function Banner() {
  return (
    <React.Fragment>
      <Typography variant="h1" className="uppercase transition-colors duration-300 select-none text-blurple text-7xl md:text-8xl xl:text-9xl hover:text-indigo-600">
        Salve
      </Typography>
      <Link href={{ pathname: "survey", query: { question: 1 } }}>
        <div className="px-4 py-2 font-bold tracking-widest uppercase transition-colors duration-300 border-2 rounded-sm cursor-pointer sm:text-lg md:text-xl text-spotify-green hover:text-black hover:bg-spotify-green border-spotify-green hover:border-black">
          Take the initiation test
        </div>
      </Link>
    </React.Fragment>
  );
}
