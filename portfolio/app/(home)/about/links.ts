import { LinkData } from "@portfolio/app/header";

export default function getLinks(): LinkData[] {
  return [
    new LinkData('Works', '/works'),
    new LinkData('About', '/about'),
  ];
}