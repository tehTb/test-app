import { Link } from "react-router-dom";
import { Kortfärg } from "../enums/Kortfärg";
import { Kort } from "./Kort";
import hsLogo from '../assets/logos/hs-logo.png';
import wowLogo from '../assets/logos/wow-logo.svg';
import tftLogo from '../assets/logos/tft-logo.png';

interface kortprops{
    kortStyle?: React.CSSProperties | undefined;
    kortClass?: string | undefined;
}

export const Kortsektion: React.FC<kortprops> = ({kortStyle, kortClass}) => {

const tftText = "Draft, deploy, and dominate with a revolving roster of League of Legends champions in a round-based battle for supremacy. Outsmart your opponents and adapt as you go—the strategy is all up to you."
const wowText = "What lies beyond the world you know? The Shadowlands, resting place for every mortal soul—virtuous or vile—that has ever lived. Journey beyond the veil, discover five otherworldly realms of wonder and horror, gain incredible powers — and save Azeroth from all-consuming darkness."
const hsText = "Whether they’re minions, spells, quests, or heroes, Hearthstone’s cards can dramatically change the game with powerful effects and crazy interactions. Stay on your toes and outsmart your opponent!"

return(
    <>
    <div className={"my-card-container"}>
        <Link to="/wow">
            <Kort header={"Team fight tactics"} headerlogo={tftLogo} content={tftText} färg={Kortfärg.Blå}/>
        </Link>
        <Link to="/wow">
            <Kort header={"Worl of warcraft"} headerlogo={wowLogo} content={wowText} färg={Kortfärg.Röd}/>
        </Link>
        <Link to="/wow">
            <Kort header={"Hearthstone"} headerlogo={hsLogo} content={hsText} färg={Kortfärg.Orange}/>
        </Link>
    </div>
    </>
)
}