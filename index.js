import { createServer } from "server";

const server = await createServer();

const PORT = parseInt(process.env.PORT || 3000);

server.listen(3000, () => console.info(`Listening on port ${PORT}`));
