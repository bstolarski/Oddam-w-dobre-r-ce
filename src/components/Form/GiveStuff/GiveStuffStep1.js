import React, {Component} from 'react';

export default class GiveStuffStep1 extends Component {
    state = {
        currentSelect: "1"
    };

    handleSelectChange = (e) => {
        this.setState({
            currentSelect: e.target.value
        })
    };

    render() {
        return (
            <div className='give-stuff-step-container'>
                <div className='give-stuff-step-box'>
                    <p>Krok 1/4</p>
                    <div className='give-stuff-step-box-inputs'>
                        <h3>Zaznacz co chcesz oddać:</h3>
                        <div className='box-input-container'>
                            <label
                                className={this.state.currentSelect === '1' ? ' checked' : ''}>
                                <input className='btn-choose-input'
                                       type="checkbox"
                                       name="checkbox"
                                       value="1"
                                       onClick={this.handleSelectChange}
                                /> ubrania, które nadają się do ponownego użycia
                            </label>
                            <label
                                className={this.state.currentSelect === '2' ? ' checked' : ""}>
                                <input className='btn-choose-input'
                                       type="checkbox"
                                       name="checkbox"
                                       value="2"
                                       onClick={this.handleSelectChange}
                                /> ubrania, do wyrzucenia
                            </label>
                            <label
                                className={this.state.currentSelect === '3' ? ' checked' : ''}>
                                <input className='btn-choose-input'
                                       type="checkbox"
                                       name="checkbox"
                                       value="3"
                                       onClick={this.handleSelectChange}
                                /> zabawki
                            </label>
                            <label
                                className={this.state.currentSelect === '4' ? ' checked' : ''}>
                                <input className='btn-choose-input'
                                       type="checkbox"
                                       name="checkbox"
                                       value="4"
                                       onClick={this.handleSelectChange}
                                /> książki
                            </label>
                            <label
                                className={this.state.currentSelect === '5' ? ' checked' : ''}>
                                <input className='btn-choose-input'
                                       type="checkbox"
                                       name="checkbox"
                                       value="5"
                                       onClick={this.handleSelectChange}
                                /> inne
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}