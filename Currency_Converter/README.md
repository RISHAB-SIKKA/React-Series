💰 Currency Converter App

📌 Overview

The Currency Converter App is a web-based application built using React.js that allows users to convert currencies in real-time. It leverages the ExchangeRate API to fetch the latest exchange rates and provides an intuitive UI for users to input amounts and swap currencies.

🚀 Features

✅ Convert between multiple international currencies.

✅ Fetches real-time exchange rates from ExchangeRate API.

✅ Swap currencies with a single click.

✅ Stores user preferences using localStorage for a seamless experience.

✅ Fully responsive UI designed with Tailwind CSS.

✅ Error handling for API failures.

✅ Supports a wide range of currencies.

✅ Optimized for performance and usability.

🛠️ Tech Stack

React.js - Frontend framework.

Tailwind CSS - For styling the UI.

ExchangeRate API - Provides real-time currency exchange rates.

LocalStorage - Stores user preferences.

JavaScript (ES6+) - Core programming language.

📂 Project Structure

/currency-converter-app
│── /src
│   │── /components
│   │   ├── InputBox.jsx  # Reusable input field component
│   │── /hooks
│   │   ├── useCurrencyInfo.js  # Custom hook for fetching currency data
│   │── App.jsx  # Main application component
│   │── index.js  # Entry point of the app
│── public/  # Static files
│── package.json  # Project dependencies
│── README.md  # Documentation
│── .gitignore  # Git ignore file
│── tailwind.config.js  # Tailwind configuration
│── vite.config.js  # Vite configuration for fast builds

🔧 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/RISHAB-SIKKA/currency-converter.git
cd currency-converter

2️⃣ Install dependencies

npm install

3️⃣ Start the development server

npm run dev

4️⃣ Build for production

npm run build

5️⃣ Run the production build

npm start


⚡ API Used

This app fetches real-time exchange rates from:
🔗 ExchangeRate API

🔥 How It Works

Enter the amount in the From field.

Select the currency you want to convert From and To.

Click on the Convert button to get the latest exchange rate.

Click on the Swap button to switch between selected currencies.

The converted amount appears in the To field.

🚀 Future Enhancements

🌟 Implement caching for faster data retrieval.

🌟 Add historical exchange rate graphs.

🌟 Introduce multi-currency conversion support.

🌟 Improve UI with better animations and transitions.

🌟 Implement user authentication to save favorite currency pairs.

🤝 Contributing

Contributions are welcome! If you’d like to improve the project, feel free to fork this repository, open issues, and submit pull requests.

📝 License

This project is licensed under the MIT License.

🌟 Show your support!

⭐ If you like this project, give it a star on GitHub!

Happy Coding! 🚀