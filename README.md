# Pocket rescue
An MVP project for CodeOp's FSPT27. In this repository you'll find a full stack cozy game that is built using React, Node/Express, and MySQL.

# About
You are the owner of a rescue center for wild Pokémon. You can collect grass-type pokémon, handle adoption requests and rescue Pokémon to rehome them via your center.

## Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called pocketrescue: `create database pocketrescue`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=pocketrescue
  DB_PASS=YOURPASSWORD
```

- Run `npm install axios` in the project folder of this repository if it isn't already installed.
- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'pokemon' in your database.
- Run `npm run import-pokemon` in the project folder of this repository. This will import all the data from the API.
- Make sure you understand how the `pokemon` table is constructed. In your MySQL console, you can run `use pocketrescue;` and then `describe pokemon;` to see the structure of the pokemon table.

## Development

- Run `npm run start` in project directory to start the Express server.
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

# Version 1.0
Looking at the timeline of only 2 weeks the main focus while building is as follows:

1. Viewing all the Pokémon <br />
    **Objective**<br />
    As the owner of the rescue center, you want to be able to see all the available Pokémon in the game and learn more about their characters.<br /><br />

    **Mechanic**<br />
    You can view the index of all Pokémon which are extracted from the pokeapi. You are also able to click on a Pokémon to view the details.<br /><br />

2. Updating your inventory & Rescuing Pokémon<br />
    **Objective**<br />
    Seeing which Pokémon you have rescued and which (and how many) are still available for adoption. <br /><br />

    **Mechanic**<br />
    You are able to press the button 'Rescue Pokémon' to 'catch' a random Pokémon (pokemon_id) that gets a +1 in their storage column. <br /><br />


3. Adopting Pokémon<br />
    **Objective**<br />
    Taking in requests from customers who want to adopt a Pokémon.<br />
    **Mechanic**<br />
    A random Pokémon is attached to the customer and it checks wether the 'storage' for that Pokémon !== 0. If available you can give away for adoption and the db gets updated, if not you can try again.<br /><br />

4. Designing the app<br />
    After all the technical things are added, it is time to design the app accordingly.
    

# Future opportunities
    - Implement a game feature for the rescuing of Pokemon - e.g. based on snake or battlefield
    - Implement a gamification element like earning awards or coins - e.g. first rescue, first adoption, 10th adoption, 10th rescuing of a specific pokemon
    - Include other Pokemon types
    - Upgrade the Adoption View screen - e.g. animate it; give each pokemon its own space (like a zoo)
    - Make a puzzle game of rehoming - similar to gameplay of Strange Horticulture (customer describes certain features of a pokemon and you have to try and figure out which pokemon they need)
    - Implement features to add rare and more common pokemon (upgrading the randomizer)
    - Implement special adoption requests that pop-up - e.g. adopting multiple pokemon, looking for rare pokemon, earning extra coins when fulfilling the request right away
