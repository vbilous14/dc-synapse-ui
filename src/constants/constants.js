import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { TextField, EmailField, BooleanField, DateField, TextInput, BooleanInput } from 'react-admin';

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
        ],
        editFields: [
            { component: TextInput, source: 'name' },
            { component: TextInput, source: 'username' },
            { component: TextInput, source: 'email' },
            { component: TextInput, source: 'address.street' },
            { component: TextInput, source: 'phone' },
            { component: TextInput, source: 'website' },
            { component: TextInput, source: 'company.name' }
        ],
        type: 'list',
        subtype: 'card',
        rightPanel: {
            title: 'Member info',
            fields: [
                { component: DateField, source: 'date' }
            ]
        }
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
        ],
        editFields: [
            { component: TextInput, source: 'name' },
            { component: TextInput, source: 'email' },
            { component: TextInput, source: 'body' },
        ],
        type: 'list',
        subtype: 'card'
    },
    {
        url: '/operations/claims',
        name: 'Claims',
        data: 'todos',
        icon: FeedbackIcon,
        fields: [
            { component: TextField, source: 'id' },
            { component: TextField, source: 'titl\e' },
            { component: BooleanField, source: 'completed' }
        ],
        steps: [
            {
                editFields: [
                    { component: TextInput, source: 'title' }
                ],
                files: [
                    { name: 'Photos', value: 'photo' },
                    { name: 'Docs', value: 'pdf' }
                ],
                name: 'Step 1'
            },
            {
                editFields: [
                    { component: BooleanInput, source: 'completed' }
                ],
                files: [
                    { name: 'Docs', value: 'pdf' }
                ],
                name: 'Step 2'
            }
        ],
        type: 'list',
        subtype: 'steps',
        rightPanel: {
            title: 'Claim info',
            fields: [
                { component: DateField, source: 'date' }
            ]
        }
    }
];