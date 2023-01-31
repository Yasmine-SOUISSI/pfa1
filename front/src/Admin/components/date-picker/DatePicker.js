import "date-fns";
import React from "react";
import MomentUtils from "@date-io/moment";
import {
    MuiPickersUtilsProvider,
    DatePicker
} from "@material-ui/pickers";


const MaterialUIPickers = ({ handleDateChange, selectedDate }) => {


    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
                keyboard
                placeholder="MM/DD/YYYY"
                format={"MM/DD/YYYY"}
                mask={value =>
                    value
                        ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                        : []
                }
                value={selectedDate}
                onChange={handleDateChange}
                disableOpenOnEnter
                animateYearScrolling={false}
                autoOk
                clearable
            />
        </MuiPickersUtilsProvider>

    );
}


export default MaterialUIPickers;
