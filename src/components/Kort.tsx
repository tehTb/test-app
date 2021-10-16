import React from "react"
import {Kortfärg} from "../enums/Kortfärg";

interface KortProps{
    header?: string;
    headerlogo?: string;
    content?: any;
    färg?: Kortfärg;
}

export const Kort: React.FC<KortProps> = ({content, header, färg, headerlogo}) => {

    const classString = färg === undefined ? "my-card" : "my-card-"+färg;
    
    return(
    <>
    <div className={classString}>
        {header === undefined ? "" : 
            <div className={"my-card-header"}>
                {headerlogo === undefined ? "":<img src={headerlogo} alt={"logo"} width={40} height={40} style={{marginRight: "5px"}}/>}
                {header}
            </div>
        }
        <div className={"my-card-content"}>{content}</div>
    </div>
    </>
    );
}