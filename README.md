# Project Gutenberg Explorer - Backend

This is the backend of the Project Gutenberg Explorer, built with **NestJS**. It provides APIs to fetch book content and metadata from Project Gutenberg and perform text analysis using the SambaNova Cloud API.

## 🚀 Frontend Live Site Link

#### [https://gutenberg-explorer-frontend.vercel.app/](https://gutenberg-explorer-frontend.vercel.app/)

## 🚀 Features

- **Fetch Book Content**: Retrieve e-book content and metadata from Project Gutenberg.
- **Text Analysis**: Endpoints for key character extraction, language detection, sentiment analysis, and summarization using SambaNova API.
- **Configuration**: Easily manage API keys and endpoints.

## 📦 Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Axios**: For making HTTP requests to external APIs.
- **RxJS**: To work with asynchronous data streams.

## 🛠️ Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/project-gutenberg-backend.git
   cd project-gutenberg-backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables: Create a .env file in the root directory with the following variables:**

   ```bash
   SAMBANOVA_API_KEY=your_sambanova_api_key
   BASE_URL=https://api.sambanova.ai/v1
   ```

4. **Run the Server:**

   ```bash
   npm run start:dev
   ```

5. **API Endpoints:**
   - GET /book/getMetadata
   - GET /book/getContent
   - POST /text-analyzer/key-characters
   - POST /text-analyzer/language-detection
   - POST /text-analyzer/sentiment-analysis
   - POST /text-analyzer/summary

## 📚 Project Structure

- /src: Contains the main source code, including services, controllers, and configuration.
- /src/config: Configuration service for managing API keys and settings.
