Project Structure:

caching-proxy/
│
├── bin/
│   └── caching-proxy     # CLI executable file
│
├── src/
│   ├── args.js           # Parses CLI arguments
│   ├── cache.js          # In-memory cache logic
│   └── server.js         # Core proxy server
│
├── package.json
└── README.md


Installation

Clone the repository:

  git clone https://github.com/<your-username>/caching-proxy
  cd caching-proxy
  npm install

#Link the CLI tool globally:

  npm link


# Now the command caching-proxy will work anywhere on your system.

🚀 Usage
#Start the proxy server
  caching-proxy --port 8080 --origin https://dummyjson.com

👨‍💻 Technologies Used

  Node.js (http module)
  ES Modules
  node-fetch
  CLI argument parsing using custom logic
