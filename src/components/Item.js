import React      from 'react';
import TableRow   from '@material-ui/core/TableRow';
import TableCell  from '@material-ui/core/TableCell';
import ItemDelete from './ItemDelete'

export default function Item(props) {

    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="catalog"/></TableCell>
            <TableCell>{props.item_no}</TableCell>
            <TableCell>{props.description_loc}</TableCell>
            <TableCell>{props.material_class}</TableCell>
            <TableCell>{props.specification}</TableCell>
            <TableCell>{props.basic_unit}</TableCell>
            <TableCell>{props.maker_name}</TableCell>
            <TableCell>{props.model_no}</TableCell>
            <TableCell>{props.origin_country}</TableCell>
            <TableCell>{props.hs_no}</TableCell>
            <TableCell>{props.add_user_id}</TableCell>
            <TableCell>{props.add_date}</TableCell>
            <TableCell><ItemDelete stateRefresh={props.stateRefresh} id={props.id}/></TableCell>    
        </TableRow>
    );
};
