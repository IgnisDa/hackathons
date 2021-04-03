import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <React.Fragment>
      <Typography
        component="div"
        variant="h1"
        className="text-6xl tracking-widest uppercase transition-colors duration-300 select-none text-blurple sm:text-7xl md:text-8xl xl:text-9xl hover:text-light-black"
      >
        Salve
      </Typography>
      <Container>
        <Typography
          component="div"
          align="center"
          className="sm:text-xl md:text-2xl xl:text-xl"
        >
          <Typewriter
            options={{
              strings: [
                "Hey, I hope you're doing okay, ",
                "even if you are not, know that the feeling won't last forever.",
                "Sharing your pain helps.",
                "Talking to people who have gone through the same things might help you ",
                "because truly no one understands, other than the people who have been through it themselves.",
                "You are so Strong.",
              ],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 1,
              cursor: "<3",
            }}
          />
        </Typography>
      </Container>
      <Link href="/connect" underline="none">
        <div className="px-2 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 border-2 rounded-sm cursor-pointer md:px-4 sm:text-lg md:text-xl text-spotify-green hover:text-black hover:bg-spotify-green border-spotify-green hover:border-black">
          Take the First Step towards Healing
        </div>
      </Link>
    </React.Fragment>
  );
}
