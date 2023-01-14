import React from "react";

import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={`${s.dialog} ${s.active}`}>Jack</div>
                <div className={s.dialog}>Bill</div>
                <div className={s.dialog}>Ashley</div>
                <div className={s.dialog}>Di</div>
                <div className={s.dialog}>Valery</div>
                <div className={s.dialog}>Andrew</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>

            </div>
        </div>)
}

export default Dialogs