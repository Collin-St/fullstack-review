import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import { getReposByUsername } from '../../helpers/github.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    this.getRanking();
  }

  getRanking() {
    $.post({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: data,
      success: this.setState(() => {
        return {
          repos: data.repos
        }
      })
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.post({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      success: function() {
        console.log('POST successful')
      }
    })
    
    // $.ajax({
    //   type: "POST",
    //   url: getReposByUsername,
    //   data: data,
    //   success: function() {
    //     console.log('success')
    //   },
    //   dataType: dataType
    // })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));