import Header from "./header";
import getLinks from "./links";

export default function Loading() {
  return <div>
    <Header links={getLinks()}></Header>
  </div>
}