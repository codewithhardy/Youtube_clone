import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnhWvaAu0TFItiMXDi37c8vM-C83nffeqvD84qur0A=s900-c-k-c0x00ffffff-no-rj"
        channel="BB Ki Vines- | My Duty |"
        verified
        subs="20M"
        noOfVideos={2020}
        description="Is our outrage not helping the situation? Let's act accordingly. SHARE THIS VIDEO. Music credits: https://www.bensound.com This is an all original work of BB Ki Vines. #MyDuty #BBKiVines..."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="20M"
        description="Due to the lockdown, Bubbly sir has hosted an online class for BB and Banchoddas. This one is for all the students! Bancho's ..."
        timestamp="59 seconds ago"
        channel="BB KI VIENS"
        title="BB Ki Vines- | Angry Masterji- Part 15 |"
        image="https://m.media-amazon.com/images/M/MV5BZDJmOWYyZTktYTYwOS00YjhmLWI4NzctMDdkN2QwMmNkNTFmXkEyXkFqcGdeQXVyMzA0MTUxNDE@._V1_.jpg"

      />
        <VideoRow
        views="4.8M"
        subs="20M"
        description="hola, sameer, bancho, titu mama, bhuvan bam, bb, funny, humour, hilarious, movies, bollywood, revenge Life Comedy its video is ..."
        timestamp="1year ago"
        channel="BB KI VIENS"
        title="BB Ki Vines|PUBG बंद | New comedy video|Life Comedy"
        image="https://i.ytimg.com/vi/cgHbdQcPlQE/mqdefault.jpg"

      />
    </div>
  );
}

export default SearchPage;
