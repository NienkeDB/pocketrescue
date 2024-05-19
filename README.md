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

1. Viewing all the Pokémon
    **Objective**
    As the owner of the garden center, you want to be able to see all the available Pokémon in the game and learn more about their characters.

    **Mechanic**
    You can view the index of all Pokémon which are extracted from the pokeapi. You are also able to click on a Pokémon to view the details.

2. Updating your inventory
    **Objective**
    Seeing which Pokémon you have adopted and which (and how many) are available for adoption. 

    **Mechanic**
    Without the catch-functionality implemented you are able to press the button 'Catch Pokémon' to get a random Pokémon that you can either label 'Personal Collection' or 'Inventory'. You will also be able to view all Pokémon in Personal Collection. In Inventory you will be able to see which ones you have caught and how many there are available.


3. Catching Pokémon
    **Objective**
    **Mechanic**
    This is done by playing a game similar to the classic 'Snake' game, but with adapted themes:

    Player: The player is represented by a human figure.
    Playing Field: The playing field is a nature area.
    Goal/Food: Instead of traditional squares, you collect pokémon that are randomly distributed across the playing field and drawn from the database.

    End of the Game
    When the game ends (game over), you receive a list of all the plants you have collected during the game. You can then choose to add these plants to your stock or place them in your personal collection.