import { useEffect, useState } from "react"
import { Button, Input } from "reactstrap"
import { PokeInfoCard } from "../components/Pokemon/PokeInfoCard"
import { IPokeList, PokeList } from "../components/Pokemon/PokeList"
import { IPokeData } from "../interfaces/IPokeData"
import { getApiResponse } from "../utils/apiUtil"

export const Pokemon = () => {
    const [pokeData, setPokeData] = useState<IPokeData>();
    const [listData, setListData] = useState<IPokeList>();
    const [inputText, setInputText] = useState("");
    const [showError, setShowError] = useState(false);
    
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(() => {
        var resIsOK = getApiResponse(baseUrl, setListData);
        if(!resIsOK)
            handleSearchError("Kunde inte hämta data för listan")
    }, [])

    const getPokemon = (apiUrl: string) => {
        if(inputText){
            var resIsOK = getApiResponse(apiUrl, setPokeData);
            console.log("Sökning: " + resIsOK);
            if(!resIsOK){
                handleSearchError("Kunde inte hämta data")
           }
        }
    }

    const handleSearchError = (error:any) => {
        console.log(error)
        setShowError(true);
        setTimeout(() => setShowError(false), 5000)
    }

    return(
    <>
        <div className="my-container" style={{justifyContent: "left"}}>
            <div>
                <div style={{float: "left", marginBottom: "1rem", fontSize: "24px", fontFamily: "cursive"}}>
                    <b>Här kan du söka på pokémons och se dess stats!</b>
                </div>
                <div>
                    <Input 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <Button onClick={() => {getPokemon(baseUrl+inputText) }}>
                        Sök Pokemon
                    </Button>
                    {showError ? <div style={{color: "red", textShadow: "1px 1px #000000"}}>Kunde inte hitta något med det namnet</div>:<></> }
                </div>
            </div>
        </div>
        <div className="my-container" style={{float: "left"}}>
            {listData ? <PokeList pokeList={listData}/> : <>Kunde inte hämta någon data :(</> }
        </div>
        <PokeInfoCard pokeData={pokeData}/>
    </>
    )
}