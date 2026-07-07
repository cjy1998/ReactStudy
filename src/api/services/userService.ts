import type { User, UserInfo, UserToken } from "#/entity";
import type { Page } from "#/api";
import apiClient from "../apiClient";

export interface SignInReq {
	email: string;
	password: string;
}

export interface SignUpReq {
	username: string;
	email: string;
	password: string;
}
export type SignInRes = UserToken & { user: UserInfo };

export enum UserApi {
	SignIn = "/auth/signin",
	SignUp = "/auth/signup",
	Logout = "/auth/logout",
	Refresh = "/auth/refresh",
	User = "/users",
}

const signin = (data: SignInReq) => apiClient.post<SignInRes>({ url: UserApi.SignIn, data });
const signup = (data: SignUpReq) => apiClient.post<SignInRes>({ url: UserApi.SignUp, data });
export interface LogoutReq {
	refreshToken: string;
}

const logout = (data: LogoutReq) => apiClient.post({ url: UserApi.Logout, data });
const findById = (id: string) => apiClient.get<UserInfo[]>({ url: `${UserApi.User}/${id}` });
const getUsers = (page: number, pageSize: number) =>
	apiClient.get<Page<User>>({
		url: `${UserApi.User}?page=${page}&page_size=${pageSize}`,
	});
export default {
	signin,
	signup,
	findById,
	logout,
	getUsers,
};
