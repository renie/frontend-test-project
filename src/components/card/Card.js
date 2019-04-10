import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {

    updateApp = () => {
        this.props.actions.updateNotAvailable();
        window.location.reload();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.card} >
                <div className={classes.cardBody}>
                   <h2>Card body</h2>
               </div>
                <div className={classes.cardFooter}>
                   <p>Card Footer</p>
               </div>
            </div>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Card;