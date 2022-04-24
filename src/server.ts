import { app as server } from "./app";
import "dotenv/config";

const port = process.env.PORT;

server.listen(3333, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
