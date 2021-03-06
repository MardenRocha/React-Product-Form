import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class FormProduct extends Component {
    render() { 
        const{onSubmit,value,onChange} = this.props;
        
        return ( 
        <div className = 'container mt-2 mx-auto'>
            <form onSubmit={onSubmit} className='col'>
                <div className="form-group">
                    <label className="font-weight-bold">Product</label>
                    <input 
                        type="text"
                        className="form-control font-weight-bold" 
                        placeholder="Describe the product" 
                        value={value} 
                        onChange={onChange}/>
                </div>
                <div className ="form-group">
                    <button 
                        type="submit" 
                        className="btn btn-primary font-weight-bold" >
                        Add Product
                    </button>
                </div>

            </form>   
        </div>
         );
    }
}
 
export default FormProduct;