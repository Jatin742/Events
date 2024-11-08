import React, { Fragment, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAdminEvents} from "../Actions/eventAction";
import { formattedDate } from '../Components/Home/EventCard';

const AllAdminEvents = () => {
    const { events, error } = useSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminEvents());
    }, [dispatch]);

    useEffect(() => {
        if(error){
            dispatch(clearErrors());
        }
    }, [error, dispatch]);
    const columns = [
        { field: "title", headerName: "Event Name",minWidth: 175,  flex: 0.4 },
        { field: "timingOfEvent", headerName: "Date", minWidth:175, flex: 0.4 },
        { field: "numberOfRegisterations", headerName: "Number Of Registerations", minWidth:350,flex: 1, type: "number" },];
        const rows=[];
    events && events.forEach((item)=>{
        rows.push({
            id:item._id,
            title:item.title,
            timingOfEvent: formattedDate(item),
            numberOfRegisterations: item.numberOfRegisterations,
        })
    })
    return (
        <Fragment>
        <div style={{overflowX:"auto",}} >
              <h1>All Events</h1>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  disableSelectionOnClick
                  autoHeight
              />
          </div>
      </Fragment>
  )
}

export default AllAdminEvents