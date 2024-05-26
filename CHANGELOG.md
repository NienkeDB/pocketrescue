# Change Log
* 26/05/2024
    * Fixed issues with increasing and decreasing Pokémon when catching & adopting
    * Added munro font from `https://www.fontsquirrel.com/fonts/Munro`
    * Added styling
    * Started cleaning the code

* 21/05/2024
    * Improved Router use after class instructions
    * Updated SinglePokemon.jsx to work as a seperate component

* 20/05/2024
    * Moved Random Pokemon function to separate component so it can be used in multiple components
    * Added 'adopt' function
    * Implemented useNavigate from React Router

* 20/05/2024
    * Added function to auto update 'caught' when Pokémon gets caught
    * Added function to +1 the storage when pressing button after catching a Pokémon
    * Finished `2. Updating your inventory`

* 19/05/2024
    * Fixed menu navigating to current page using useLocation hook in React Router
    * Implemented Axios
    * Added an `importPokemon.js` script based on database.js to import all Pokémon names and ids from the API into db `cozygarden`
    * Added API routes for GET
    * Changed getting Pokémon from API to getting Pokémon from db in `PokemonList.jsx`
    * Updated fetching data from API in `SinglePokemon.jsx`

* 19/05/2024
    * Fixed missing setup files
    * Organised app in folders within `/src`
    * Implemented React Routers for menu purposes
    * Added `1. Viewing all the Pokémon` using only API, no db connection yet

* 16/05/2024
    * Initial setup