# Period 4 Project

This project consists of a **back-end** (NestJS, PostgreSQL, Cloudinary integration) and a **front-end** (React Native/Expo with NativeWind and Gluestack UI).

---

## Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for front-end)
- PostgreSQL database (local or cloud, e.g. Railway)

---

## 1. Clone the Repository
```sh
git clone <your-repo-url>
cd period-4
```

---

## 2. Back-end Setup

### a. Install dependencies
```sh
cd back-end
npm install
```

### b. Environment Variables
Create a `.env` file in the `back-end` directory:
```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### c. Run Migrations (if using Prisma)
```sh
npx prisma migrate deploy
```

### d. Start the Back-end
```sh
npm run start:dev
```
- The API will run on [http://localhost:4000](http://localhost:4000) by default.

---

## 3. Front-end Setup

### a. Install dependencies
```sh
cd ../front-end
npm install
```

### b. Start the Expo App
```sh
npx expo start
```
- Use the Expo Go app or an emulator to run the app.

---

## 4. Features
- **Wardrobe:** Add, view, and manage clothing items (with local images or uploads)
- **AI Generator:** Randomly generate outfits from assets
- **Image Upload:** (Back-end) Upload images to Cloudinary (see `/upload/image` endpoint)

---

## 5. Useful Scripts
- `npm run start:dev` (back-end): Start NestJS in watch mode
- `npx expo start` (front-end): Start Expo dev server

---

## 6. Troubleshooting
- Ensure your `.env` file is present and correct in `back-end/`
- Restart the server after changing environment variables
- For image picker features, test on a real device or emulator with media access

---

## 7. Project Structure
```
period-4/
  back-end/    # NestJS API, Prisma, Cloudinary
  front-end/   # Expo React Native app
```

---