import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class MyButton extends Component {


    constructor(props) {
        super(props);
      
        this.state = {
            textValue: props.btn,
        }
        this.onPressButton = this.onPressButton.bind(this);
    }


    onPressButton() {
        this.setState({
            textValue: 'Text has been changed'
        })
    }

    render() {
        return (
      
                    <Button
                        onPress={this.onPressButton}
                        title={this.state.textValue}
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
      
        );
    }
}