import * as React from 'react';

interface ListItemProps {
    item: any
  }

const ListItem: React.FunctionComponent<ListItemProps> = (props) => (
    <li>
        <p>{props.item.name.first}</p>
        <p>{props.item.name.last}</p>
    </li>
)

export default ListItem;