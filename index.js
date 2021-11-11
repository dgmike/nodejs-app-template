import { createServer } from "server";
import { appV1 } from "app-v1";

const server = await createServer();
server.use(appV1.routes())
server.use(appV1.allowedMethods())

console.info(`\n${'-'.repeat(21)} routes ${'-'.repeat(21)}`);
server.mappedRoutes().forEach(([method, path]) => console.info(` ${(method || '.').padEnd(5)} - ${path}`));
console.info('-'.repeat(50) + '\n');

const PORT = parseInt(process.env.PORT || 3000);

server.listen(3000, () => console.info(`Listening on port ${PORT}`));
