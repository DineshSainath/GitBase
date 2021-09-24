import React, { useState } from "react";
import {Container, List, Card} from "semantic-ui-react";

function Repos(props){

  const [name,setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [id,setId] = useState([]);
  const [url, setUrl] = useState([]);
  const [created, setCreated] = useState([]);
  const [updated, setUpdated] = useState([]);
  const [lang, setLang] = useState([]);
  const [clone, setClone] = useState([]);

  function setData(data){
      setName(data.name);
      setDesc(data.description);
      setId(data.id);
      setUrl(data.html_url);
      setCreated(data.created_at);
      setUpdated(data.updated_at);
      setLang(data.language);
      setClone(data.clone_url);
  }

  function repos(){
    fetch(`https://api.github.com/users/${props.name}/repos`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  repos();

    return(
    <Container className="repos">
        <List horizontal>
         <List.Item>
          <Card
          href='google.com'
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          />
         </List.Item>
          
         <List.Item>
          <Card
          href='google.com'
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          />
         </List.Item>
         
         <List.Item>
          <Card
          href='google.com'
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          />
         </List.Item>
        </List>
    </Container>);
}

export default Repos;