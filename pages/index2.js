import firebase from "../firebase/clientApp.ts";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Auth from "../components/Auth.js";
import VoterList from "../components/VoterList.js";

export default function Home() {
  const [user, loading] = useAuthState(firebase.auth());
  console.log("Loading:", loading, "|", "Current user:", user);

  const [votes, votesLoading] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );
  console.log("VotesLoading:", votesLoading, "|", "Current votes:", votes);

  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }
  const db = firebase.firestore();

  const addVoteDocument = async (vote) => {
    await db.collection("votes").doc(user.uid).set({
      vote,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gridGap: 8,
        background:
          "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      {loading && <h4>Loading...</h4>}
      {!user && <Auth />}
      {user && (
        <>
          <h1>Pineapple on Pizza?</h1>

          <div style={{ flexDirection: "row", display: "flex" }}>
            <button
              style={{ fontSize: 32, marginRight: 8 }}
              onClick={() => addVoteDocument("yes")}
            >
              ✔️🍍🍕
            </button>
            <h3>
              Pineapple Lovers:{" "}
              {votes?.docs?.filter((doc) => doc.data().vote === "yes").length}
            </h3>
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <button
              style={{ fontSize: 32, marginRight: 8 }}
              onClick={() => addVoteDocument("no")}
            >
              ❌🍍🍕
            </button>
            <h3>
              Pineapple Haters:{" "}
              {votes?.docs?.filter((doc) => doc.data().vote === "no").length}
            </h3>
          </div>
        </>
      )}
      <div style={{ marginTop: "64px" }}>
        <h3>Voters:</h3>
        <div
          style={{
            maxHeight: "320px",
            overflowY: "auto",
            width: "240px",
          }}
        >
          {votes?.docs?.map((doc) => (
            <>
              <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
