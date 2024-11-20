type MenuOptions = "" | "all" | "action" | "drama" | "comedy" | "romance" | "horror";

export const createMenuObject = (activeMenu:MenuOptions)=>{
    let returnObject = {
        all: false,
        action: false,
        drama: false,
        comedy: false,
        romance: false,
        horror: false,
    }

    if(activeMenu !== ""){
        returnObject[activeMenu] = true;
    }
    return returnObject;
}