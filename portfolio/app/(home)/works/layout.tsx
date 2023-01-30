import Header from "@portfolio/app/header"
import getLinks from '@portfolio/app/links';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return <Header homeLink={true} links={getLinks()} selectedLink={0}></Header>
}