import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Grid from './components/Grid';
import Hero from './components/Hero';
import Layout from './components/Layout';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Layout>
      <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div>
            <h1>Current Theme: {theme}</h1>
          </div>
        </div>
        <main>
          <Hero />
          <Grid />
        </main>
      </Layout>
    </>
  );
};

export default App;
