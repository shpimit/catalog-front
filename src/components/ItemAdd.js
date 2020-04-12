import React, { useState }  from 'react'
import { post }             from 'axios';
import Dialog               from '@material-ui/core/Dialog';
import DialogActions        from '@material-ui/core/DialogActions';
import DialogContent        from '@material-ui/core/DialogContent';
import DialogTitle          from '@material-ui/core/DialogTitle';
import TextField            from '@material-ui/core/TextField';
import Button               from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    hidden: {
        display: 'none'
    }
}));


export default function ItemAdd(props) {

    const classes = useStyles();     
    
    const [open, setOpen]                       = useState('');    
    const [item_no, setItemNO]                  = useState('');
    const [description_loc, setDescriptionLoc]  = useState('');
    const [material_class, setMaterialClass]    = useState('');
    const [specification, setSpecification]     = useState('');
    const [basic_unit, setBasicUnit]            = useState('');
    const [maker_name, setMakerName]            = useState('');
    const [model_no, setModelNO]                = useState('');
    const [origin_country, setOriginCountry]    = useState('');
    const [hs_no, setHsNo]                      = useState('');
    const [add_user_id, setAddUserId]           = useState('');
    const [add_date, setAddDate]                = useState('');

    const [image, setImage]         = useState('');
    const [file, setFile]           = useState('');
    const [fileName, setFileName]   = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addItem()
        .then((response) => {
            console.log(response.data);
            // Customer(부모 Component)의 state를 갱신함.
            // props.stateRefresh();
        })

        // 데이터를 전송한 이후에는 품목 추가 양식(Form)을 비운 뒤에 페이지를 새로고침(Refresh)하여
        // 등록된 품목 데이터를 확인
        // 실제 배포 버전에서는 전체 페이지를 새로고침 하는 방향으로 코딩을 하면 안 되지만 빠른 테스트를 위해서

        setItemNO('');
        setDescriptionLoc('');
        setMaterialClass('');
        setSpecification('');
        setBasicUnit('');
        setMakerName('');
        setModelNO('');
        setOriginCountry('');
        setHsNo('');
        setAddUserId('');
        setAddDate('')
        setImage('');
        setFile('');
        setFileName('');
    }

    // const handleValueChange = (e) => {
    //     let nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     // this.setState(nextState);

    //     console.log(e.target.name);
    //     console.log(e.target.value);  
    // }

    const handleFileChange = (e) =>{


        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");        

        setFile(e.target.files[0]);
        setFileName( e.target.value);

        // this.setState({
        //     file: e.target.files[0],
        //     fileName: e.target.value
        // });
    }    
    

    const addItem = () => {

        const url = '/query';

        const formData = new FormData();

        formData.append('image',            file)        
        formData.append('item_no',          item_no)
        formData.append('description_loc',  description_loc)
        formData.append('material_class',   material_class)
        formData.append('specification',    specification)
        formData.append('basic_unit',       basic_unit)
        formData.append('maker_name',       maker_name)
        formData.append('model_no',         model_no)
        formData.append('origin_country',   origin_country)
        formData.append('hs_no',            hs_no)
        formData.append('add_user_id',      add_user_id)
        formData.append('add_date',         add_date)
        // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ imageurl이 아닌 file로 했음.         

        const config = {
            method : 'POST',
            body : formData
            headers: {
                // 'content-type': 'multipart/form-data'
                'content-type': 'application/json'
            }
        }
        return post(url, formData, config)

    // Simple POST request with a JSON body using fetch
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setState({ postId: data.id }));        
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
        setItemNO('');
        setDescriptionLoc('');
        setMaterialClass('');
        setSpecification('');
        setBasicUnit('');
        setMakerName('');
        setModelNO('');
        setOriginCountry('');
        setHsNo('');
        setAddUserId('');
        setAddDate('')
        setImage('');
        setFile('');
        setFileName('');        
    };      

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
            품목 추가하기
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>품목 추가</DialogTitle>
                <DialogContent>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={file} value={fileName} onChange={handleFileChange} />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                        {fileName === ''? "품목 이미지 선택" : fileName}
                        </Button>
                    </label><br/>
                <TextField label="품번" type="text" name="item_no" value={item_no} onChange={({ target: { value } }) => setItemNO(value)} /><br/>
                <TextField label="품명" type="text" name="description_loc" value={description_loc} onChange={({ target: { value } }) => setDescriptionLoc(value)} /><br/>
                <TextField label="품목분류" type="text" name="material_class" value={material_class} onChange={({ target: { value } }) => setMaterialClass(value)} /><br/>
                <TextField label="규격" type="text" name="specification" value={specification} onChange={({ target: { value } }) => setSpecification(value)} /><br/>
                <TextField label="단위" type="text" name="basic_unit" value={basic_unit} onChange={({ target: { value } }) => setBasicUnit(value)} /><br/>
                <TextField label="제조사명" type="text" name="maker_name" value={maker_name} onChange={({ target: { value } }) => setMakerName(value)} /><br/>
                <TextField label="모델명" type="text" name="model_no" value={model_no} onChange={({ target: { value } }) => setModelNO(value)} /><br/>
                <TextField label="원산지" type="text" name="origin_country" value={origin_country} onChange={({ target: { value } }) => setOriginCountry(value)} /><br/>
                <TextField label="HS_NO" type="text" name="hs_no" value={hs_no} onChange={({ target: { value } }) => setHsNo(value)} /><br/>
                <TextField label="생성자" type="text" name="add_user_id" value={add_user_id} onChange={({ target: { value } }) => setAddUserId(value)} /><br/>
                <TextField label="생성일" type="text" name="add_date" value={add_date} onChange={({ target: { value } }) => setAddDate(value)} /><br/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>추가</Button>
                    <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};