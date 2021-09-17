import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './navbar';
import 'semantic-ui-css/semantic.min.css';
import {Card, Image, Button, Icon, Form} from 'semantic-ui-react';

function App() {

const [name, setName] = useState('');
const [userName, setUserName] = useState('');
const [followers, setFollowers] = useState('');
const [following, setFollowing] = useState('');
const [repos, setRepos] = useState('');
const [avatar, setAvatar] = useState('');
const [userInput, setUserInput] = useState('');
const [joined, setJoined] = useState('');

  useEffect( () => {
    fetch("https://api.github.com/users/dineshsainath")
    .then(res => res.json())
    .then(data =>
      setData(data)
      )
  }
  ,[]);  

  function setData(data){
      setName(data.name);
      setUserName(data.login);
      setAvatar(data.avatar_url);
      setFollowers(data.followers);
      setFollowing(data.following);
      setJoined(data.created_at);
  }

  return (
    <div>
    <Nav/>
    <div className="App">
    <Form>
          <Form.Group>
            <Form.Input
              placeholder='Username'
              name='username'
            />
            <Form.Button animated>
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Form.Button>
          </Form.Group>
      </Form>
      </div>

<div className="card">
    <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in {joined}</span>
      </Card.Meta>
      <Card.Description>
        Thomas is a gambler from Birmhingam.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  </div>
    </div>
  );
}

export default App;
