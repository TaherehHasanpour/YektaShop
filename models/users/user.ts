
export interface Users {
    id: number;
    creationDate: string;
    name: string;
    family: string;
    phoneNumber: string;
    email: string;
    password: string;
    avatarName: string;
    isActive: string;
    gender: Gender;
    roles: Role[];
}
export enum Gender {
    none = 0,
    men = 1,
    women = 2
}
export interface Role {
    roleId: number;
    roleTitle: string
}
