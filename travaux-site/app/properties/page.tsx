import Property from ".";
import Design from "./Design";
import Footer from "../footer"
import Nav from "./navbar"

const getProperties = async() => {
    const response = await fetch(
        "http://localhost:1337/api/properties?populate=image",
      { method: "GET" }
    );
    const properties = await response.json();
    return properties.data
}

const getDesigns = async() => {
  const response = await fetch(
    "http://localhost:1337/api/designs?populate=image",
  { method: "GET" }
);
const designs = await response.json();
return designs.data
}

type Props = {}

const Properties = async(props: Props) => {
    const properties = await getProperties()
    const designs = await getDesigns()
  return (
    <main>
      <Nav/>
      <Property properties={properties}/>
      <Design designs={designs}/>
      <Footer/>
    </main>
  )
}

export default Properties