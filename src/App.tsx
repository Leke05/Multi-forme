import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProfileForm from "./component/profile/ProfileForm";
import SharedLayout from "./component/globalcomponent/SharedLayout";
import Sumarry from "./component/page/summary/Sumarry";
import Plan from "./component/page/Plan";
import Subscription from "./component/page/subscription/Subscription";
import Thanks from "./component/page/last/Thanks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ProfileForm />} />
          <Route path="selected-plan" element={<Plan />} />
          <Route path="add-on" element={<Subscription />} />
          <Route path="summary" element={<Sumarry />} />
          <Route path="last-page" element={<Thanks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
