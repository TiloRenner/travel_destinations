const selectorsTravelDest = document.querySelectorAll(".td_selector");

selectorsTravelDest.forEach(el =>
    {

        el.addEventListener('click', ev => 
        {
            if(ev.currentTarget.hasAttribute("value") && (ev.currentTarget.value !== undefined || ev.currentTarget.value !== null) )
            {
                el_value= ev.currentTarget.value;
                selectTravelDestination(el_value);
                console.log("Value"+ el_value);
            }
            else
            {
                console.log("ERROR: No Value Attribute or Value is null or undefined!");
            }





        });


    });


document.getElementById("dest_description").textContent="test";


function selectTravelDestination(destination_name)
{
    document.getElementById("dest_description").textContent=destination_name;

}