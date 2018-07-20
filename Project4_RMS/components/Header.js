import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return(
        <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
            <a>
                <Menu.Item>
                        RMS
                </Menu.Item>
            </a>
            </Link>
            <Menu.Menu position='right'>
                <Link route="/tenants/newTenant">
                <a>
                    <Menu.Item>
                            Add Tenant
                    </Menu.Item>
                </a>
                </Link>
                <Link route="/rent/newRent">
                <a>
                    <Menu.Item>
                        Add Rent
                    </Menu.Item>
                </a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};