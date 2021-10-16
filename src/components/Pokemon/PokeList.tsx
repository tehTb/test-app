
interface IPokeListProps{
    pokeList: IPokeList
}

export interface IPokeList{
    results: Array<{id: number, name: string}>
}

export const PokeList: React.FC<IPokeListProps> = ({pokeList}) => {

    return(
    <div>
        <b style={{textDecoration: "underline", fontFamily: "cursive"}}>Lista över 20 st pokemon</b>
        <div style={{marginTop: "1rem"}}>
            {pokeList.results.map((p, key) => {
            return <div key={key} style={{color:"white", fontFamily: "cursive"}}><li>{p.name}</li></div>
            })}
        </div>
    </div>
        
    )
}