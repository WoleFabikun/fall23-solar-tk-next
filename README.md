# Green Thumb Guide

Green Thumb Guide is a full-stack application designed to help plant enthusiasts access personalized plant care advice and video recommendations. By leveraging cutting-edge technologies such as Next.js, TypeScript, Flask, VideoDB, VideoDBRetriever, and a Retrieval-Augmented Generation (RAG) pipeline with LlamaIndex, the application provides a seamless user experience and delivers accurate, tailored information to users.

This project serves as a proof of concept for adapting RAG models to video content. With this repository and your own VideoDB API key, you can upload any videos of your choice and create your own personalized video retrieving bot. The application demonstrates how RAG models can be effectively utilized to retrieve and present relevant video content based on user queries, enhancing the overall user experience.

## Features

- Personalized plant care advice based on user input
- Semantic search and retrieval of relevant video content
- Retrieval-Augmented Generation (RAG) pipeline for enhanced query understanding
- Scalable and modular architecture for future growth and feature enhancements

## Tech Stack

- **Frontend**: Next.js, TypeScript
- **Backend**: Flask
- **Database**: VideoDB
- **Search and Retrieval**: VideoDBRetriever, LlamaIndex
- **Architecture**: RAG pipeline

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- Python (v3.7 or above)
- Bun (optional, for faster installation and bundling)

### Installation

```bash
git clone https://github.com/YourUsername/green-thumb-guide.git
cd green-thumb-guide
cd client
//(or npm)
bun install 
cd ../server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```


Set up environment variables:

- Create a `.env` file in the root directory
- Add the required environment variables. You will need an [OPENAI api key](https://openai.com/blog/openai-api) and a [VideoDB api key](https://videodb.io/)

Start the development server:

Be sure to have the flask backend running.
```bash
// (or npm run dev)
bun dev 
```
Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive messages
4. Push your changes to your forked repository
5. Submit a pull request to the main repository

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, suggestions, or feedback, please feel free to reach out:

- Email: wole359@gmail.com
