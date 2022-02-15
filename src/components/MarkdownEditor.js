import React, { Component } from 'react'
import Editor from './Editor';
import ReactMarkdown from 'react-markdown';

const placeholder = `
#this is my markdown editor
## You can writer in markdown here

An HTML container is \`<div></div>\`

if you want you can see if click [here](https://youtube.com).

\`\`\`
class MarkdownEdiotr extrends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: placeholder
        }
    }
}
\`\`\`

- List Test 1
- List Test 2
- List Test 3

~~~~
This is a block code
Only for test
~~~~

![nice cat](https://i.imgur.com/45vZ0A3.jpg)

**A nice cat image :D**

> 'Work gives you meaning and purpose and life is empty without it'

- Stephen Hawking

`;

export default class MarkdownEditor extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: placeholder
        }
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

  render() {

    let { text } = this.state;

    return (
      <div>
          <h1 className='text-center m-4 markdown-title'>React Markdown Editor</h1>
          <div className='container'>
              <Editor text={text} onChange={this.handleChange} />
              <div>
                  <h4 className='text-center'>Preview</h4>
                  <div className='container__preview form-control m-2'>
                      <ReactMarkdown children={text} />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
