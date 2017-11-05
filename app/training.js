import React from 'react';
import { get } from './api';

export default class Training extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  
  componentDidMount() {
    get('2017-18/training').then((data) => {
      if ( data ) {
        this.setState({ data: data });
      }
    });
  }

  renderItems() {
		let { data } = this.state;
		return data.map((m) => {
      let url = `https://www.vtonapp.com/1/Media/get?m=${m.video}`;
			return (
        <tr ref={m.id}>
          <td>{m.section}</td>
          <td>{m.category}</td>
          <td><a href={url} target='_blank'>{m.title}</a></td>
        </tr>
			);
		});
  }

  render() {
    return (
      <div className='col-xs-12 col-md 12'>
        <table>
          { this.renderItems() }
        </table>
      </div>
    );
  }
}
