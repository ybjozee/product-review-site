import Products from "./components/Products";
import ProductReviewForm from "./components/ReviewForm";
import ProductReviews from "./components/reviews/Reviews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => (
  <Router>
    <Menu />
    <div
      style={{
        padding: "2%",
      }}
    >
      <Switch>
        <Route path="/" exact>
          <ProductReviews />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/review">
          <ProductReviewForm />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
