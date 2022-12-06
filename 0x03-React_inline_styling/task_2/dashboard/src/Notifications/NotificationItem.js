import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

class NotificationItem extends React.Component {
    render() {
        let {
            id,
            type,
            value,
            html,
            className,
            markAsRead,
        } = this.props;

        let styleLi = (type === "urgent") ? styles.urgentNotif : styles.defaultNotif;
        
        if (!html) {
            return (
                <li data-notification-type={type}
                className={css(styleLi)}
                >{value}</li>
            )
        } else {
            return (
                <li data-notification-type={type}
                className={css(styleLi)}
                dangerouslySetInnerHTML={html}
                className={className}
                onClick={() => markAsRead(id)}
                ></li>
            );
        }
    }
}

const screenSize = {
    small: '@media screen and (max-width: 900px)',
  };
  
  const Small = {
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
  };
  

const styles = StyleSheet.create({
	defaultNotif: {
		color: 'blue',
        [screenSize.small]: Small,
	},
	urgentNotif: {
		color: 'red',
        [screenSize.small]: Small,
	},
});

NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: null,
    markAsRead: () => {},
    id: NaN
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

export default NotificationItem;