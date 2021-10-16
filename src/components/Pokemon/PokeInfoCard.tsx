import { IPokeData } from "../../interfaces/IPokeData"
import { capitalizeFirstLetter } from "../../utils/StylingUtil"
import { Kort } from "../Kort"
import { PokeInfo } from "./PokeInfo"

interface IPokeInfoCardProps{
    pokeData: IPokeData | undefined
}

export const PokeInfoCard: React.FC<IPokeInfoCardProps> = ({pokeData}) => {

    return(
        <div style={{marginTop: "50px", marginBottom: "50px"}}>
        {pokeData 
        ? 
        <Kort header={capitalizeFirstLetter(pokeData.name)} content={<PokeInfo pokeData={pokeData}/>} />
        :
        <div>
            <Kort header={"Sök på en pokemon för att se stats"} />
        </div>
        }
    </div>
    )
}