import { Login } from "@mui/icons-material";
import { useEffect } from "react";

function About() {
  const client_id = "0a66a8075fe445a49f32a88892f34adb";
  const scopes = "user-top-read";
  const redirect_uri = "http://localhost:3000/about";
  const login = () => {
    let popup = window.open(
      `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`,
      "Login with Spotify",
      "width=800,height=600"
    );

    window.spotifyCallback = (payload) => {
      // alert(payload)

      popup.close();

      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    };
  };

  useEffect(() => {
    let token = window.location.hash.substr(1).split("&")[0].split("=")[1];
    console.log(token);
    if (token) {
      window.opener.spotifyCallback(token);
    }
  }, []);

  return (
    <div>
      hi :)
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default About;
