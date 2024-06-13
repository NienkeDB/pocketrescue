# Pocket-Rescue-feature extension

A feature extention project for CodeOp's FSPT27. In this repository, you'll find a full-stack cozy game that is built using React, Node/Express, and MySQL.

## About

You are the owner of a rescue center for wild Pokémon. You can collect grass-type Pokémon, handle adoption requests, and rescue Pokémon to rehome them via your center.

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

## How To Run

- Run `npm install axios` in the project folder of this repository if it isn't already installed.
- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'pokemon' in your database.
- Run `npm run import-pokemon` in the project folder of this repository. This will import all the data from the API.
- Make sure you understand how the `pokemon` table is constructed. In your MySQL console, you can run `use pocketrescue;` and then `describe pokemon;` to see the structure of the pokemon table.

## Development

- Run `npm run start` in project directory to start the Express server.
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

## Version 1.1

This is

## Future opportunities

- Implement a game feature for the rescuing of Pokemon - e.g. based on snake or battlefield
- Implement a gamification element like earning awards or coins - e.g. first rescue, first adoption, 10th adoption, 10th rescuing of a specific pokemon
- Include other Pokemon types
- Upgrade the Adoption View screen - e.g. animate it; give each pokemon its own space (like a zoo)
- Make a puzzle game of rehoming - similar to gameplay of Strange Horticulture (customer describes certain features of a pokemon and you have to try and figure out which pokemon they need)
- Implement features to add rare and more common pokemon (upgrading the randomizer)
- Implement special adoption requests that pop-up - e.g. adopting multiple pokemon, looking for rare pokemon, earning extra coins when fulfilling the request right away
