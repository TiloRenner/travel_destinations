const selectorsTravelDest = document.querySelectorAll(".td_selector");

const TravelDestMap = new Map();




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

                /*Todo HTML marieren für debug ? */
            }
        });
    });

function selectTravelDestination(destination_name)
{
    document.getElementById("dest_description").textContent=destination_name;

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