import './App.css';
import React, {useState} from 'react';
import Panel from './jsx/panel';
import Discord from './jsx/discord';

/**
 * App - the App.
 * @return {JSX.Element}
 */
const App = () => {
  const [view, setView] = useState('home');

  const navigate = (goto) => {
    window.scrollTo(0, 0);
    setView(goto);
  };

  return (
    <div className='App'>
      <header>
        <h1>the Transsexual Experience</h1>
      </header>
      <Panel visible={view === 'home'}>
        <p>
          Welcome to a journey of empathy and enlightenment!
          Our website is your gateway to knowledge, compassion, and insight.
          Here, we aim to foster understanding by sharing personal stories, informative resources, and empowering voices from transsexuals.
          Whether you're new to this topic or looking to deepen your understanding, we invite you to explore real experiences that make up a transsexual person.
          Together, we can bridge gaps, dispel myths, and create a more inclusive and accepting world for all.
          Join us on this path of discovery and transformation.
        </p>
        <Discord/>
        <div id='divider'/>
        <h3 id='title_navigation'>Navigation</h3>
        <ul>
          <li className={'navigation_link'}
              onClick={() => navigate('definitions')}>
            Definitions
          </li>
          <li className={'navigation_link'}
              onClick={() => navigate('trans-medicalist')}>
            What is a Trans-medicalist
          </li>
          <li className={'navigation_link'}
              onClick={() => navigate('goals')}>
            Our Goals
          </li>
        </ul>
      </Panel>
      <Panel visible={view === 'definitions'}>
        <div onClick={() => navigate('home')}
             className={'link'}>
          | Return to Previous Page |
        </div>
        <h3>
          Definitions/stance:
        </h3>
        <p>
          We understand and maintain the status of transsexualism as an innate, immutable developmental neuroendocrine condition independent of sociological influences that:
        </p>
        <ul>
          <li type='i'>
            is produced through biological factors in fetal/early development?*
          </li>
          <li type='i'>
            can only truly be alleviated through steps to physically and hormonally alter the body to match, as closely as possible, the anatomy and physiology of medically typical chromosomal males and females.
          </li>
          <li type='i'>
            remains unchanged across societies, cultures, and languages, and the need for medical intervention also remains unchanged across same.
          </li>
        </ul>
        <p>
          Concepts of gender roles, expression, and expectations may exacerbate the psychological distress caused by the neuroendocrine mismatch, but they are not, per se, the cause of the mismatch.
        </p>
      </Panel>
      <Panel visible={view === 'trans-medicalist'}>
        <div onClick={() => navigate('home')}
             className={'link'}>
          | Return to Previous Page |
        </div>
        <h3>What is a Trans-medicalist</h3>
        <ul>
          <li>
            Trans-medicalist emphasize the importance of a diagnosis in determining who is considered transsexual and deserving of access to medical transition treatments, such as hormone therapy and gender-affirming surgeries.
          </li>
          <li>
            Trans-medicalist acknowledge gender dysphoria is a psychological condition characterized by distress or discomfort that arises when a person's deeply-held gender identity does not align with the sex they were assigned at birth.
          </li>
        </ul>
      </Panel>
      <Panel visible={view === 'goals'}>
        <div onClick={() => navigate('home')}
             className={'link'}>
          | Return to Previous Page |
        </div>
        <h3>Our Goals</h3>
        <p>
          By sharing the experiences and struggles of transsexual individuals in a transphobic society, we can raise awareness, challenge stereotypes, and ultimately weaken the negative impact of discrimination and prejudice.
        </p>
      </Panel>
      <footer>
        Transcending Understanding - Transsexual.Wiki
      </footer>
    </div>
  );
};

export default App;
