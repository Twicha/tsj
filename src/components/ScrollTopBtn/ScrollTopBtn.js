
import React, { Component } from 'react';
import classes from './ScrollTopBtn.module.scss';
import classNames from 'classnames';
import arrow from './arrow.svg';
import doubleArrow from './double-arrow.svg';
import { connect } from 'react-redux';
import { fetchScrollDownNoActive, fetchScrollDownActive, fetchScrollUpNoActive, fetchHideSctollTopBtn, fetchScrollTop, fetchScrollUpActive } from '../../store/actions/scrollTopBtn';

export class ScrollTopBtn extends Component {

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.pageYOffset > 100 && this.props.active) {
                this.props.fetchScrollDownActive();
            } else if(window.pageYOffset > 100 && !this.props.active) {
                this.props.fetchScrollDownNoActive();
            } else if(window.pageYOffset < 100 && !this.props.active) {
                this.props.fetchScrollUpNoActive();
            }
        });
    }

    clickHandler = () => {
        this.props.fetchScrollTop(true, true, window.pageYOffset, this.props.coords);
    }

    render() {
        return (
            <div    
                onClick={this.clickHandler}
                className={classNames(classes.WrapperScrollTopBtn, this.props.active ? classes.Active : null, this.props.visible ? classes.Show : null)}
            >
                <div className={classes.ScrollTopBtn}>
                    {/* <div style={{'backgroundImage': `url(${this.props.active ? doubleArrow : arrow})`}}></div> */}
                    {this.props.active ? <div style={{'backgroundImage': `url(${doubleArrow})`}}></div> : <div style={{'backgroundImage': `url(${arrow})`}}></div>}
                    
                    
                    <span>{this.props.active ? null : 'Вверх'}</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visible: state.scrollTopBtn.visible,
        coords: state.scrollTopBtn.coords,
        active: state.scrollTopBtn.active,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchScrollDownNoActive: () => dispatch(fetchScrollDownNoActive()),
        fetchScrollDownActive: () => dispatch(fetchScrollDownActive()),
        fetchScrollUpNoActive: () => dispatch(fetchScrollUpNoActive()),
        fetchHideSctollTopBtn: () => dispatch(fetchHideSctollTopBtn()),
        fetchScrollUpActive: () => dispatch(fetchScrollUpActive()),
        fetchScrollTop: (visible, active, coords, stateCoords) => dispatch(fetchScrollTop(visible, active, coords, stateCoords)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollTopBtn);
