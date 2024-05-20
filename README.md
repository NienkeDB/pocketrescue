# Cozy Garden
An MVP project for CodeOp's FSPT27. In this repository you'll find a full stack cozy game that is built using React, Node/Express, and MySQL.

# Original plan
You are the owner of a garden center. You can collect plants, handle customer requests and collect plants to stock your center.

## Changes to plan
The original API I was going to use (trefle.io / floracodex/com) only provided the scientific names of plants. Using those would eliminate half the fun so I decided to take a different route since this is a student MVP project. At first I tried to use a fruit API (fruityvice.com) but that led to an issue from the CORS policy. The main purpose of the MVP is to create a full stack app so I decided to use the Pokémon API (pokeapi.co). 

# Updated plan
You are the owner of a garden center. You can collect grass-type pokémon, handle adoption requests and catch pokémon to rehome them via your center.

## Explanation
A garden center (at least in the Netherlands) does have animals up for adoption so thinking about future updates to Cozy Garden I've decided to continue the garden center storyline. Looking at the timeline of only 2 weeks the main focus while building is as follows:

1. Viewing all the Pokémon [x]<br />
    **Objective**<br />
    As the owner of the garden center, you want to be able to see all the available Pokémon in the game and learn more about their characters.<br /><br />

    **Mechanic**<br />
    You can view the index of all Pokémon which are extracted from the pokeapi. You are also able to click on a Pokémon to view the details.<br /><br />

2. Updating your inventory & Catching Pokémon<br />
    **Objective**<br />
    Seeing which Pokémon you have adopted and which (and how many) are available for adoption. <br /><br />

    **Mechanic**<br />
    Without the catch-game implemented you are able to press the button 'Catch Pokémon' to get a random Pokémon that you can move to 'Storage'. <br /><br />


3. Adopting Pokémon<br />
    **Objective**<br />
    Taking in requests from customers who want to adopt a Pokémon.
    **Mechanic**<br />
    A random Pokémon is attached to the customer and it checks wether the 'storage' for that Pokémon !== 0. If available you can give away for adoption and the db gets updated, if not you can try again.

4. Designing the app<br />
    After all the technical things are added, it is time to design the app accordingly.
    

    # Future things
    * You will also be able to view all Pokémon in Personal Collection. In Inventory you will be able to see which ones you have caught and how many there are available.

    ## Future improvements
    * Update Single Pokemon view to one that can be referenced to at multiple points in the game. (maybe reorganizing components based on elements instead of pages)