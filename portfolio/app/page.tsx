import Main from './main';
import getLinks from './links';
import Header from './header';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header links={getLinks()} />
      <Main />
    </div>
  );
}
