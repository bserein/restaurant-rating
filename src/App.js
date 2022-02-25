import { Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import { Layout } from "antd";
import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
          <h1 className="header-text">Restaurant Finder</h1>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/details/:id" element={<RestaurantDetails />} />
          </Routes>
        </Content>
        <Footer style={{textAlign: 'center'}}>
        &copy; 2022, Brian's Restaurant Finder
        </Footer>
      </Layout>
    </>
  );
}

export default App;
