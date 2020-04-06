import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { TextField, EmailField, BooleanField } from 'react-admin';

export const OPERATIONS = [
    {
        url: '/operations/members',
        name: 'Members',
        data: 'users',
        icon: PersonIcon,
        fields: [
            { component: TextField, source: 'id' },
            { component: TextField, source: 'name' },
            { component: TextField, source: 'username' },
            { component: EmailField, source: 'email' },
            { component: TextField, source: 'address.street' },
            { component: TextField, source: 'phone' },
            { component: TextField, source: 'website' },
            { component: TextField, source: 'company.name' }
        ]
    },
    {
        url: '/operations/companies',
        name: 'Companies',
        data: 'comments',
        icon: BusinessCenterIcon,
        fields: [
            { component: TextField, source: 'id' },
            { component: TextField, source: 'name' },
            { component: EmailField, source: 'email' },
            { component: EmailField, source: 'body' },
        ]
    },
    {
        url: '/operations/claims',
        name: 'Claims',
        data: 'todos',
        icon: FeedbackIcon,
        fields: [
            { component: TextField, source: 'id' },
            { component: TextField, source: 'title' },
            { component: BooleanField, source: 'completed' }
        ]
    }
];