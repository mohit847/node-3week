import React, {Component} from 'react';
class AddPizza extends Component{

    state={
        name: "",
        description: "",
    }

    handleChange = (e) =>{
        this.setState({
            name: e.target.value,
            description: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addCard(this.state);

    }

    render(){
        return(
            <div id="add-pizza">
                <h2>Please fill the details</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Enter name' onChange={this.handleChange}></input><br></br>
                    <label forHtml="forHtml">Enter description</label><br></br>
                    <textarea rows="10" cols="20" id="description" placeholder='Enter description...'></textarea><br></br>
                    <input type='Submit' value="Add Card"></input>
                </form>

            </div>
        )
    }
}

export default AddPizza;