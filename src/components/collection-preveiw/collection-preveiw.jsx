import React from 'react';
import CollectionItem from '../collection-item/collection-item'
import './preview.scss'

const CollectionPreview = ({title, items}) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((items, idx) => idx < 4)
				.map(({id, ...otherProps}) => (
					<CollectionItem key={id} {...otherProps} />
			))}
		</div>
	</div>
)

export default CollectionPreview;