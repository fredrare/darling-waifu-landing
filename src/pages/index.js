import React from "react";
import { graphql } from "gatsby";
import "../assets/css/index.css";
import Background from "../components/elements/background";
import CTA from "../components/layouts/callToAction";
import Container from "../components/layouts/container";
import ContractLinks from "../components/layouts/contractLinks";
import Footer from "../components/layouts/footer";
import Social from "../components/layouts/social";
import WaifuLayout from "../components/layouts/waifuLayout";
import favicon from "../assets/vector/isologo.svg";
import { Helmet } from "react-helmet";
import OSTPlayer from "../components/elements/ost";

const Index = ({
  data: {
    waifus,
    site: { background },
  },
}) => {
  return (
    <div className="w-full min-h-full h-screen table text-bordergray items-center font-baloo">
      <Helmet defer={false}>
        <html lang="en" amp />
        <title>Darling Waifu</title>
        <meta name="icon" href={favicon} />
        <meta name="description" content="Darling Waifu - NFT Game" />
      </Helmet>
      <div className="table-row-group">
        <div className="table-row">
          <Background background={background.img} />
          <ContractLinks />
          <Container>
            <WaifuLayout waifus={waifus.edges} />
            <CTA />
          </Container>
          <Social />
          <OSTPlayer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    waifus: allContentfulWaifu {
      edges {
        node {
          id
          name
          body {
            img: gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
    site: contentfulSite {
      background {
        img: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`;
