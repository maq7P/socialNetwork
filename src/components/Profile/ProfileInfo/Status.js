import React from "react";
import style from './profileInfo.module.css';
class Status extends React.Component{
    // put_profile_status
    state = {
        isClicked: false,
        status: this.props.status
    }
    createEditMode = () => {
        this.setState({
            isClicked: true
        })
    }
    destoryEditMode = () => {
        this.setState({
            isClicked: false
        })
        this.props.put_profile_status(this.state.status)
    }
    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        return(
            <>
                {!this.state.isClicked &&
                    (!this.props.id  ?
                        <p className={style.statusText}
                            onClick = {this.createEditMode}>

                                {this.state.status ? this.state.status : 
                                    'set status'}
                        </p>  
                    : 
                        <p>
                            {this.state.status ? this.state.status : ''}
                        </p>)
                }

                {this.state.isClicked &&
                    <input className={style.statusInput}
                        autoFocus
                        onBlur={this.destoryEditMode}
                        onChange={this.changeStatus}
                           value={this.state.status}/>
                }
            </>
        )
    }
}
export default Status