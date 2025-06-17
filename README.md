
# Drinks Management System

A simple CRUD application for managing drinks with JSON Server backend and Ant Design UI.

## Features

- ✅ Add new drinks with modal form
- ✅ View drinks in beautiful card layout
- ✅ Delete drinks with confirmation
- ✅ Volume and type selection as requested
- ✅ Success/error notifications
- ✅ Responsive design
- ✅ Clean and simple code structure

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start JSON Server
Open a new terminal and run:
```bash
npx json-server --watch db.json --port 3001
```

This will start the JSON server on `http://localhost:3001` with the sample data from `db.json`.

### 3. Start Development Server
In another terminal, run:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`.

## API Endpoints

- GET `/drinks` - Get all drinks
- POST `/drinks` - Create a new drink
- DELETE `/drinks/:id` - Delete a drink

## Data Structure

Each drink has the following fields:
- `title`: String (required)
- `company_name`: String (required)
- `price`: Number (required)
- `volume`: Number in liters (required)
- `type`: String - gazli/gazsiz/juice/water/energy (required)
- `image`: String - Image URL (optional)

## Technologies Used

- React 18
- TypeScript
- Ant Design
- JSON Server
- Axios
- Lucide React (icons)
- Tailwind CSS

## Project Structure

```
src/
├── pages/
│   └── Index.tsx          # Main drinks management page
├── main.tsx               # App entry point
└── index.css             # Global styles
db.json                   # JSON Server database
```

## Usage

1. **Adding Drinks**: Click the "Add Drink" button to open the modal form
2. **Viewing Drinks**: All drinks are displayed as cards with their information
3. **Deleting Drinks**: Click the delete button on any card and confirm
4. **Notifications**: Success/error messages appear for all operations

The app includes sample data for Fanta, Sprite, and Orange Juice to get you started!
