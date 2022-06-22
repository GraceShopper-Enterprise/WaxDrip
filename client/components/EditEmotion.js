import React from "react";
import { connect } from "react-redux";
import { updateEmotion } from "../store/allEmotions";
import { fetchSingleEmotion } from "../store/singleEmotion";

export class EditEmotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   //id: this.props.emotion.id,
      //   name: this.props.emotion.name,
      //   price: this.props.emotion.price,
      //   imageURL: this.props.emotion.imageURL,
      //   stockQuantity: this.props.emotion.stockQuantity,
      //   description: this.props.emotion.description,
      //   reccomendedEmpathyLevel: this.props.emotion.reccomendedEmpathyLevel,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingleEmotion(id);
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const editedEmotion = { ...this.state };
    this.props.editEmotion(editedEmotion);
  }

  render() {
    //console.log(this.props);
    return (
      <div className="form">
        Edit Item!!!
        <form onSubmit={this.handleSubmit}>
          <label> Update Username: </label>
          <input
            name=""
            // value={taskName}
            onChange={this.handleChange}
          />
          <label htmlFor="assignee">Update Assign To:</label>
          <input
            name=""
            // value={assignee}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          {/* <Link to="/">Cancel</Link> */}
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    singleEmotion: state.singleEmotion,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadSingleEmotion: (id) => dispatch(fetchSingleEmotion(id)),
    editEmotion: (editedEmotion) =>
      dispatch(updateEmotion(editedEmotion, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmotion);
