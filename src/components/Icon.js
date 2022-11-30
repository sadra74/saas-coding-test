import React from "react";
import '../css/Icon.css'

export function Icon({kids, open}) {
    return (<>
        {kids?.length > 0 && !open && <span>&#11166;</span>}
        {kids?.length > 0 && open && <span>&#11167;</span>}
        {!kids && <span>&nbsp;&nbsp;&nbsp;</span>}
    </>);

}