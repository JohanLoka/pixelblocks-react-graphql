import React, {Component} from 'react';

class LiveItem extends Component {

  render() {
    let num = 0;
    let children = this.props.data.data.map(item => {
      num++;
      return (
        <tr key={num}>
          <td>{item.username}</td>
          <td>{item.type}</td>
          <td>{item.value}</td>
        </tr>
      );
    });
    const style = `col m${this.props.width}`;
    return (
      <div className={style}>
        <h4 className="red-text">{this.props.data.type.toUpperCase()}</h4>
        <table className="responsive-table bordered hover">
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    )
  }

}

export default LiveItem;
