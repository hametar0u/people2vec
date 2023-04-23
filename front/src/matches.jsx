import Cards from "./components/card";
import { MatchesBanner } from "./components/matches-banner";
import { MatchesContent } from "./components/matches-content";

function Matches(props) {
    return (
        <div className="App">
        <MatchesBanner></MatchesBanner>
        <MatchesContent></MatchesContent>
      </div>
    );
}

export default Matches;
