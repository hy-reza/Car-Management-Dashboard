<div id="top"></div>

<br />
<div align="center">
    <img src="views/assets/doc/logo_rm.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Challenge 5 Binar Fullstack Web</h3>

  <p align="center">Car Management Dashboard</p>
</div>

<!-- ABOUT THE PROJECT -->


### Built With

- ExpressJS
- Bootstrap
- Sequelize
- Postgres

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hy-reza/Car-Management-Dashboard.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Next Step

   ```sh
   - setting config.js / .env
   - npx sequelize db:create
   - npx sequelize db:migrate
   - npx sequelize db:seed:all
   ```

4. Run
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Info

### Api Routes
- Get all cars : GET <code>/api/vi/cars/</code>
- Create a car : POST <code>/api/vi/cars/</code>
- Update a car : PUT <code>/api/vi/cars/:id</code>
- Delete a car : DELETE <code>/api/vi/cars/:id</code>

### Page Routes
- Get Dashboard Page : GET <code>/</code>
- Get Cars Page      : GET <code>/cars</code>
- Get Add Cars Page  : GET <code>/addCars</code>
- Get Update Cars Page : GET <code>/editCars/:id</code>

<p align="right">(<a href="#top">back to top</a>)</p>