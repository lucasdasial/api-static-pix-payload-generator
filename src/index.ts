import app from "./server";
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Sever is running on http://localhost:${port}`);
});
