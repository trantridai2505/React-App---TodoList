import React, { Component } from 'react';


class Sort extends Component{
  render(){
    return(
        <div className="dropdown ml-4">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                Sắp Xếp <span className="fa fa-caret-square-o-down ml-1"></span>
            </button>

            <div className="dropdown-menu">
                <a href="true" role="button" className="dropdown-item" >
                    
                    <span className="fa fa-sort-alpha-up-alt mr-1">
                        Tên A-Z
                    </span>
                        
                    
                </a>
        
                <a href="true" role="button" className="dropdown-item" >
                    <span className="fa fa-sort-alpha-down-alt mr-1">
                        Tên Z-A
                    </span>
                </a>
                
                <div role="separator" className="dropdown-divider"></div>
                <a href="true"  className="dropdown-item" role="button" >Trạng Thái Kích Hoạt</a>
                <a href="true" className="dropdown-item" role="button" >Trạng Thái Ẩn</a>
            </div>
        </div>
    );
  }
}

export default Sort;