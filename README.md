# Backend - Japanese Cuisine Application  
**Created by [Your Name]**

This is the backend of the Japanese Cuisine Application, built to provide data and API endpoints for the frontend. The backend serves details about various Japanese dishes, ensuring a smooth and dynamic user experience.

---

## Features  
- **Node.js Server**: Lightweight, fast, and scalable backend using Express.js.  
- **Hardcoded API Endpoints**: Data is stored directly in the backend code, avoiding the need for a database.  
- **CORS Support**: Allows secure communication with the frontend.  
- **Axios Integration**: Seamlessly connects the backend with frontend components.  
- **Well-Structured API**: Serves cuisine data in JSON format for optimal performance.

---

## Technologies Used  
- **Node.js**  
- **Express.js**  
- **Axios** (for frontend communication)  
- **JavaScript**  

---

## API Endpoints  
### 1. **GET** `/api/cuisine`  
- **Description**: Fetches a list of popular Japanese dishes.  
- **Response Example**:  
```json
[
  {
    "id": 1,
    "name": "Sushi",
    "description": "Vinegared rice paired with seafood and vegetables.",
    "imageUrl": "https://example.com/sushi.jpg"
  },
  {
    "id": 2,
    "name": "Ramen",
    "description": "Savory noodle soup served with various toppings.",
    "imageUrl": "https://example.com/ramen.jpg"
  }
]
```

## How to Run the Backend

- **Prerequisites** 
	1.	Install Node.js on your machine.
	2.	Use a text editor or IDE (e.g., VSCode).

- **Steps** 
	1.	Clone the repository:
        git clone <repository-link>
    2.	Navigate to the backend folder:
        cd backend
	3.	Install dependencies:
        npm install
	4.	Start the server:
        node server.js
	5.	The server runs at http://localhost:5000/5001.

## Project Structure

backend/
│
├── api.js                # Contains the API logic with hardcoded data
├── server.js             # Main server file
└── package.json          # Dependencies and scripts

## Future Improvements

	•	Integrate a database (e.g., MongoDB or PostgreSQL) for dynamic data.
	•	Add user authentication and personalized features.
	•	Enhance error handling and validation.

## Author

Developed with ❤️ by Matteo Fernando.



## About Me !!

My name is Matteo Fernando, and I am 14 years old and I’m an enthusiastic coder with dreams of one day becoming a world-renowned software engineer. I envision using technology to make a significant, positive impact on the world. Although I am currently in high school and just beginning this exciting journey, I am incredibly motivated and eager to learn. Each line of code I write and every project I complete brings me one step closer to achieving my aspirations. In just two years, I will officially embark on this path, fully committed to transforming my passion into a powerful tool for change and innovation. The road may be long, but I am thrilled about the journey ahead and determined to make a difference.
