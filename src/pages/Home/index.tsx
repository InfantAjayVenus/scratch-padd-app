import React, { useState, useEffect } from "react";
import {
EuiEmptyPrompt, EuiButton
} from '@elastic/eui';
import {useHistory} from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const [itemList, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
   
  }, [itemList, setItems])

  return (
    <>
      <aside>
        {/*
            This Part holds the content of each menu.
            It pops as a model, spanning whole viewport in mobile and width decreases as screen width expands.
        */}
      </aside>
      <main>
        {itemList.length === 0 ? 
<EuiEmptyPrompt
    iconType="faceHappy"
    title={<h2>You haven't created any padds yet.</h2>}
    actions={
      <EuiButton onClick={() => history.push('/newpadd')} color="text" fill className="cta">
        Create Padd
      </EuiButton>
    }
  />:null
        }
        {/*
          This contains the contents of the app
          1. editor
          2. Pads list
          3. Pad content
        */}
      </main>
    </>
  );
};

export default Home;
