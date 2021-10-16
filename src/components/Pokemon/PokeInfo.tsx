import { IPokeData } from "../../interfaces/IPokeData"
import { capitalizeFirstLetter, getTypeColor } from "../../utils/StylingUtil"

interface IPokeInfoProps{
    pokeData: IPokeData | undefined
}

export const PokeInfo: React.FC<IPokeInfoProps> = ({pokeData}) => {
    return(
        <>
        {pokeData ? 
        <>
            <div className="pokeInfo-card">
                <div className="pokeInfo-img">
                    <img src={pokeData.sprites.other["official-artwork"].front_default} alt={"img_"+pokeData.name} />
                </div>
                <div style={{paddingLeft: "10px"}}>
                    <div className="pokeInfo-stats-container">
                        Types: {pokeData.types.map((type, key) => {
                            return( 
                                <b key={key} className="pokeInfo-stats-type" style={{color: getTypeColor(type.type.name)}}>
                                    {type.type.name}
                                </b>
                            )})}
                        <div>Weight: {pokeData.weight}</div>
                        <div>Height: {pokeData.height}</div>
                    </div>
                    <div className="pokeInfo-stats-container">
                        <b>Base stats:</b>
                        {pokeData.stats.map((stat, key) => {
                            return <div key={key}>{capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}</div>
                        })}
                    </div>
                </div>
            </div>
            
            <div style={{paddingTop: "20px", fontFamily: "cursive"}}>
                <div style={{marginBottom: "20px"}}>
                    <b>Specifika abilities för {capitalizeFirstLetter(pokeData.name)}:</b>
                        <div className="pokeInfo-move-container">
                        {pokeData.abilities.map((ability, key) => {
                            return(
                            <a key={key} href={"/"}>
                                <div key={key} className="pokeInfo-move"> 
                                    {capitalizeFirstLetter(ability.ability.name)}
                                </div>
                            </a>
                        )})}
                        </div>
                </div>

                <div style={{marginBottom: "20px"}}>
                    <b>Tillgängliga moves för {capitalizeFirstLetter(pokeData.name)}:</b>
                    <div className="pokeInfo-move-container">
                    {pokeData.moves.map((move, key) => {
                        return(
                        <a key={key} href={"/"}>
                            <div key={key} className="pokeInfo-move"> 
                                {capitalizeFirstLetter(move.move.name)}
                            </div>
                        </a>
                    )})}
                    </div>
                </div>
            </div>
        </>
        :
        <></>
        }
      </>
    )
}