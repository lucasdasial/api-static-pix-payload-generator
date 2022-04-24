import { app as server } from "./app";
import "dotenv/config";

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
