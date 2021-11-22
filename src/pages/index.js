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

const Index = ({ data: { waifus, site: {background} } }) => {
  // <div>
  //   {waifus.edges.map((waifu) => {
  //     console.log(waifu.node)
  //     return <GatsbyImage image={waifu.node.body.img} />
  //   })}
  // </div>
  return (
    <div className="w-full min-h-full h-screen table text-bordergray items-center">
      <div className="table-row-group">
        <div className="table-row">
          <Background background={background.img}/>
          <ContractLinks />
          <Container>
            <WaifuLayout waifus={waifus.edges} />
            <CTA />
            <Social />
          </Container>
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
            img: gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    site: contentfulSite {
      background {
        img: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
