import { useContext } from 'react';
import { ThemeContext } from './utils/themeContext';
import Grid from './components/Grid';
import Hero from './components/Hero';
import Layout from './components/Layout';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Layout>
        <main>
          {/* <div>
            <h3>Current Theme: {theme}</h3>
          </div> */}
          <div className="theme-button">
            <button onClick={toggleTheme}>current theme: {theme}</button>
          </div>
          {/* {theme === 'dark' ? (
              <i className="fa-solid fa-toggle-on"></i>
            ) : (
              <i className="fa-solid fa-toggle-off"></i>
            )}    */}
          <Hero />
          <Grid />
        </main>
      </Layout>
    </>
  );
};

export default App;
