import React, { Component } from 'react';


class Sort extends Component{
    
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

  render(){
    return(
        <div className="dropdown ml-4">
            <button 
                    className="btn btn-primary" 
                    type="button" 
                    id="dropdownMenu1" 
                    data-toggle="dropdown"
                    aria-haspopup ="true"
                    aria-expanded = "true"
            >
                Sắp Xếp <span className="fa fa-caret-square-o-down ml-1"></span>
            </button>

            <div className="dropdown-menu">
                <li onClick = { () => this.onClick('name', 1) }>
                    <a 
                            href="4" 
                            role="button" 
                            className = { 
                                (this.props.sortBy === 'name' && this.props.sortValue === 1)
                                ? 'dropdown-item sort_selected' : 'dropdown-item'
                            } 
                    >
                        <span className="fa fa-sort-alpha-up-alt mr-1">
                            Tên A-Z
                        </span>
                    </a>
                </li>
                
                <li onClick = { () => this.onClick('name', -1) }>
                    <a 
                            href="3" 
                            role="button" 
                            className = { 
                                (this.props.sortBy === 'name' && this.props.sortValue === -1)
                                ? 'dropdown-item sort_selected' : 'dropdown-item'
                            }
                    >
                        <span className="fa fa-sort-alpha-down-alt mr-1">
                            Tên Z-A
                        </span>
                    </a>
                </li>
                <div role="separator" className="dropdown-divider"></div>

                <li onClick = { () => this.onClick('status', 1) }>
                    <a 
                            href="2" 
                            role="button" 
                            className = { 
                                (this.props.sortBy === 'status' && this.props.sortValue === 1)
                                ? 'dropdown-item sort_selected' : 'dropdown-item'
                            }
                    >
                        Trạng Thái Kích Hoạt
                    </a>
                </li>

                <li onClick = { () => this.onClick('status', -1) }>
                    <a
                            href="4" 
                            role="button" 
                            className = { 
                                (this.props.sortBy === 'status' && this.props.sortValue === -1)
                                ? 'dropdown-item sort_selected' : 'dropdown-item'
                            }
                    >
                        Trạng Thái Ẩn
                    </a>
                </li>
            </div>
        </div>
    );
  }
}

export default Sort;