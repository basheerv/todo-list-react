import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, handleEdit } = this.props;
        // console.log(this.state);
    return (
            <div className='col-8 mx-auto border p-3'>
                <h3 className='text-center py-1'>Input Fields</h3>
             <form onSubmit={handleSubmit}>
              <label className="sr-only" >Username</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text d-block"><i className='fa fas fa-address-book-o'></i></div>
                    </div>
                        <input type="text" className="form-control" value={item} onChange={handleChange}  placeholder="Username" />
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Add Item</button>
                    </div>
             </form >
      </div>
    )
  }
}
