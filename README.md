# Personal-Website

This project is my personal website that displays information about myself, my projects, and my resume. It was built using the Next.js framework with TypeScript in addition to React.js, MongoDB, and Node.js

### Complete the following instructions to run the project locally

After downloading or cloning the repository, add a file in the root directory of the project named `.env.local` and add the following line: `DB_URI=<yourMongoDbURI>`.

If you want to run the project using Node.js, complete the following steps.

1. Run the command `npm install` to download all of the project dependencies.
2. To run a development server, run the following command: `npm run dev`. Otherwise, to run a deployment server, run `npm run build` followed by `npm run start`.
3. Once the server is up and running, go to <em>localhost:3000</em> to see the website.

If you want to run the project using Docker, complete the following steps.
1. Run the command `docker build . -t personal-website` to build the image.
2. Run the command `docker run -p 3000:3000 -d personal-website` to run the server.
3. Go to <em>localhost:3000</em> to see the website.