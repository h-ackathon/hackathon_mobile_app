export const GET_TEAM_LOGO = team => {
  switch (team){
    case "pak123":
      return  "https://seeklogo.com//images/P/pakistan-cricket-team-logo-7693343AA7-seeklogo.com.png";
    case "aus123":
      // console.log("AUS FLAG");
      return  "https://vignette.wikia.nocookie.net/logopedia/images/b/b0/CricketAustralia.png/revision/latest?cb=20160315134728";
    case "eng123":
      return  "https://www.pinclipart.com/picdir/big/87-878484_file-england-cricket-team-logo-svg-wikipedia-ant.png";
    case "wi123":
      return  "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png";
    case "mi123":
      return  "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png";
    case "sl123":
      // console.log("SRI LANKA FLAG");
      return  'https://seeklogo.com/images/S/sri-lanka-flag-logo-30E6D2B593-seeklogo.com.png';
  }
}

export const GET_TEAM_NAME = (league, teams) => {
  
}