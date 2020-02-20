import React from "react"
import {MegadraftEditor, editorStateFromRaw} from "megadraft"
import 'megadraft/dist/css/megadraft.css'
import icons from "megadraft/lib/icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null)};
  }

  onChange = (editorState) => {
    this.setState({editorState});
  }
  
  render = () => {
    
    const styles = {
      margin: 80,
      border: "solid"
    }
    
    const linkifyAction = [{
      type: "entity",
      label: "Link",
      style: "link",
      entity: "LINK",
      icon: icons.LinkIcon
    }]
  
    return (
      <div style={styles}>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          actions={linkifyAction}
          maxSidebarButtons={0}/>

      </div>
    )
  }
}

export default App
