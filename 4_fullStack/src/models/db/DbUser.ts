
export interface DbUser
{
    user_id: number;
    email: string;
    password: string;
    is_deleted: boolean;
    created: Date;
}