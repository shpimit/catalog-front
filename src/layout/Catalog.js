import React, { useState, useEffect } from 'react';
import Item from '../components/Item'
import ItemAdd from '../components/ItemAdd';

import Paper            from '@material-ui/core/Paper';
import Table            from '@material-ui/core/Table';
import TableHead        from '@material-ui/core/TableHead';
import TableBody        from '@material-ui/core/TableBody';
import TableRow         from '@material-ui/core/TableRow';
import TableCell        from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles }   from '@material-ui/core/styles';
import { fade }         from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({

  root: {
    width: "100%",
    minWidth: 1080
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));

export default function Catalog({ user }) {

  const [items,     setItems]     = useState('');
  const [completed, setCompleted] = useState(0);  

  const classes = useStyles();

  // const { email, password, name } = user || {};  

  const cellList = ["번호", "품목 이미지", "품번", "품명", "품목분류", "규격", "단위", "제조사명", "모델명", "원산지", "HS_NO", "생성자", "생성일"];
  
  const filteredComponents = (data) => {

    console.log(data);

    // data = data.filter((c) =>
    //   return c.name.indexOf(this.state.searchKeyword) > -1;
    // });
    
    /* 맵(Map) 문법은 특정한 리스트(List)가 있을 때 해당 리스트의 각 원소에 특정한 문법을 적용한 결과 리스트를 반환합니다. 다시 말해서 customers 배열에 있는 모든 원소에 대한 Customer Element를 반환하는 것입니다.*/
    return data.map((c) => {                  
      return <Item stateRefresh={stateRefresh}
        key               = {c.id} 
        id                = {c.id}
        image             = {c.image}
        item_no           = {c.item_no}
        description_loc   = {c.description_loc}
        material_class    = {c.material_class}
        specification     = {c.specification}
        basic_unit        = {c.basic_unit}
        maker_name        = {c.maker_name}
        model_no          = {c.model_no}
        origin_country    = {c.origin_country}
        hs_no             = {c.hs_no}
        add_user_id       = {c.add_user_id}
        add_date          = {c.add_date}
      />
    });
  }

  const stateRefresh = () => {

    console.log("stateRefresh");

    callApi()
    .then(res => setItems(res))
    .catch(err => console.log(err));

    console.log("stateRefresh End");
  }

  useEffect(() => {

    // timer = setInterval(progress, 20);

    callApi()
    .then(res => {setItems(res)})
    .catch(err => console.log(err)); 

    console.log("useEffect");
  }, []);

  // const componentDidMount = () => {
  //   // Circular Progress 라이브러리를 이용하여 프로그레스 바를 API 로딩 메시지 용도로 사용
  //   this.timer = setInterval(this.progress, 20);

  //   this.callApi()
  //   .then(res => this.setState({customers: res}))
  //   .catch(err => console.log(err));
  // }

  const progress = () => {
    // const { completed } = this.state;
    // const { completed } = completed;
    // this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    setCompleted({ completed: completed >= 100 ? 0 : completed + 1 })
  };

  // const componentWillUnmount = () => {
  //   clearInterval(this.timer); 
  // }
  
  const callApi = async () => {

    console.log("callApi=======");
    // const response = await fetch('/api/item');
    const response = await fetch('/query/items');
    const body     = await response.json();
    return body;
  }

  // const handleValueChange = (e) => {
  //   let nextState = {};
  //   nextState[e.target.name] = e.target.value;
  //   setCustomers(nextState);
  //   // setState(nextState);
  // }  

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <ItemAdd stateRefresh={useEffect} />
      </div>
      <Paper className={classes.paper}>
        <Table>
        <TableHead>
          <TableRow>
            {cellList.map(c => {
              return <TableCell className={classes.tableHead}>{c}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>            
            {items ?
              filteredComponents(items) :
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={completed} />
                </TableCell> 
              </TableRow> 
            }
          </TableBody>
        </Table>
      </Paper>
    </div>        
  );
}
