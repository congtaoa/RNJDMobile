import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class CountDownView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = this.getDateData(this.props.date);
            if (date) {
                this.setState(date);
            } else {
                this.stop();
                // this.onEnd();
            }
        }, 1000);
    }
    componentWillMount() {
        const date = this.getDateData(this.props.date);
        if (date) {
            this.setState(date);
        }

    }
    componentWillUnmount() {
        this.stop();
    }
    getDateData(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date)) / 1000;

        if (diff <= 0) {
            return false;
        }

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        if (diff >= (365.25 * 86400)) {
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
        return timeLeft;
    }
    render() {
        const countDown = this.state;

        const { date, days, hours, mins, segs, onEnd, containerStyle, daysStyle, hoursStyle, minsStyle, secsStyle, firstColonStyle, secondColonStyle } = this.props;

        let daysValue;
        if (countDown.days === 1) {
            daysValue = days.singular;
        } else {
            daysValue = days.plural;
        }
        return (

            <View style={containerStyle}>
                {(countDown.daysValue > 0) ? <Text style={daysStyle}>{this.leadingZeros(countDown.daysValue) + daysValue}</Text> : null}
                <Text style={hoursStyle}>{this.leadingZeros(countDown.hours)}</Text>
                <Text style={firstColonStyle}>:</Text>
                <Text style={minsStyle}>{this.leadingZeros(countDown.min)}</Text>
                <Text style={secondColonStyle}>:</Text>
                <Text style={secsStyle}>{this.leadingZeros(countDown.sec)}</Text>
            </View>


        );
    }
    stop() {
        clearInterval(this.interval);
    }
    leadingZeros(num, length = null) {

        let length_ = length;
        let num_ = num;
        if (length_ === null) {
            length_ = 2;
        }
        num_ = String(num_);
        while (num_.length < length_) {
            num_ = '0' + num_;
        }
        return num_;
    }
};

const styles = StyleSheet.create({
    cardItemTimeRemainTxt: {
        fontSize: 20,
        color: '#ee394b'
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    },
    container: {
        flexDirection: 'row',
    },
    //时间文字
    defaultTime: {
        paddingHorizontal: 3,
        backgroundColor: 'rgba(85, 85, 85, 1)',
        fontSize: 12,
        color: 'white',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    //冒号
    defaultColon: {
        fontSize: 12, color: 'rgba(85, 85, 85, 1)'
    }
});

export default CountDownView;