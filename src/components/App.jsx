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
const [bio, setBio] = useState('');
// const joinDate = JSON.parse(joined);

  useEffect( () => {
    fetch("https://api.github.com/users/")
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
      setBio(data.bio);
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e){
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data =>
      setData(data)
      )
  }

  return (
    <div>
    <Nav/>
    <div className="App">
    <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Username'
              name='username'
              onChange= {handleChange}
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
        {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Followers: {followers}
      </a> <a className="Followers"> <Icon name='user' />
        Following: {following}
      </a>
    </Card.Content>
  </Card>
  </div>
    </div>
  );
}

export default App;
