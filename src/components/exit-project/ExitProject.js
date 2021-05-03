import React, {useContext} from 'react';
import {ProjectContext} from "../../context/ProjectContext";
import Button from "../button/Button";

//na afsluiten moeten wijzigingen worden opgeslagen
function ExitProject() {
    const { exit } = useContext(ProjectContext);

    return (
            <Button
            text="exit project"
            type="button"
            //dat met event moest, anders werkte het niet. Zie link in algemene notities
            //werkt nu wel pas na een F5.
            onClick={(e)=>exit(e)}
            />
    );
}

export default ExitProject;