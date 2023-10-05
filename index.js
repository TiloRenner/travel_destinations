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
        /*document.getElementById("contentrow").style.backgroundImage = "url('images/svg/swe.svg')";
        document.getElementById("contentrow").style.backgroundSize = "cover";
        document.getElementById("contentrow").style.backgroundRepeat = "no-repeat";
        document.getElementById("contentrow").style.backgroundBlendMode = "screen";*/
        document.getElementById("selected_dest_tagline").textContent=selected_destination.tagline;
        document.getElementById("selected_dest_description").textContent=selected_destination.description;
        document.getElementById("selected_dest_imagepath").src=selected_destination.imgpath;
        document.getElementById("selected_dest_imagepath").style.opacity ="1";
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
    travelDestMap.set('Schweden', {
        name:"Schweden",
        flagpath:"images/svg/swe.svg",
        imgpath:'            <img src="images/schweden_800px.jpg" alt="country image">',
        tagline:"Etwas Text zu Algerien. Und so weiter und so fort.",
        description:"Etwas mehr Text zu Algerien. Und so weiter und so fort."
        }
    );

    travelDestMap.set('Italien', {
        name:"Italien",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/italien.png",
        tagline:"Etwas Text zu Italien. Und so weiter und so fort.",
        description:"Etwas mehr Text zu Italien. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Spanien', {
        name:"Spanien",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/spanien.png",
        tagline:"Etwas Text zu Spanien. Und so weiter und so fort.",
        description:"Etwas mehr Text zu Spanien. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Frankreich', {
        name:"Frankreich",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/frankreich.png",
        tagline:"Etwas Text zu Frankreich. Und so weiter und so fort.",
        description:"Etwas mehr Text zu Frankreich. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );
    travelDestMap.set('Niederlande', {
        name:"Niederlande",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/niederlande.png",
        tagline:"Etwas Text zu den Niederlanden. Und so weiter und so fort.",
        description:"Etwas mehr Text zu den Niederlanden. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );

    travelDestMap.set('Neuseeland', {
        name:"Neuseeland",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/schweden_800px.jpg",
        tagline:"Etwas Text zu Neuseeland. Und so weiter und so fort.",
        description:"Etwas mehr Text zu Neuseeland. Wetter, Essen Sehenswürdigkeiten und so weiter und so fort."
        }
    );




}