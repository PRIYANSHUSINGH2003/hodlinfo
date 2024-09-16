# Crypto Price Tracker

Crypto Price Tracker is a responsive web application that fetches cryptocurrency prices from an API and displays them in a professional and visually appealing layout. It showcases platform-specific data like the last traded price, buy/sell prices, difference, and savings. The app is designed to be mobile, tablet, and laptop-friendly.

## Features

- **Responsive Design:** Works smoothly on mobile, tablet, and desktop devices.
- **API Integration:** Fetches top cryptocurrency data from the WazirX API.
- **Data Table:** Displays platform, last traded price, buy/sell price, difference, and savings in an organized table format.
- **Professional Styling:** Dark-themed UI with modern hover effects, color combinations, and consistent typography.
- **Best Price Highlight:** Emphasizes the best price available with distinct styling for easy user recognition.
- **Dynamic Data Insertion:** Automatically updates the table with the latest fetched data.

## Tech Stack

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MySQL

- **API:**
  - WazirX API

## Installation

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- MySQL

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   ```

2. Navigate into the project directory:
   ```bash
   cd crypto-price-tracker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up your MySQL database and create a `.env` file in the project root with the following configuration:
   ```bash
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   ```

5. Run the backend server:
   ```bash
   node server.js
   ```

6. Open the project in your browser:
   ```bash
   http://localhost:3000
   ```

## Usage

The application fetches cryptocurrency data and displays the top 10 results in a responsive table format. The best price for each cryptocurrency is highlighted for easy recognition.

## Responsive Design

- **Mobile View:** The table and information sections are optimized to fit smaller screens, ensuring the user experience remains smooth and accessible.
- **Tablet View:** Adjusts the layout and font sizes to provide a balanced experience.
- **Desktop View:** Offers a full-size table and broader view of the data with additional padding and margins for a professional look.

## Screenshots

![Screenshot 2024-09-16 192711](https://github.com/user-attachments/assets/d2d5f1c1-80fb-411d-8f3f-87819c5f5b5f)
*Responsive layout for desktop.*

![Screenshot 2024-09-16 194200](https://github.com/user-attachments/assets/290f89d7-6402-4abe-9525-c37bb9cce3fa)
*Compact layout for mobile.*

![Screenshot 2024-09-16 194212](https://github.com/user-attachments/assets/c7635ac1-d366-4b8f-a1ff-7948fd6c23aa)
*Compact layout for tablet.*

## API

This project integrates with the WazirX API to fetch real-time cryptocurrency data. For more information on the API, visit [WazirX API Documentation](https://docs.wazirx.com/).

## Contributing

Contributions are welcome! If you'd like to enhance or fix any issues, feel free to open a pull request. Make sure your code is well-documented and follows the project's style guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```

### Key Sections:
1. **Project Overview**: Brief description of the project, its features, and purpose.
2. **Tech Stack**: Technologies used in the project.
3. **Installation Guide**: Steps for setting up the project locally, including database configuration.
4. **Usage**: How the project functions and how to access the application.
5. **Responsive Design**: Details of the responsive behavior for mobile, tablet, and desktop views.
6. **API Integration**: Information about the API used to fetch cryptocurrency data.
7. **Screenshots**: A placeholder section to add screenshots showing different views (mobile, tablet, desktop).
8. **Contributing**: Guidelines for contributing to the project.
9. **License**: Licensing information for the project.
