import Header from "@portfolio/app/header"
import getLinks from './links';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return <Header homeLink={true} links={getLinks()} selectedLink={1}></Header>
}