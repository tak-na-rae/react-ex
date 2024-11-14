import { useEffect, useState } from 'react';
import { FaTwitterSquare, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Isotope from 'isotope-layout';
import { Header, HeaderTitle, NavList, NavItem, Main, FilterList, FilterItem, Article, ArticleDiv, ArticleImg, ArticleTitle, ArticleContent } from './Style';

const articles = [
  { id: 1, src: './images/p1.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 2, src: './images/p2.jpg', title: 'Here comes title.', className: 'even' },
  { id: 3, src: './images/p3.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 4, src: './images/p4.jpg', title: 'Here comes title.', className: 'even' },
  { id: 5, src: './images/p5.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 6, src: './images/p6.jpg', title: 'Here comes title.', className: 'even' },
  { id: 7, src: './images/p7.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 8, src: './images/p8.jpg', title: 'Here comes title.', className: 'even' },
  { id: 9, src: './images/p9.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 10, src: './images/p10.jpg', title: 'Here comes title.', className: 'even' },
  { id: 11, src: './images/p11.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 12, src: './images/p12.jpg', title: 'Here comes title.', className: 'even' },
  { id: 13, src: './images/p13.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 14, src: './images/p14.jpg', title: 'Here comes title.', className: 'even' },
  { id: 15, src: './images/p15.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 16, src: './images/p16.jpg', title: 'Here comes title.', className: 'even' },
  { id: 17, src: './images/p17.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 18, src: './images/p18.jpg', title: 'Here comes title.', className: 'even' },
  { id: 19, src: './images/p19.jpg', title: 'Here comes title.', className: 'odd' },
  { id: 20, src: './images/p20.jpg', title: 'Here comes title.', className: 'even' },
];

function App() {
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    const iso = new Isotope('.section', {
      itemSelector: Article,
      columnWidth: Article,
      transitionDuration: '0.5s',
    });
    setIsotope(iso);
  }, []);

  const filterItems = (filter) => {
    if (isotope) {
      isotope.arrange({ filter });
    }
  };

  return (
    <>
      <Header>
        <HeaderTitle>DECODE LAB</HeaderTitle>
        <NavList>
          <NavItem><FaTwitterSquare /> Twitter</NavItem>
          <NavItem><FaFacebook /> Facebook</NavItem>
          <NavItem><FaEnvelope /> E-mail</NavItem>
        </NavList>
      </Header>
      <Main>
        <FilterList>
          <FilterItem onClick={() => filterItems('*')}>ALL</FilterItem>
          <FilterItem onClick={() => filterItems('.odd')}>ODD</FilterItem>
          <FilterItem onClick={() => filterItems('.even')}>EVEN</FilterItem>
        </FilterList>
        <section className='section'>
          {articles.map(article => (
            <Article className={article.className} key={article.id}>
              <ArticleDiv>
                <ArticleImg src={article.src} alt="" />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleContent>Here comes content description in detail.</ArticleContent>
              </ArticleDiv>
            </Article>
          ))}
        </section>
      </Main>
    </>
  );
}

export default App;