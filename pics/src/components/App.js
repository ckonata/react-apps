import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

  async onSearchSubmit(term){
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term},
      headers: {Authorization: "Client-ID 7K53AgnGiMcjIlo_jnlnZST6cxKBcX-0P63QIRZ3KfA"}
    });

    
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;