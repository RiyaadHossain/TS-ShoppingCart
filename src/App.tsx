import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
