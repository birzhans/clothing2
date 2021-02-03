import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item'
import './directory.scss';
import SECTIONS_DATA from './sections.data';

class Directory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: SECTIONS_DATA
		}
	}

	render() {
		return (
			<div className='directory-menu'>
				{
					this.state.sections.map(({id, ...otherProps}) => (
						<MenuItem 
							{...otherProps}
							id={id} 
							/>
					))
				}
			</div>
		);
	}
}

export default Directory;