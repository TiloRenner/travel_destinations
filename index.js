const selectorsTravelDest = document.querySelectorAll(".td_selector");

const travelDestMap = new Map();

populateTDMap();



selectorsTravelDest.forEach(el =>
    {
        el.addEventListener('click', ev => 
        {
            if(ev.currentTarget.hasAttribute("data-traveldest") && (ev.currentTarget.dataset.traveldest !== undefined || ev.currentTarget.dataset.traveldest !== null) )
            {
                el_value= ev.currentTarget.dataset.traveldest;
                selectTravelDestination(el_value);
                markActiveTDSelector(ev.currentTarget);
                console.log("Value"+ el_value);

            }
            else
            {
                console.log("ERROR: No Data Attribute with traveldest or Value is null or undefined!");
                el_value= ev.currentTarget.dataset.traveldest;
                console.log(el_value);

                /*Todo? HTML marieren für debug ? */
            }
        });
    });



function selectTravelDestination(destination_name)
{
    let selected_destination = travelDestMap.get(destination_name);

    if(selected_destination !== undefined)
    {
        document.getElementById("selected_dest_name").textContent=selected_destination.name;
        document.getElementById("selected_dest_description").textContent=selected_destination.description;
        document.getElementById("selected_dest_imagepath").textContent=selected_destination.imgpath;
        return true;
    }
    else{
        console.log("Fehler: " + destination_name + " nicht in Map gefunden");
        return false;
    }


}

/* Todo refactor to take string with selectors instead of hardcoded query */
function markActiveTDSelector(active_element)
{
    /*Todo Check if too slow maybe replace with getElementsbyClassName */
    let current_active = document.querySelectorAll(".td_selector.active");
    current_active.forEach(
        el => {
            el.className = el.className.replace(" active", "");
            console.log("Active found");
        }
    );
    active_element.className += " active";
}

function populateTDMap()
{
    travelDestMap.set('Algerien', {
        name:"Algerien",
        imgpath:"images/algerien.png",
        description:"Etwas Text zu Algerien. Und so weiter und so fort."
        }
    );

    travelDestMap.set('Italien', {
        name:"Italien",
        imgpath:"images/italien.png",
        description:"Etwas Text zu Italien. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Spanien', {
        name:"Spanien",
        imgpath:"images/spanien.png",
        description:"Etwas Text zu Spanien. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Frankreich', {
        name:"Frankreich",
        imgpath:"images/frankreich.png",
        description:"Etwas Text zu Frankreich. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Niederlande', {
        name:"Niederlande",
        imgpath:"images/niederlande.png",
        description:"Etwas Text zu den Niederlanden. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );




}