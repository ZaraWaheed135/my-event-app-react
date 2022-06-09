import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EventBusyIcon from '@mui/icons-material/EventBusy';
export default function Action() {
return(
    <div>
<EditIcon sx={{fontSize: 30, color: 'red'}}/><EventBusyIcon sx={{marginLeft: 1, color: 'red'}}/><FileCopyIcon sx={{fontSize: 25, marginLeft: 3, color: 'red'}}/>
</div>);
}