import React from 'react'

class MyDivWithInput extends React.Component {
  public state = {
    isChecked: false
  }


  sayHello(e: React.MouseEvent<Element, MouseEvent> | React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation()
    if (e.currentTarget.id === 'donotbubble') {
      console.log(e.currentTarget.id);
      e.preventDefault()
      this.setState({ isChecked: !this.state.isChecked })
    }
    if (e.currentTarget.id === 'myInput') {
      console.log(`Hello ${e.currentTarget}`);
      this.setState({ isChecked: !this.state.isChecked })
    }
  }

  render() {
    const checkedOrNot = [];
    checkedOrNot.push(
      <p key={checkedOrNot.length}>{!this.state.isChecked ? 'Unchecked' : 'Checked'}</p>
    );
    return (
      <div
        className="container"
        id="donotbubble"
        style={{ outline: 'solid 1px gray', padding: '1em' }}
        onClick={(e) => this.sayHello(e)}

      >
        <input type="checkbox" id="myInput"
          checked={this.state.isChecked}
          // defaultChecked={this.state.isChecked}
          onClick={(e) => this.sayHello(e)}
          onChange={() => console.log('yolo')}
        />
        <label
          htmlFor="myInput"
        >
          Label</label>
        {checkedOrNot}
        {/* <button onClick={console.clear}>Clear console</button> */}
      </div>
    )
  }
}

export default MyDivWithInput;