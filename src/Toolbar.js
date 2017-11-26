import React, { Component} from 'react';

class Toolbar extends Component {
  render(){

    let selectButtonClass = "fa-square-o";
      if(this.props.numOfSelectedMsgs === this.props.messages.length){
        selectButtonClass = "fa-check-square-o"
      } else if (this.props.numOfSelectedMsgs > 0 && this.props.numOfSelectedMsgs < this.props.messages.length){
        selectButtonClass = "fa-minus-square-o";
      }

    let countUnreadMsgs = this.props.messages.filter(msg => !msg.read).length

    let countedSelected = this.props.messages.reduce((acc, val) => acc + !!val.selected, 0)


    return(
      <div className="toolbar-container">
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">
                {countUnreadMsgs}
              </span>
                {countUnreadMsgs > 1 || countUnreadMsgs < 1 ? 'unread messages' : 'unread message'}
            </p>

            <button
              className="btn btn-danger"
              disabled={!!countedSelected}
            >
              <i className="fa fa-plus"></i>
            </button>

            <button
              className="btn btn-default"
              onClick={() => this.props.selectButtonFunction(this.props.numOfSelectedMsgs)}
              disabled={!countedSelected}
            >
              <i className={`fa ${selectButtonClass}`}></i>
            </button>

{/* Mark as Read Button */}
            <button
              className="btn btn-default"
              onClick={() => this.props.setReadFunc()}
              disabled={!countedSelected}
            >
              Mark As Read
            </button>

{/* Mark as Unread Button */}
            <button
              className="btn btn-default"
              onClick={() => this.props.setUnreadFunc()}
              disabled={!countedSelected}
            >
              Mark As Unread
            </button>

{/* Add Label Button */}
            <select
              className="form-control label-select"
              onChange={(e)=> this.props.addLabel(e.target.value)}
              disabled={!countedSelected}
            >
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

{/* Remove Label Button */}
            <select
              className="form-control label-select"
              onChange={(e) => this.props.removeLabel(e.target.value)}
              disabled={!countedSelected}
            >
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button
              className="btn btn-default"
              onChange={() => this.props.deleteMessages()}
              disabled={!countedSelected}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar;
