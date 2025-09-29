# 🎮 Black Box Game

An interactive puzzle game where players guess what hidden functions do by testing inputs and observing outputs. Built with Express.js and Node.js for ProTech Club.

## 🎯 Game Concept

**Black Box Game** is a logic puzzle where players receive a secret function code and must determine what the function does by:
- Entering different inputs
- Observing the outputs
- Analyzing patterns to deduce the function's behavior

## ✨ Features

- **22 Hidden Functions**: From easy string manipulations to complex algorithms
- **Progressive Difficulty**: ⭐ (Easy) to ⭐⭐⭐⭐⭐ (Very Hard)
- **Interactive UI**: Real-time input testing with instant results
- **Educational Value**: Learn programming concepts through discovery
- **Clean Design**: Modern, responsive interface optimized for learning

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

## 🎮 How to Play

### Getting Started
1. Navigate to `/home` to access the main page
2. Enter an 8-character function code (e.g., `st01ln34`)
3. Click "🎮 Chơi ngay" to start the challenge
4. Test different inputs to discover what the function does!

### Game Strategy
1. **Start Simple**: Try basic inputs like `"hello"`, `"abc"`, `5`, `10`
2. **Look for Patterns**: Compare inputs and outputs to find relationships
3. **Test Edge Cases**: Try empty strings `""`, zero `0`, negative numbers
4. **Make Hypotheses**: Form theories about what the function might do
5. **Verify**: Test your hypothesis with different inputs

## 🗂️ Available Functions (22 Total)

### 🟢 Easy Level (8 functions)
- `st01ln34` - String length operations
- `mb16x002` - Basic multiplication
- `dv25by02` - Basic division
- `ev18ch02` - Even number detection
- `mn34st90` - String reversal
- `ab12dg23` - Space counting
- `ps24tr01` - Positive number check
- `qr78op56` - Number comparison

### 🟡 Medium Level (8 functions)  
- `xy9k4lm2` - Character pattern matching
- `kl56uv12` - Vowel counting
- `lg15gt05` - Length comparison
- `md23m005` - Modulo operations
- `rt12gh78` - Word counting
- `hj23df67` - Case analysis
- `dc41x002` - Character manipulation
- `cv34bn56` - Digit extraction

### 🟠 Hard Level (4 functions)
- `pl78ok90` - Position finding
- `we45ty89` - Digit mathematics
- `zx90qw34` - Palindrome detection
- `ft47cal1` - Mathematical sequences

### 🔴 Expert Level (2 functions)
- `pr48chk1` - Prime number theory
- `ui67za01` - Complex conditional logic

## 📋 Sample Test Cases

### Example: Easy Function
```
Function Code: st01ln34
Input: "hello" → Output: 5
Input: "programming" → Output: 11
Input: "" → Output: 0
Guess: This function returns string length!
```

### Example: Hard Function
```
Function Code: pr48chk1  
Input: 7 → Output: true
Input: 8 → Output: false
Input: 2 → Output: true
Input: 1 → Output: false
Guess: This function checks if a number is prime!
```

## 🏆 Learning Objectives

Playing Black Box Game helps develop:
- **Logical Thinking**: Analyze patterns and relationships
- **Problem Solving**: Form and test hypotheses
- **Programming Concepts**: Understand common algorithms
- **Debugging Skills**: Systematic testing approach
- **Pattern Recognition**: Identify computational behaviors

## 💡 Tips for Success

### For Beginners
- Start with ⭐ difficulty functions
- Try simple inputs first: `"a"`, `"ab"`, `1`, `2`
- Look for obvious patterns before complex ones
- Don't be afraid to try many different inputs

### For Advanced Players
- Jump straight to ⭐⭐⭐⭐⭐ functions for a challenge
- Test edge cases: negative numbers, empty strings, large values
- Consider mathematical concepts: prime numbers, factorials, modulo
- Think about string algorithms: palindromes, character manipulation

## 🛠️ Technical Implementation

### Project Structure
```
├── app.js              # Express server and routing
├── package.json        # Dependencies and scripts
├── Procfile           # Railway deployment config
├── public/            # Static assets
│   ├── css/           # Styling files
│   └── images/        # ProTech Club logo
├── views/             # HTML templates
│   ├── home.html      # Game entrance page
│   ├── black-box.html # Function testing interface
│   └── 404.html       # Error page
└── README.md          # This file
```

### Function Architecture
- **22 Hidden Functions**: Each with unique 8-character codes
- **Client-Side Execution**: Functions run in browser for instant feedback
- **Input Validation**: Secure handling of user inputs
- **Progressive Disclosure**: Difficulty-based function organization

## 🚀 Deployment

### Live Demo
Visit the deployed game: [Railway Deployment URL]

### Local Development
This application is configured for deployment on Railway with:
- **Procfile**: Defines start command
- **Environment Variables**: PORT configuration
- **Static Assets**: Optimized for production

### Deploy Your Own
1. Fork this repository
2. Connect to Railway
3. Deploy automatically from GitHub
4. Share with friends and colleagues!

## 🎓 Educational Use

Perfect for:
- **Programming Courses**: Teach algorithm recognition
- **Logic Classes**: Develop analytical thinking
- **Team Building**: Collaborative problem solving
- **Coding Interviews**: Practice pattern recognition
- **Student Competitions**: Gamified learning experience

## 🤝 Contributing

Want to add more functions or improve the game?
1. Fork the repository
2. Add new functions to `functionDetails` in `black-box.html`
3. Update `validCodes` arrays in both HTML files
4. Test thoroughly with edge cases
5. Submit a pull request!

## 📄 License

MIT License - Feel free to use this for educational purposes!

## 👨‍💻 Author

**IloveUhiuhiu** - Created for ProTech Club

---

**🎮 Ready to play? Start your Black Box adventure at `/home`!**
