import { app as server } from "./app";

server.listen(3000, () => {
  console.log("server rodando em http://localhost:3000/");
});
