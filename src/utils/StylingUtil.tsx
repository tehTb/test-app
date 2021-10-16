
export const capitalizeFirstLetter = (text: string) =>{
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const getTypeColor = (type: string) => {
    switch(type){
        case "bug":
            return "darkgreen"
        case "dark":
            return "black"
        case "dragon":
            return "turquoise"
        case "electric":
            return "yellow"
        case "fairy":
            return "#9f003b"
        case "fighting":
            return "orange"
        case "flying":
            return "#00606e"
        case "grass":
            return "green"
        case "fire":
            return "red"
        case "ghost":
            return "#2e0076"
        case "ground":
            return "#bb6700"
        case "ice":
            return "lightblue"
        case "normal":
            return "#cdcdb6"
        case "poison":
            return "#6e00d3"
        case "psychic":
            return "#e3007e"
        case "rock":
            return "#813b00"
        case "steel":
            return "#156c6c"
        case "water":
            return "blue"
        default:
            return "black"
    }
}