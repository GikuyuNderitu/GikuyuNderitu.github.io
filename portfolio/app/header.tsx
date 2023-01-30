import Link from "next/link"
import Logo from "./logo"
import ThemeSelector from "./theme_selector"

export class LinkData {
  constructor(
    public text: string,
    public href: string,
  ) { }
}

type HeaderProps = {
  links: LinkData[]
  selectedLink?: number
  homeLink?: boolean
}

function linkStyle(selectedLink: number, idx: number): string {
  return "mx-4" + (selectedLink == idx ?
    " decoration-2 underline underline-offset-8" :
    " hover:decoration-2 hover:underline hover:underline-offset-8 decoration-emerald-500");
}

export default function Header({ links, selectedLink = -1, homeLink = false }: HeaderProps) {
  const linkComponents = links.map(
    (data, idx) => (
      <Link
        key={idx}
        href={data.href}
        className={linkStyle(selectedLink, idx)}>
        {data.text}
      </Link>)
  );

  return <header className="text-lg flex justify-between m-6 items-center h-[100px]">
    <WrappedLogo homeLink={homeLink} />
    <div className="text-black dark:text-white inline-flex h-full items-center">
      {linkComponents}
      <div className="inline-block ml-4">
        <ThemeSelector />
      </div>
    </div>
  </header>

}

const WrappedLogo = ({ homeLink }: { homeLink: boolean }) => homeLink ?
  <Link href="/">
    <div className="hover:border-b-2 border-emerald-500">
      <Logo />
    </div>
  </Link> :
  <div className="flex items-center justify-center border-b-2 border-black dark:border-white">
    <Logo />
  </div>
