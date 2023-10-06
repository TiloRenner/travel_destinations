let selectedCountry = "";
const selectorsTravelDest = document.querySelectorAll(".td_selector");
const travelDestMap = new Map();
populateTDMap();
selectTravelDestination("Neuseeland");
document.querySelector('.sharecountry').addEventListener('click', () => {alert("Teile Infos über" + selectedCountry);});

selectorsTravelDest.forEach(el =>
    {
        el.addEventListener('click', ev => 
        {
            if(ev.currentTarget.hasAttribute("data-traveldest") && (ev.currentTarget.dataset.traveldest !== undefined || ev.currentTarget.dataset.traveldest !== null) )
            {
                el_value= ev.currentTarget.dataset.traveldest;
                selectTravelDestination(el_value);
            }
            else
            {
                console.log("ERROR: No Data Attribute with traveldest or Value is null or undefined!");
            }
        });
    });

document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    let searchedCountry = ev.target.elements.searchterm.value;
    if (searchedCountry) {

        if(selectTravelDestination(searchedCountry))
        {
        document.getElementById('div_id').scrollIntoView();
        }
        else
        {
            window.alert(searchedCountry + " wurde leider nicht gefunden.");
        }
    }
    else{
        window.alert("Bitte geben sie einen Suchbegriff ein.");
    }
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
        selectedCountry=destination_name
        return true;
    }
    else{
        console.log("Fehler: " + destination_name + " nicht in Map gefunden");
        return false;
    }


}

/* Todo refactor to take string with selectors instead of hardcoded query? */
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
        imgpath:"images/schweden_800px.jpg",
        tagline:"Spiel aus Insel und Seen",
        description:"Schweden ist ein skandinavisches Land mit Tausenden der Küste vorgelagerten Inseln und Seen im Landesinnern sowie großen Nadelwäldern und Gletscherbergen. Die größten Städte, wie die Hauptstadt Stockholm im Osten und Göteborg und Malmö im Südwesten, liegen alle an der Küste. Stockholm wurde auf 14 Inseln errichtet, hat mehr als 50 Brücken und besitzt die mittelalterliche Altstadt Gamla Stan, Königspaläste und Museen wie das Freiluftmuseum Skansen."
        }
    );

    travelDestMap.set('Algerien', {
        name:"Algerien",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"https://supertest.de/media/b78/ab/constantine-algerien.detail_2x.webp",
        tagline:"Große Geschichte am Mittelmeer",
        description:"Algerien ist ein nordafrikanisches Land, dessen Küste durch das Mittelmeer begrenzt wird und dessen Landesinneres zur Sahara gehört. Viele Reiche haben hier ihre Spuren hinterlassen, etwa die altrömischen Ruinen im Küstenstädtchen Tipaza. In der Hauptstadt Algier bestimmen markante Gebäude aus der osmanischen Zeit, wie die ungefähr aus dem Jahr 1612 stammende Ketchaoua-Moschee, das auf einem Hügel gelegene Altstadtviertel Kasbah mit seinen engen Gassen und Treppen."
        }
    );
    travelDestMap.set('Griechenland', {
        name:"Griechenland",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"images/griechenland_800px.jpg",
        tagline:"Antike und Insel-Hopping",
        description:"Griechenland ist ein Staat in Südosteuropa, der Tausende Inseln im Ägäischen und Ionischen Meer umfasst. Aufgrund seiner einflussreichen Rolle in der Antike wird Griechenland oft als Wiege der westlichen Zivilisation bezeichnet. Die griechische Hauptstadt Athen beherbergt Wahrzeichen wie die Akropolis, eine Stadtfestung aus dem 5. Jh. v. Chr. mit dem Parthenon-Tempel. Griechenland ist auch ein bekanntes Reiseziel für Strandurlaube – vom schwarzen Sand auf Santorin bis zur Partyszene auf Mykonos."
        }
    );
    travelDestMap.set('Frankreich', {
        name:"Frankreich",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"https://images.ctfassets.net/rc3dlxapnu6k/4qhCSGgWU4l87x1Q8i0vts/b2c0f9361ec4a441e5476d19b3434ea5/iStock-1398324421.jpg?w=2121&h=1193&fl=progressive&q=50&fm=jpg",
        tagline:"Raffinierte Kost und großartige Geschichte",
        description:"Frankreich im Westen Europas ist ein Land mit mittelalterlichen Städten, Bergdörfern und Mittelmeerstränden. Die Hauptstadt Paris gilt als erstrangiges Mode- und Kulturzentrum. Neben klassischen Kunstmuseen wie dem Louvre befinden sich hier auch Wahrzeichen wie der Eiffelturm. Das Land ist außerdem bekannt für seine Weine und die raffinierte Küche. Uralte Malereien in der Höhle von Lascaux sind Zeugnisse der reichen französischen Geschichte, ebenso wie das römische Theater in Lyon oder das prunkvolle Schloss Versailles."
        }
    );
    travelDestMap.set('Niederlande', {
        name:"Niederlande",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:"https://image.geo.de/30833876/t/-o/v3/w1440/r1.5/-/enkhuizen-a--356431172.jpg",
        tagline:"Kunst, Kultur und das Meer",
        description:'Die Niederlande liegen im Nordwesten Europas und sind bekannt für ihre flache Landschaft, die von Kanälen, Tulpenfeldern, Windmühlen und Radwegen durchzogen ist. In der Hauptstadt Amsterdam befinden sich das Rijksmuseum, das Van-Gogh-Museum und das Anne-Frank-Haus. In diesem Versteck schrieb das jüdische Mädchen im 2. Weltkrieg sein berühmtes Tagebuch. Vom "Goldenen Zeitalter" der Stadt im 17. Jh. zeugen prächtige Stadthäuser an den Grachten und zahlreiche Werke von Künstlern wie Rembrandt oder Vermeer.'
        }
    );

    travelDestMap.set('Neuseeland', {
        name:"Neuseeland",
        flagpath:"images/svg/schweden_800px.png",
        imgpath:'https://viel-unterwegs.de/wp-content/uploads/2022/04/neuseeland-sehenswuerdigkeiten.jpg',
        tagline:"Vulkane und Gletscher im Pazifik",
        description:'Neuseeland liegt im Südwestpazifik und besteht aus 2 Hauptinseln, die beide durch Vulkane und Vergletscherung geprägt sind. Die Hauptstadt Wellington auf der Nordinsel ist Sitz des großen Nationalmuseums Te Papa Tongarewa. Der spektakuläre Mount Victoria in Wellington sowie die Regionen Fiordland und Southern Lakes auf der Südinsel dienten in der "Herr der Ringe"-Trilogie von Filmemacher Peter Jackson als Kulisse für Tolkiens mythische Mittelerde.'
        }
    );
}