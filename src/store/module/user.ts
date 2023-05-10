import { defineStore } from "pinia";

type UserState = {
	netease_name: string;
	netease_id: number;
	netease_cookie: string;
	netease_login: boolean;
};

export const useUserStore = defineStore("UserStore", {
	state: (): UserState => {
		return {
			netease_name: "",
			netease_id: 0,
			netease_cookie: "",
			netease_login: false,
		};
	},
	getters: {},
	actions: {
		/**
		 * @description 更新用户cookie
		 * */
		update_cookie(value: string) {
			this.netease_cookie = value;
		},
		/**
		 * @description 更新名字
		 * */
		update_name(value: string) {
			this.netease_name = value;
		},
		/**
		 * @description 更新id
		 * */
		update_id(value: number | string) {
			this.netease_id = typeof value === "string" ? Number(value) : value;
		},
		/**
		 * @description 更新用户登录状态
		 * */
		update_login(value: boolean) {
			this.netease_login = value;
		},
	},
});
