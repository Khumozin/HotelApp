export class Email {
    Email: string;
    Name: string;
    MailType: EmailType;
    Token?: string;
    Message?: string;
    Subject?: string;
    AppName: string;
}

export enum EmailType {
    Regular,
    AccountActivation,
    ForgotPassword,
    SystemResponse
}