import { filter } from 'lodash';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => (_user.firstname.toLowerCase().indexOf(query.toLowerCase()) !== -1) || (_user.lastname.toLowerCase().indexOf(query.toLowerCase()) !== -1));
    }
    return stabilizedThis.map((el) => el[0]);
}
export function applyFilter(array, query) {
    return filter(array, (_data) => (_data.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) || (_data.department.toLowerCase().indexOf(query.toLowerCase()) !== -1));
}
export function filterArr(array, query) {
    return filter(array, (_data) => (_data.name.toLowerCase().indexOf(query.toLowerCase()) !== -1));
}

const userPrivilege = [
    {
        type: 'admin',
        privilege: 10,
    },
    {
        type: 'member',
        privilege: 5,
    },
    {
        type: 'alumni',
        privilege: 0,
    },
    {
        type: 'partner',
        privilege: 0,
    },
]

export const userType = (type) => {
    switch (type) {
        case "admin":
            return userPrivilege[0]
        case "member":
            return userPrivilege[1]
        case "alumni":
            return userPrivilege[2]
        case "partner":
            return userPrivilege[3]
        default:
            return userPrivilege[3];
    }
}

export const type = [
    {
        label: 'Admin',
        value: 'admin',
    },
    {
        label: 'Member',
        value: 'member',
    },
    {
        label: 'Alumni',
        value: 'alumni',
    },
    {
        label: 'Partner',
        value: 'partner',
    },
];
export const department = [
    {
        label: 'IGX',
        value: 'IGX',
    },
    {
        label: 'MKT',
        value: 'MKT',
    },
    {
        label: 'OGX',
        value: 'alumni',
    },
    {
        label: 'MM',
        value: 'MM',
    },
    {
        label: 'FL',
        value: 'FL',
    },
    {
        label: 'BD & EWA',
        value: 'BD & EWA',
    },

];