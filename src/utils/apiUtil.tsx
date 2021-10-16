import axios from "axios";
import React from "react";

export const getApiResponse = (url:string, setState: React.SetStateAction<any>) => {
    var key = "key_" + url;
    var isOk = false;
    if(localStorage.getItem(key) !== null){
        console.log("Hämtar data från cache...");
        if(!localStorage.getItem(key)){ 
            handleError("kunde inte sätta data från cache");
            return false;
        }
        var data = JSON.parse(localStorage.getItem(key) || "");
        setState(data);
        isOk = true;
    }
    else{
        console.log("Hämtar data från api...")
        axios.get(url)
        .then((response) => {
            localStorage.setItem(key, JSON.stringify(response.data));
            setState(response.data);
            isOk = true;
        })
        .catch(error => {
            handleError(error); 
            isOk = false;
            //return false;
        })
        .finally(() => {return isOk;})

        return isOk;
    }

    return isOk;
}

const handleError = (error:any) => {
    console.log("Fel: " + error)
}