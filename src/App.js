import Background from "./components/elements/background";
import CTA from "./components/layouts/callToAction";
import Container from "./components/layouts/container";
import ContractLinks from "./components/layouts/contractLinks";
import Footer from "./components/layouts/footer";
import Social from "./components/layouts/social";
import WaifuLayout from "./components/layouts/waifuLayout";

function App() {
  return (
    <div className="w-full min-h-full h-screen table text-bordergray items-center">
      <div className="table-row-group">
        <div className="table-row">
          <Background />
          <ContractLinks />
          <Container>
            <WaifuLayout />
            <CTA />
            <Social />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
