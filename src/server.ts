import { app as server } from "./app";
import "dotenv/config";

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
