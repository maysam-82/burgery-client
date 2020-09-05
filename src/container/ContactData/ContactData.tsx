import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import classes from './contactData.module.scss';

class ContactData extends Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            name: 'test',
            address: {
                street: 'test street',
                zipCode: 'xxxxxx',
                city: 'test city',
            },
            email: 'sample@sample.com',
            deliveryMethod: 'fastest',
            comments: 'without tomato',
        };
    }

    render() {
        return (
            <div className={classes.contactDataContainer}>
                <h4>Enter your contact data:</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Post Code" />
                    <Button type="danger" handleClick={() => {}}>
                        ORDER
                    </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
