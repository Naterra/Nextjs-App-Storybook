import React, { Component } from 'react';
import M from 'materialize-css';


class Autocomplete extends React.Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.instance=null;

        this.state={
            inputValue: ''
        };
    }
    componentDidMount() {

        let el = this.myRef.current;

        const options = {
            data: { },
            onAutocomplete: (val) =>{
                this.onSelectEvent(val);
            }
        };

        this.instance = M.Autocomplete.init(el,options);

        // Set Default val
        this.setState({inputValue:this.props.defaultValue});
    }
    componentDidUpdate(prevProps, prevState){
        let el = this.myRef.current;
        this.instance.updateData(this.props.data);
        // this.instance.open();

        if(prevProps.defaultValue !==this.props.defaultValue){
            this.setState({inputValue:this.props.defaultValue});
        }
    }

    onSelectEvent = (newValue)=>{
        console.error('onSelectEvent(e)', newValue);
        let el = this.myRef.current;
        // el.value=e;
        this.setState({inputValue:newValue});
        this.props.newLocationSelected(newValue);

        // At the end of all state changes
        this.instance.close();
    };
    onInputChanged=(val)=>{
        const {  onChange } = this.props;
        if(onChange) onChange(val);
    };

    render(){
        const { icon, postFixIcon, placeholder, onChange } = this.props;


        return(<div className="input-field col s12">
            <i className="material-icons prefix">{icon}</i>
            {/*<input onKeyUp={e=>this.props.onKeyUp(e.target.value)} onChange={e=>this.changed(e)} placeholder={placeholder} ref={this.myRef} defaultValue={this.props.defaultData || ''} type="text" id="autocomplete-input" className="autocomplete" autoComplete="off" />*/}
            <input onChange={e=> this.onInputChanged(e.target.value)}   placeholder={placeholder} ref={this.myRef} defaultValue={this.state.inputValue  } type="text" id="autocomplete-input" className="autocomplete" autoComplete="off" />
            {/*{postFixIcon && (<div className="postfix postFixIcon valign-wrapper"><i className="material-icons white-text">{postFixIcon}</i></div>)}*/}
        </div>);
    }
}

export default Autocomplete;