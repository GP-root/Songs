const myList = () => import("@/views/list/my.vue");
const recommendList = () => import("@/views/list/recommend.vue");
const topList = () => import("@/views/list/top.vue");
module.exports = [
	{
		path: "/list",
		children: [
      {
				// 我的歌单
        path: "my",
				component: myList,
      },
			{
				// 推荐歌单
				path: "recommend",
				component: recommendList,
			},			
			{
				// 榜单
				path: "top",
				component: topList,
			}
		],
	},
];
