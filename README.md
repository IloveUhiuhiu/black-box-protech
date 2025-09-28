# Black Box Tools

A web application that provides utility tools for developers, built with Express.js and Node.js.

## Features

- **Black Box Tool**: A utility tool provided by Protech Club
- **Simple and Clean UI**: Easy-to-use interface with responsive design
- **Fast and Lightweight**: Built with minimal dependencies for optimal performance

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Railway

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/IloveUhiuhiu/black-box-protech.git
cd black-box-protech
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
# For development
npm run dev

# For production
npm start
```

The application will run on `http://localhost:3000`

## Usage

1. Navigate to `/home` to access the main page
2. Use the Black Box tool by visiting `/black_box?code=<your-function-code>`
3. The tool will analyze and process your function code

## Project Structure

```
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── Procfile           # Railway deployment configuration
├── public/            # Static files (CSS, images)
│   ├── css/
│   └── images/
└── views/             # HTML templates
    ├── home.html
    ├── black-box.html
    └── 404.html
```

## Deployment

This application is configured for deployment on Railway. The necessary configuration files (`Procfile`, environment variables) are already set up.

## License

MIT License

## Author

IloveUhiuhiu
