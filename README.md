

# SmartServ-Q4 Dashboard

This project comprises a login page and a dashboard displaying various company metrics using HTML, CSS, and Chart.js for data visualization.

## Table of Contents
- [Demo](#demo)
- [Login Page](#login-page)
- [Dashboard Metrics](#dashboard-metrics)
- [Chart Data](#chart-data)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

Explore the live demo [here](https://iamshivanshyadav.github.io/SmartServ-Q4/) to see the dashboard in action.

## Login Page

The `index.html` file represents the login page where users can enter their credentials.

- Username: Accepts valid email format.
- Password: Must contain at least one uppercase letter, one number, and only '@' as a special character.

## Dashboard Metrics

The `dashboard.html` showcases various company metrics through cards and charts.

### Cards Displayed
- Total Revenue
- Total Jobs Avg
- Ticket Created
- Ticket Scheduled
- Outstanding Amount
- Memberships Sold
- Jobs Completed
- Total Canceled

### Charts
- **Revenue by Job Location**: Bar chart displaying revenue in various locations.
- **Revenue by Job Type**: Bar chart representing revenue based on job types.

## Chart Data

Chart.js library is used to render the charts. Chart data is statically defined within the `myscript.js` and `script2.js` files. Feel free to modify these files to represent dynamic data from APIs or databases.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/iamshivanshyadav/SmartServ-Q4.git
    ```

2. Navigate to the project directory:

    ```bash
    cd SmartServ-Q4
    ```

## Usage

Open `index.html` in a web browser to access the login page. Upon successful login, you'll be redirected to the `dashboard.html` displaying company metrics and charts.

## Contributing

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

